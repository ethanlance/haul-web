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

	importLink: function() {

		this.set('isProcessing', true);

		this.set('showErrors', false);

		var _this = this;

		var url = this.get('url');

		var urlencoded = encodeURIComponent( url );

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

				var image_url = response.data.image_url;				
				
				var product_link = response.data.link;
				
				var body = response.data.description;
				
				var name = response.data.name;

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

				body = "<blockquote>"+body.toString()+"</blockquote>";
				name = name.toString();

				var post = _this.store.createRecord('post', {
					body: body,
					product_name: name,
					product_link: product_link,
					image_url: image_url
				});

				_this.set('newpost', post);


			return image_url;
		})

		//Upload the image by the image_url.
		.then(function(image_url){

			var data = {
				user_id: _this.get('currentUserId'),
				link: image_url,
			}

			return Ember.$.ajax({
				url: _this.get('image_host') + '/images/links',
				type: 'POST',
				data:data,
				headers: {
					Authorization: 'Bearer ' + _this.get('access_token')
				},
				dataType: 'json'
			});
		})

		//Image uploaded, now request it.
		.then(function(image_response){
			
			var image_id = image_response.data[0].image_id;

			return _this.store.find('image', image_id)
			.then(function(record){

				var model = _this.get('newpost');	
			
				console.log("RECORD", record.id)
				
				model.set('import_images', [record]);

				return model;	

			})
			.then(
				function() {
					console.log("OPEN MODAL");
					_this.set('isProcessing', false);
					_this.send('openModal', 'new-post', _this.get('newpost'));			

				}
			);
			
		})

		.then(
			function success(response) {
				//Should never get to here.
				console.log('ping')
			},

			function failed(error) {
				_this.set('isProcessing', false);
				_this.set('showErrors', true);
			}
		);

	},


	actions: {

		doImport: function() {
			this.importLink();
		},

		close: function() {
			this.set('animateClose', true);
		},

		cancel: function() {
			this.set('animateClose', true);
		},
	 
	}

});