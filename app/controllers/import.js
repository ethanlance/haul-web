import Ember from 'ember';

import config from '../config/environment';
var Config = config.APP;

export default Ember.ObjectController.extend({

	//Current user id.
	currentUserIdBinding: 'session.currentUser.id',

	//Current user access_token
	access_tokenBinding: 'session.currentUser.access_token',

	//Harvest API!
	harvest_host: Config.Server.HARVEST_SERVER_HOST,

	//Image API!
	image_host: Config.Server.IMAGE_SERVER_HOST,

	//Url we will parse after entered into the form.
	url: null,

	//Is the form currently processesing?
	isProcessing: false,	

	//Wah, show the errors in the ui.
	showErrors: false,

	//A model of a new post that will be sent to new-post.js after we import
	newpost: null,

	animateClose: null,

	image_urls: [],

	image_ids: [],

	images: [],

	messages: {
		'start': 		'Analyzing link',
		'image': 		'Uploading',
		'image2': 		'We are on target',
		'end': 			'Succesfully processed!',
	},

	typeMessage: [],

	typeClear: false,

	showErrorsChange: function() {
		if( this.get('showErrors') ) {
			this.set('typeClear', true);
		}
	}.observes('showErrors'),

	importLink: function() {

		this.set('isProcessing', true);

		this.set('showErrors', false);

		var _this = this;

		var url = this.get('url');

		var urlencoded = encodeURIComponent( url );

		this.get('typeMessage').pushObject( this.get('messages')['start'] );

		return Ember.$.ajax({
			url: _this.get('harvest_host') + '/pages/opengraph?link='+urlencoded,
			type: 'GET',
			headers: {
				Authorization: 'Bearer ' + _this.get('access_token')
			},
			dataType: 'json'
		})

		//Take the OG Data and clean it up.
		.then(function(response){
				var image_url = '';
				var image_urls = _this.get('image_urls');
				if( !Ember.isEmpty(response.data.image_urls)){
					image_urls = response.data.image_urls;
				}else if( !Ember.isEmpty(response.data.image_url) ){
					image_urls.push( response.data.image_url );
				}

				if( !Ember.isEmpty(image_urls) ){
					image_url = image_urls[0];
				}
				
				
				var product_link = response.data.link;
				
				var body = response.data.description;
				
				var name = response.data.name;

				//Sitename:
				var parser = document.createElement('a');
				parser.href = product_link;
				var sitename = parser.hostname;
				
				//string
				name = String(name);
				body = String(body);

				//clean
				name = name.replace(/[&\/\\#,+()~%.'":*?<>{}]/g,' ');

				//trim
				name = name.trim();
				body = body.trim();

				//Safe:
				body = new Ember.Handlebars.SafeString(body);
				name = new Ember.Handlebars.SafeString(name);

				body = '<blockquote>"'+body.toString()+'" ~ '+ sitename +' </blockquote>';
				name = name.toString();

				var post = _this.store.createRecord('post', {
					body: body,
					product_name: name,
					product_link: product_link,
					image_url: image_url,
					product_status: 'FOR_SALE_OFFSITE'
				});

				_this.set('newpost', post);
				_this.set('image_urls', image_urls);

			return;
		})

		//Upload the image by the image_url.
		.then(function(){

			var promise, message;

			var promisesArray = [];

			var image_urls = _this.get('image_urls');


			//Image url conditioning:
			image_urls = _this.conditionImageUrls( image_urls );
 			

 			//TYPEWRITER:
 			//TYPEWRITER:
 			//TYPEWRITER:
 			if( image_urls.length.length === 0){
 				//Nothing
 			}else if( image_urls.length === 1){
 				message = _this.get('messages')['image'] + " 1 image";
 				_this.get('typeMessage').pushObject( message);
 			}else{
 				message = _this.get('messages')['image'] + " " + image_urls.length + " images";	
 				_this.get('typeMessage').pushObject(message);
 			}
			

			image_urls.forEach(function(image_url, index) {
				var data = {
					user_id: _this.get('currentUserId'),
					link: image_url,
				};

				promise = Ember.$.ajax({
					url: _this.get('image_host') + '/images/links',
					type: 'POST',
					data:data,
					headers: {
						Authorization: 'Bearer ' + _this.get('access_token')
					},
					dataType: 'json'
				})
				.then(function(response){
					var image_id = response.data[0].image_id;

					var image_ids = _this.get('image_ids');

					image_ids.pushObject(image_id);

				});

				promisesArray.push(promise);
			});
 			
			
 			_this.get('typeMessage').pushObject( _this.get('messages')['image2'] );

			return Ember.RSVP.all(promisesArray)
				.then(function(){
		
				var image_ids = _this.get('image_ids');
	
				var promise;

				var promisesArray = [];

			 	image_ids.forEach(function(id){

			 		promise = _this.store.find('image', id)
			 		.then(function(image){
			 			_this.get('images').pushObject(image);
			 		});
			 		promisesArray.push(promise);

			 	});

			 	return Ember.RSVP.all(promisesArray)
				.then(
					function() {

						_this.set('isProcessing', false);

						//TYPEWRITER
						//TYPEWRITER
						//TYPEWRITER
						_this.get('typeMessage').pushObject( _this.get('messages')['end'] );

						var model = _this.get('newpost');	

						model.set('import_images', _this.get('images'));

						Ember.run.later(function() {
							_this.send('openModal', 'new-post', model);
						}, 1500);
					}
				);
			})
		})
	

		.then(
			function success(response) {
				//Should never get to here.
			},

			function failed(error) {
				_this.set('isProcessing', false);
				_this.set('showErrors', true);
			}
		);

	},


	conditionImageUrls: function( urls ) {

		for( var i=0; i<urls.length; i++) {

			var url = urls[i];

			//Shopify
			if( url.indexOf('cdn.shopify.com') > -1 ) {
				url = url.replace(/_medium./, ".");
				url = url.replace(/large./, ".");
				url = url.replace(/_small./, ".");
				url = url.replace(/_thumb./, ".");
				urls[i] = url;
			}
		}

		return urls;

	},

	closeWindow: function() {
		
		this.set('animateClose', true);

		this.send('closeRouter');

	},


	actions: {

		doImport: function() {
			this.importLink();
		},

		close: function() {
			this.closeWindow();
		},

		cancel: function() {
			this.closeWindow();
		},
	 
	}

});