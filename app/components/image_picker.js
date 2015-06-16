import Ember from 'ember';
var $ = Ember.$;
/* global Dropzone */
export default Ember.Component.extend({

	dropzone: null, 
 
	errorDeleteModalStyle: "display:none",

	user_idBinding: 'session.currentUser.id',

	user_tokenBinding: 'session.currentUser.access_token',

	store: null,

	maxFiles: 20,

	canUploadMultiple: null,

	isUploading: false,

	showUploader: true,

	isUploadingChanges: function() {
		if( this.get('isUploading') && this.get('maxFiles') == 1 ) {
			this.set('showUploader', false);
		} else {
			this.set('showUploader', true);
		}
	}.observes('isUploading'),

	didInsertElement: function(){
		var _this = this;  

		if(!this.get('user_id')){
			return;
		}
		var user_id = this.get('user_id');
		this.set('store', this.container.lookup("store:main"));

		var el = $(this.get('element')).find('.haulDropZone').one()[0];

		var className = 'drop' + Math.random().toString( 36 ).substr( 2 )
		$(el).addClass(className);

		var clickClassName = "click" + className;
		var btn = $(this.get('element')).find('#haul-dropzone-browse').one()[0];
		$(btn).addClass(clickClassName);
		clickClassName = "." + clickClassName;

		

		var isMobile = { 
			Android: function() { return navigator.userAgent.match(/Android/i); }, 
			BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); }, 
			iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, 
			Opera: function() { return navigator.userAgent.match(/Opera Mini/i); }, 
			Windows: function() { return navigator.userAgent.match(/IEMobile/i); }, 
			any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } 
		};

		
		var maxFiles = this.get('maxFiles');
		if(isMobile.any()) {
			maxFiles = 1;
		}


		if( maxFiles > 1 ) {
			this.set('canUploadMultiple', true);
		}else{

			this.set('canUploadMultiple', false);
		}



		Dropzone.autoDiscover = false;

		this.dropzone = new Dropzone('.'+className, { 

			url: this.ENV.Server.IMAGE_SERVER_HOST + "/images",
			
			method: "post",
			
			headers: {"Authorization": "Bearer " + this.user_token},
			
			params: {'user_id':user_id},
			
			paramName: "attachment",
			
			dictDefaultMessage: "Drop Files Here <br/> OR <br/> Click Here To Browse Your Files",
			
			previewTemplate: '<li class="image-wrapper dz-preview dz-file-preview"><div class="dz-details"><img data-dz-thumbnail /></div><div class="alert-wrapper hide"><div class="alert alert-danger" role="alert">Upload Failed</div></div><div class="progress-wrapper"><div class="progress"><div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 10%" data-dz-uploadprogress><span class="sr-only">10% Complete</span></div></div></div><button data-dz-remove type="button" class="btn btn-default btn-sm btn-delete"><span class="glyphicon glyphicon-trash"></span></button></li>',
			
			previewsContainer:  '#uploading', //".dropzone-preview",
			
			thumbnailWidth: 100,
			
			thumbnailHeight: 100,
			
			clickable: clickClassName, 
			
			capture: true,

			acceptedFiles: "image/*",

			maxFiles: maxFiles,


			init: function() {

				this.on('success', function(file, response) {

					_this.set('isUploading', false);


					var _self = this;
					var store = _this.get('store');
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
							var thumb  = image.get('thumb');

							if(thumb) {
								window.clearInterval(getThumbInterval);
								window.clearInterval(file.progressInterval); 
								_self.removeFile(file);
								_this.refreshImages(image);
								return;
							} 

							if( i > retryTimes ) { 

								console.log("TOO MANY TRIES, ERROR OUT");

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
							window.clearInterval(file.progressInterval); 
							
							_self.removeFile(file);
							_this.sendAction('refresh', image);
							return;
						}
					});
				});


				this.on('uploadprogress', function(file, progress) {	

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
				});

				this.on('addedfile', function(file) {	
					
					_this.set('isUploading', true);

				});

				this.on('error', function(file, response) { 
					
					console.log("ERROR", file);

					var alertWrapper = file.previewElement.querySelector('.alert-wrapper');
					$(alertWrapper).removeClass('hide');
					
					var progessWrapper = file.previewElement.querySelector('.progress-wrapper');
					$(progessWrapper).addClass('hide');


					var message = response.message;
					var alert;
					if( message && message.indexOf("maximum allowed") !== -1){
						alert = "Sorry, your image is too large.";
					}else{
						alert = "Image upload error.";
					}

					var messageDiv = file.previewElement.querySelector('.alert');

					$(messageDiv).html( alert );

					window.clearInterval(file.progressInterval);
				});
			}

		});
 
		
	}.observes('user_id')

});