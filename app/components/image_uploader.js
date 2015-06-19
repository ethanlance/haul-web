import Ember from 'ember';
var $ = Ember.$;
/* global Dropzone */
export default Ember.Component.extend({

	//Dropzone.js is the plugin we use for uploading an image.
	dropzone: null, 
 
	//Current user id is needed.
	currentUserIdBinding: 'session.currentUser.id',

	//Current user access token, so we can upload to the api.
	currentUserTokenBinding: 'session.currentUser.access_token', 

	//Define the store.
	store: null,

	//Max amount of files we allow to be uploaded at once.
	maxFiles: 10,

	//Normally we allow uploading of mutiple.
	canUploadMultiple: null,

	isUploading: false,

	showUploader: true,


	//If a singleImage is passed to this component, 
	//then the UI changes to uploading/overriding a single image.
	singleImageBinding: 'singleImage',

	isSingleImage: Ember.computed.notEmpty('singleImage'),

	singleImageButtonText: "Change Image",

	hideSingleImage: false,



	isUploadingChanges: function() {
		if( this.get('isUploading') && this.get('maxFiles') == 1 ) {
			this.set('showUploader', false);
		} else {
			this.set('showUploader', true);
		}
	}.observes('isUploading'),


	singleImageWatch: function() {
		this.set('hideSingleImage', false);
	}.observes('singleImage'),

	//This method kicks off when the component renders and set's up the uploader
	startUpImageUploader: function(){
		var _this = this;  

		//No user, no uploading!
		if( Ember.isEmpty(this.get('currentUserId')) || Ember.isEmpty(this.get('currentUserToken')) ){ return; }

		//Convenience, save the store.
		this.set('store', this.container.lookup("store:main"));

		//Initialize this dropzone
		this.startUpDropZone();
	
	}.on('didInsertElement').observes('currentUserId', 'currentUserToken'),


	startUpDropZone: function() {

		//Dropzone Initialize:
		Dropzone.autoDiscover = false;


		//Make this dropzone unique, so we can have multiple in a page.
		var dz = $(this.get('element')).find('.haul-image-uploader').one()[0];
		var btn = $(this.get('element')).find('#haul-dropzone-browse').one()[0];
		var uploading = $(this.get('element')).find('#uploading').one()[0];

		var dzClassName = 'dz' + Math.random().toString( 36 ).substr( 2 )
		var btnClassName = "btn" + dzClassName;
		var uploadingClassName = "uploading" + dzClassName;

		$(dz).addClass(dzClassName);
		$(btn).addClass(btnClassName);
		$(uploading).addClass(uploadingClassName);

		dzClassName = "." + dzClassName;
		btnClassName = "." + btnClassName;
		uploadingClassName = "." + uploadingClassName;

		
		//If mobile, we need to allow only one image upload at a time.
		var isMobile = { 
			Android: function() { return navigator.userAgent.match(/Android/i); }, 
			BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); }, 
			iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, 
			Opera: function() { return navigator.userAgent.match(/Opera Mini/i); }, 
			Windows: function() { return navigator.userAgent.match(/IEMobile/i); }, 
			any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } 
		}

		
		if(isMobile.any() || this.get('isSingleImage') ) {
			this.set('maxFiles', 1);
		}

		//Maxfiles allowed to be uploaded
		var maxFiles = this.get('maxFiles');
		if( maxFiles > 1 ) {
			this.set('canUploadMultiple', true);
		}else{
			this.set('canUploadMultiple', false);
		}


		var previewTemplate = '<li class="image-wrapper dz-preview dz-file-preview"><div class="dz-details"><img data-dz-thumbnail /></div><div class="alert-wrapper hide"><div class="alert alert-danger" role="alert">Upload Failed</div></div><div class="progress-wrapper"><div class="progress"><div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 10%" data-dz-uploadprogress><span class="sr-only">10% Complete</span></div></div></div><button data-dz-remove type="button" class="btn btn-default btn-sm btn-delete"><span class="glyphicon glyphicon-trash"></span></button></li>';
		if(this.get('isSingleImage')) {
			previewTemplate = '<li class="image-wrapper dz-preview dz-file-preview"><div class="dz-details"><img data-dz-thumbnail /></div><div class="alert-wrapper hide"><div class="alert alert-danger" role="alert">Upload Failed</div></div><div class="progress-wrapper"><div class="progress"><div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 10%" data-dz-uploadprogress><span class="sr-only">10% Complete</span></div></div></div></li>';			
		}

		//Handle to ember.
		var self = this;

		this.dropzone = new Dropzone(dzClassName, { 

			url: this.ENV.Server.IMAGE_SERVER_HOST + "/images",
			
			method: "post",
			
			headers: {"Authorization": "Bearer " + this.get('currentUserToken')},
			
			params: {'user_id': this.get('currentUserId')},
			
			paramName: "attachment",
			
			previewTemplate: previewTemplate,
			
			previewsContainer: uploadingClassName,
			
			clickable: btnClassName, 
			
			capture: true,

			acceptedFiles: "image/*",

			maxFiles: maxFiles,

			init: function() {
				
				this.on('success', Ember.run.bind(self, function(file, response) {
					this.sendImageUploaded(file, response);
				}));

				this.on('uploadprogress', Ember.run.bind(self, function(file, progress) {
					this.uploadProgress(file, progress);
				}));

				this.on('addedfile', Ember.run.bind(self, function(file) {
					this.set('hideSingleImage',true);
					this.set('isUploading', true);
				}));

				this.on('error', Ember.run.bind(self, function(file, response) {
					this.uploadError(file, response);
				}));
			}
		});
	},


	uploadProgress: function(file, progress) {
		var el = file.previewElement.querySelectorAll("[data-dz-uploadprogress]");

		function waitingForResponse(el){
			var w = parseInt($(el).attr("aria-valuenow"));
			if( w === 100 ){
				window.clearInterval(file.progressInterval);
				return;
			} 
			var p = w + 1; 
			$(el).css('width', p+'%').attr("aria-valuenow", p);
		}

		if(progress > 80){
			progress = 80;
			$(el).css('width', progress+'%').attr("aria-valuenow", progress); 
			file.progressInterval = setInterval(function () {	waitingForResponse(el); }, 200);
		}else{	 
			$(el).css('width', progress+'%').attr("aria-valuenow", progress);
		}
	},

	uploadError: function(file, response, msg) {
		
		var alertWrapper = file.previewElement.querySelector('.alert-wrapper');
		$(alertWrapper).removeClass('hide');
		
		var progessWrapper = file.previewElement.querySelector('.progress-wrapper');
		$(progessWrapper).addClass('hide');


		var message = response.message;
		var alert;
		if( msg ){
			alert = msg;
		}else if( message && message.indexOf("maximum allowed") !== -1){
			alert = "Image too big";
		}else{
			alert = "Image too small";
		}

		var messageDiv = file.previewElement.querySelector('.alert');

		$(messageDiv).html( alert );

		window.clearInterval(file.progressInterval);
	},

	//An image has uploaded.  
	sendImageUploaded: function(file, response) {
		var _this = this;
		var store = this.get('store');
		var image_id = response.data[0].image_id;
		var i = 0;
		var retryTimes = 10;
		var retryWait = 1000;
		var getThumbInterval = false;

		//If no thumb returns, then try again.
		//This happens when icons are uploaded, the image
		//takes time to crunch.
		function waitingForResponse() {
			i++;
			store.find('image', image_id)
			.then(function(image){
				return image.reload();	
			}).then(function(image) {
				
				if(image.get('thumb')) {

					//Validate:
					//Make sure the image has size size.  If not it's too small.
					if( Ember.isEmpty(image.get('small')) ){

						_this.uploadError(file, response)

						return false;
					}


					window.clearInterval(getThumbInterval);
					window.clearInterval(file.progressInterval); 
					_this.dropzone.removeFile(file);
					_this.sendAction('imageHasUploaded', image);
					_this.set('isUploading', false);
					return;
				} 

				if( i > retryTimes ) { 

					var msg = "Server Not Responding"
					_this.uploadError(file, response, msg);

				}

			});
		} 

		//Get the thumb
		store.find('image', image_id)
		.then(function(image){ 
			return image; 
		}).then(function(image) {
			var thumb  = image.get('thumb');
			if( !thumb ) { 
				getThumbInterval = setInterval(function () { 
					waitingForResponse();
				}, retryWait); 
			} else {

				//Validate:
				//Make sure the image has size size.  If not it's too small.
				if( Ember.isEmpty(image.get('small')) ){

					_this.uploadError(file, response);

					return false;
				}

				window.clearInterval(file.progressInterval); 
				
				_this.dropzone.removeFile(file);
				_this.sendAction('imageHasUploaded', image);
				_this.set('isUploading', false);
				return;
			}
		});
	}
});