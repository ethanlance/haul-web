import Ember from 'ember';
import ErrorMixin from '../mixins/server_error';
export default Ember.ObjectController.extend(ErrorMixin, {

	//Model Key is random
	modelKeyBinding: 'model.key',
	
	//Current user object.
	currentUserBinding: 'session.currentUser',
	
	//Current user id.
	currentUserIdBinding: 'session.currentUser.id',

	//Current user access_token
	access_tokenBinding: 'session.currentUser.access_token',
	
	//Are we proccesing a submission.
	isProcessingSavePost: false,

	//Have images been selected?
	imagesAreSelected: Ember.computed.gte('productImageIds.length', 1),
	
	//Selected image ids
	productImageIds: [],
	
	//Selected image objects
	selectedImages: [],

	//Does current user need to fill out the seller account form?
	needsSellerAccount: false,

	editorialForBody: "",

	showErrors: false,

	triggerEditorResize: false,

	setEditorImgSrc: null,

	//Prepopulate the post.subject with the value of post.product_name
	prevProductName: '',


	/**
		Slides:
	**/
	animateClose:false,

	slideOpened: 'showImportForm',

	//Is this item for sale on Haul? Or is it just a post to an external link.
	isOnsite: true,

	isReady: false,



	/**
		Import a URL via Harvest API
	**/

	//Harvest API!
	harvest_hostBinding: 'this.ENV.Server.HARVEST_SERVER_HOST',

	//Image API!
	image_hostBinding: 'this.ENV.Server.IMAGE_SERVER_HOST',

	//Is the form currently processesing?
	isProcessingImport: false,	

	showLinkError: false,

	showImportFailed: false,

	import_image_urls: [],

	import_image_ids: [],

	import_images: [],

	importSuccess: false,



	/**
		
		The controller needs the route/component that activates it to supply 
		a model with a unique id.  

		When a unique id is detected, the form is reset.
	
	**/
	startNewPost: function() {

		if( Ember.isEmpty(this.get('currentUserId')) || Ember.isEmpty(this.get('modelKey')) ){
			return;
		}

		//Reset the UI.
		this.reset();

		//The Model is created fresh at the route/new-post.js or component/new_post_btn.js level.
		var model = this.get('model');

		//Set default values on the model.
		model.setProperties({
			'body': ' ', 
			'product_name': '',
			'product_quantity':'1',
			'product_shipping':'0',
			'product_currency':'USD',
			'user_id': this.get('currentUserId'),
			'tags': ''
		});

		this.checkIfNeedsSeller();

		var _this = this;
		Ember.run.later(function(){
			_this.set('isReady', true);
		},2000);

	}.on('init').observes('modelKey', 'currentUserId'),



	reset: function() {

		// this.set('showImportForm', false);
		// this.set('showProductForm', false);
		// this.set('showChoose', true);

		this.set('slideOpened', 'showImportForm');
		this.set('isOnsite', true);

		this.set('selectedImages', []);
		this.set('productImageIds', []);

		this.set('import_image_urls', []);
		this.set('import_image_ids', []);
		this.set('import_images', []);

		this.set('showErrors', false); 
		this.set('showLinkError');
		this.set('showImportFailed', false);
		this.set('needsSellerAccount', false);
		
	},

	showChanged: function() {

		if(Ember.isEmpty(this.get('show'))) { return; }

		var slideIn 	= this.get('show');
		var slideOut 	= this.get('slideOpened');

		$('.modal').animate({
			scrollTop: 0
		}, 300, 
			function(){

				$('#'+slideIn)
				.fadeOut()
				.removeClass('hide')
				.slideDown(1)
				.fadeIn(function(){
					$('#'+slideOut ).slideUp(600);
				});

		});

		this.set('slideOpened', slideIn);

	}.observes('show'),






	makeModelOffsite: function() {
		var model = this.get('model');
		model.set('product_status', 'FOR_SALE_OFFSITE');
		this.set('isOnsite', false);
	},

	makeModelOnSite: function() {
		var model = this.get('model');
		model.set('product_status', 'FOR_SALE');
		this.set('isOnsite', true);
	},

	/**
		Method is called after suceess/failure of the importLink method.
	**/
	doShowOffsiteForm: function() {
		this.makeModelOffsite();
		this.set('show','showProductForm');
	},


	doShowOnsiteForm: function() {
		this.makeModelOnSite();
		this.set('show','showProductForm');
	},


	doShowImportForm: function(){
		this.set('show','showImportForm');
	},

	doShowTypeOfPostForm: function() {
		this.set('show','showTypeOfPostForm');
	},



	/**
		Helper Function:
		Set the title of the post to be that of the product title.
		Unless the user has set a title for the post.
	**/
	subjectChanged: function() {
		var prevProductName = this.get('prevProductName');
		var product_name = this.get('model.product_name');
		var subject =	this.get('model.subject');
		if( (Ember.isEmpty(subject) && !Ember.isEmpty(product_name))  ||  prevProductName === subject ) {
			this.get('model').set('subject', product_name);
		}
		this.set('prevProductName', product_name);
	}.observes('model.product_name'),


	doEditorResize: function() {

		if(this.get('slideOpened') === "showPostForm" ) {
			var _this = this;
			Ember.run.later(function(){
				_this.set('triggerEditorResize', true);
			}, 300);
		}

	}.observes('slideOpened'),



	/**
		Errors are present? Then scroll the window to the top.
		We want to bring attention to the user.
	**/
	displayErrors: function() {
		if(this.get('showErrors')){
			this.set('showErrorBar', true);

			$('.modal').animate({
    			scrollTop: 0
			}, 200);

			var _this = this;
			Ember.run.later(function() {
				_this.set('showErrorBar', false);
			}, 1500);

		}else{
			this.set('showErrorBar', false);
		}
	}.observes('showErrors'),







	/**
		Check to see if the user still needs a seller account.
	**/
	checkIfNeedsSeller: function() {
		var _this = this;
		if(this.get('needsSellerAccount')) { return; } //dont check again.
    	this.store.find('seller', _this.get('currentUserId')).then(
        	function success(record){
                if(Ember.isEmpty(record)  ||  record.get('isDirty') ) {
                    _this.set('needsSellerAccount', true);
                }

        	},
        	function failed(error){   		
        		_this.set('needsSellerAccount', true);
        	}
        );
	},



	/*
		Enforce numbers only
	*/
	prevPrice: null,
	prevShipping: null,
	priceCleaner: function(){
		var model = this.get('model');

		//Product Price
		if( model.get('product_price') && model.get('product_price') !== this.get('prevPrice') ) {
			model.set('product_price', this.get('product_price').replace(/\D/g,''))
			this.set('prevPrice', model.get('product_price'));
		}

		//Product Shipping
		if( model.get('product_shipping') &&  model.get('product_shipping') !== this.get('prevShipping') ) {
			model.set('product_shipping', this.get('product_shipping').replace(/\D/g,''))
			this.set('prevShipping', model.get('product_shipping'));
		}
		
	}.observes('model.product_shipping','model.product_price'),






	/**
	
		Blog Post Helpers:
		To make it easy for users, we create a post for them that they can edit.
		We inject an image and tags into their post.

	**/

	doImageInjection: function() {
		if( !Ember.isEmpty( this.get('selectedImages') ) ){
			var image = this.get('selectedImages')[0];
			this.set('setEditorImgSrc', image.get('small') );
		}
	},

	doQuoteInjection: function(quote) {
		this.set('setEditorText', quote);
	},

	doTagInjection: function() {

		var model = this.get('model');
		var tags = model.get('tags');

		if( !Ember.isEmpty(tags) ){

			tags = tags.split(" ");

			var str = "";
			tags.forEach(function(tag){
				tag = tag.trim();

				tag = tag.replace(/[\W_]+/g,'');

				if( tag ) {
					str += " #" + tag + " ";
				}
			});

			//this.set('setEditorText', str);			 

			var body = this.get('model.body');
			body = body + "<p>" + str + "</p>";
			this.set('model.body', body);
		}
	},











	/**
		IMAGES:
		The following methods deal with the upload, ordering, selecting of images.
	**/

	//Observer: anytime our array of selected images changes, update
	// our list of image_ids.
	imagesIdsChanged: function() {

		if(Ember.isEmpty(this.get('selectedImages'))){
			return; //bail
		}

		this.set('showImageError', false);



		var ids = this.get('selectedImages').map(function(image) {
			return image.get('id');
		});
		this.set('productImageIds', ids); 



		//Set the images on the model.
		var model = this.get('model');
		model.set('product_image_ids', this.get('productImageIds')); 
		model.set('image_id', this.get('productImageIds')[0]); 


		//If the post body has no content, then add the main image as content.
		var model = this.get('model');
		var body = model.get('body');
		
		if( body &&  Ember.isEmpty(body.trim()) ){
			this.doImageInjection();
		}

	}.observes('selectedImages.@each'),


	//Preserves the drag sort order of the images.
	updateSortOrder: function(indexes) { 
		var selectedImages = this.get('selectedImages');
	    selectedImages.beginPropertyChanges();

	    selectedImages.forEach(function(item) {
	      var index = indexes[item.get('id')];
	      item.set('idx', index);
	    }, selectedImages);
	    selectedImages = selectedImages.sortBy('idx');
	    
	    selectedImages.endPropertyChanges();
	    this.set('selectedImages', selectedImages);
	},

	selectImage: function(image) {
		var selectedImages = this.get('selectedImages'); 
		var found = false;

		selectedImages.forEach(function(result){
			if(result.get('id') === image.get('id')){
				found = true;
				return;
			}
		});

		if( found ) { 
			var objects = [];
			selectedImages.forEach(function(result){
				if( result.get('id') !== image.get('id')){
					objects.push(result);
				}
			});
			this.set('selectedImages', objects);
		//Add
		} else {
			selectedImages.pushObject(image);
		}
	},






	/**
		Validate the Product Form
	**/
	//Observe the product for completeness, and triggers validation on the product
	//before the user can advance to the post section.
	validateProduct: function() {

		this.set('isProcessingNext', true);
		this.set('showLinkError', false);
		this.set('showImageError', false);
		this.set('showErrors', false);
		
		var _this = this;
		var model = this.get('model');
		var hasErrors = false;
		
		//Has image?
		if( Ember.isEmpty(this.get('selectedImages')) ) {
			hasErrors = true;
			this.set('showImageError', true);
			console.log("IMAGE ERROR")
		}

		//If product_status === FOR_SALE_OFFSITE
		//then product_link must no be empty.
		if( model.get('product_status') === 'FOR_SALE_OFFSITE' && Ember.isEmpty( model.get('product_link') )) {
			hasErrors = true;
			this.set('showLinkError', true); 
		}

		model.validate()
		.then(
			function valid(){

				if( hasErrors ) {
					_this.set('showErrors', true); 
					_this.set('isProcessingNext', false);
					return;
				}

				_this.set('show', "showPostForm");
				_this.set('showErrors', false);
				_this.set('isProcessingNext', false);
			},
			function invalid(errors){
				_this.set('isProcessingNext', false);
				console.log("Validate Errors ", errors);
				if( hasErrors ||
					errors.get('product_name').length > 0 ||
					errors.get('product_price').length > 0 ||
					errors.get('product_quantity').length > 0 || 
					errors.get('product_shipping').length > 0 || 
					errors.get('product_status').length > 0 ){
						_this.set('showErrors', true);
						_this.set('isProcessingNext', false);
				}else{
					_this.set('show', "showPostForm");
					_this.set('showErrors', false);
					_this.set('isProcessingNext', false);
				}
			}
		);
		
	},


	/**
		SAVE: 
		This method saves the post and the product.
	**/

	savePost: function() {
		this.set('isProcessingSavePost', true);
		this.set('showErrors', false);

		var _this = this;
		var model = this.get('model');

		//Trim
		var body = this.get('editorialForBody').trim();
		if(Ember.isEmpty(body)){
			body = " ";
		}

		model.set('body', body);



 		//Model Validations:
		model.validate()
		.then(function(){

			_this.doTagInjection();
			

			return model.save();
		})
		.then(function(postRecord){

			//Handle to the saved post.
			_this.set('postRecord', postRecord);

			//Reload user's post-list
			return _this.store.find('post-list', {user_id:_this.get('currentUserId'), doNotPaginate:true});
		})
		.then(function(){

			//Reload user's feed list
			return _this.store.find('feed', {user_id:_this.get('currentUserId'), doNotPaginate:true});
		})
		.then(
			function success(record){
				
				var user = _this.get('currentUser');

				_this.set('isProcessingSavePost', false); 

				_this.set('show', "showSuccess");
				
			}, 
			function fail(error){

				_this.set('isProcessingSavePost', false);

				//Mixin:
				_this.handleServerError(error)

				_this.set('showErrors', true);
			}
		);
	},




	//Take user to see the saved post:
	transitionToPost: function() {
		this.set('animateClose', true);
		
		var username = this.get('currentUser').get('username');

		var post = this.get('postRecord'); 

		var _this = this;
		Ember.run.later(function(){
			_this.transitionToRoute('profile.post', username, post );
		},200);
	},

	closeWindow: function() {
		
		this.set('animateClose', true);

		this.send('closeRouter');

	},





	/**
		Import Link Methods
	**/
	import_messages: {
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

		this.set('isProcessingImport', true);

		this.set('showLinkError', false);

		this.set('showImageError', false);

		this.set('showImportFailed', false);

		var _this = this;

		var url = this.get('product_link');

		var urlencoded = encodeURIComponent( url );

		this.get('typeMessage').pushObject( this.get('import_messages')['start'] );

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
			var image_urls = _this.get('import_image_urls');
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

			body = '"'+body.toString()+'" ~ '+ sitename;
			name = name.toString();

			_this.doQuoteInjection(body);

			var model = _this.get('model');
			model.set('product_name', name);


			_this.set('import_image_urls', _this.conditionImageUrls( image_urls ) );

			return;
		})

		//Upload the image by the image_url.
		.then(function(){

			var promise, message;

			var promisesArray = [];

			var image_urls = _this.get('import_image_urls');
		

 			//TYPEWRITER:
 			//TYPEWRITER:
 			//TYPEWRITER:
 			if( image_urls.length.length === 0){
 				//Nothing
 			}else if( image_urls.length === 1){
 				message = _this.get('import_messages')['image'] + " 1 image";
 				_this.get('typeMessage').pushObject( message);
 			}else{
 				message = _this.get('import_messages')['image'] + " " + image_urls.length + " images";	
 				_this.get('typeMessage').pushObject(message);
 			}
			
			var image_ids = _this.get('import_image_ids');

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

					image_ids.pushObject(image_id);

				});

				promisesArray.push(promise);
			});
 			
			
 			_this.get('typeMessage').pushObject( _this.get('import_messages')['image2'] );

			return Ember.RSVP.all(promisesArray)
				.then(function(){
		
				var image_ids = _this.get('import_image_ids');
	
				var promise;

				var promisesArray = [];

			 	image_ids.forEach(function(id){

			 		promise = _this.store.find('image', id)
			 		.then(function(image){
						
						_this.selectImage(image);
				
			 		});
			 		promisesArray.push(promise);

			 	});

			 	return Ember.RSVP.all(promisesArray)
				.then(
					function() {


						//TYPEWRITER
						//TYPEWRITER
						//TYPEWRITER
						_this.get('typeMessage').pushObject( _this.get('import_messages')['end'] );

						_this.set('isProcessingImport', false);

						_this.doImageInjection();

						_this.doShowTypeOfPostForm();
					}
				);
			})
		})
	

		.then(
			function success(response) {
				//Should never get to here.
			},

			function failed(error) {
				
				console.log("IMPORT FAIL", error);

				_this.set('isProcessingImport', false); 

				_this.set('typeClear', true);

				_this.set('showImportFailed', true);
				
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














	actions: { 

		sellerAccountSaved: function() {
			this.transitionToPost();
		},

		goToPost: function() {
			this.transitionToPost();
		},

		back: function() {
			this.set('show', 'showProductForm');
		},

		next: function() {
			this.validateProduct();
		},

		close: function() {
			this.closeWindow();
		},

		cancel: function() {
			this.closeWindow();
		},
	
		savePost: function() { 
			this.set('isProcessingSavePost', true);
			this.set('requestEditorContents', true);
		},

		quillChange: function(text) { 
			this.set('editorialForBody', text); 
			this.savePost();
		},

		imageClick: function(event) {
			var image = event.get('image');
			this.selectImage(image);
		},

		imageDelete: function(event) {
			this.selectImage(event);
		},

		refresh: function(image) {
			this.selectImage(image);			
		}, 

		descriptionChange: function(text) { 
			var model = this.get('model');
			model.set('product_description', text);	
		},


		doShowImportForm: function() {
			this.doShowImportForm();
		},

		doShowOnsiteForm: function() {
			this.doShowOnsiteForm();
		},

		doShowOffsiteForm: function() {
			this.doShowOffsiteForm();
		},

		doImport: function() {
			this.importLink();
		},

		doShowTypeOfPostForm: function() {
			this.doShowTypeOfPostForm();
		}

	}
});