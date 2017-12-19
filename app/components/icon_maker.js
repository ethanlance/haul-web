import Ember from 'ember';
/* global Dropzone */
export default  Ember.Component.extend({
	
	currentUserBinding: "session.currentUser",
	currentUserIdBinding: "session.currentUser.id",
	currentUserTokenBinding: "session.currentUser.access_token", 
	currentUserIconBinding: "session.currentUser.icon",

	dropzone: null, 
	newImageId: null,
	isSuccess: false,
	isFailed: false,
	isProgress: false,
	errorMessage: null,
	progressValue: null,

	progressStyle: function() {
		return "width:"+this.get('progressValue')+"px";
	}.property('progressValue'),

	/* Image has changed, update the user model now */	
	updateModel: function() {
		var currentUser = this.get('currentUser');
		currentUser.set('image_id', this.get('newImageId') );
		currentUser.save();
	}.observes('newImageId'),

	didInsertElement: function(){
		
		var _this = this; 
		
		if( !_this.get('currentUserId')){
			return;
		}
		
 		

		//INIT
		 this.dropzone = new Dropzone("#dropzone", { 

		 	url: this.ENV.Server.IMAGE_SERVER_HOST + "/images",
			//url: this.Haul.Server.IMAGE_SERVER_HOST + "/users/" + _this.get('currentUserId') + "/images/profile",
			maxFiles: 1,

			capture: true,
			
			method: "post",
			
			headers: {"Authorization": "Bearer " + _this.get('currentUserToken')},
			
			params: {'user_id': _this.get('currentUserId')},
			
			paramName: "attachment",
			
			dictDefaultMessage: "Drop Files Here <br/> OR <br/> Click Here To Browse Your Files",
			
			previewTemplate: '<div><img class="profile-image" data-dz-thumbnail  /></div><li class="haul-grid-thumbs"><div class="dz-preview dz-file-preview"><div class="dz-details"></div><div class="alert-wrapper hide"><div class="alert alert-danger" role="alert">Upload Failed</div></div><div class="delete text-right"><button data-dz-remove type="button" class="btn btn-default btn-sm btn-no-radius"><span class="glyphicon glyphicon-trash"></span></button></div></li>',
			
			previewsContainer: ".dropzone-preview",
			
			thumbnailWidth: 155,
			
			thumbnailHeight: 155,
			
			clickable: "#haul-dropzone-browse", 
			
			init: function() {

				this.on('success', function(file, response) {

					_this.set('isSuccess', true);
					_this.set('isFailed', false);
					_this.set('isProgress', false);
					_this.set('newImageId', response.data[0].image_id);
					window.clearInterval(file.progressInterval);

				});


				this.on('uploadprogress', function(file, progress) {	

					_this.set('isSuccess', false);
					_this.set('isProgress', true);
					_this.set('isFailed', false);

					var el = file.previewElement.querySelectorAll("[data-dz-uploadprogress]");

					function waitingForResponse(){

						var progressValue = _this.get('progressValue');
						var w = parseInt(progressValue);
						if( w === 100 ){
							window.clearInterval(file.progressInterval);
							return;
						} 
						var p = w + 1; 
						_this.set('progressValue', p);
					}

					if(progress > 80){
						progress = 80;
						_this.set('progressValue', progress);
						file.progressInterval = setInterval(function () {	waitingForResponse(el); }, 200);
					}else{	 
						_this.set('progressValue', progress);
					}
				});

				this.on('addedfile', function(file) {	
					$('.dropzone-preview').find('div').first().remove();
					// console.log("ADDED FILE", file);
					// return;
					_this.set('isSuccess', false);
					_this.set('isProgress', false);
					_this.set('isFailed', false);

					
				});

				this.on('error', function(file, response) { 
					
					console.log("ERROR", file);



					_this.set('isSuccess', false);
					_this.set('isProgress', false);
					_this.set('isFailed', true);
					var message;
					if( response.message && response.message.indexOf("maximum allowed") !== -1){
						message = "Sorry, your image is too large.";
					}else{
						message = "Image upload error.";
					}

					_this.set('errorMessage', message);

					window.clearInterval(file.progressInterval);

					var alertWrapper = file.previewElement.querySelector('.alert-wrapper');
					$(alertWrapper).removeClass('hide');
					
					var progessWrapper = file.previewElement.querySelector('.progress-wrapper');
					$(progessWrapper).addClass('hide');


					var message = response.message;
					var alert;
					if( message.indexOf("maximum allowed") !== -1){
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
 

	
	}.observes('currentUserId')
});