Haul.IconMakerComponent = Ember.Component.extend({
	
	dropzone: null, 
	item: null,
	itemType: null,
	itemIdBinding: "item.id",
	iconBinding: "item.icon",
	userTokenBinding: "currentUser.access_token",
	userIdBinding: "currentUser.id",
	isSuccess: false,
	isFailed: false,
	isProgress: false,
	errorMessage: null,

	imageBinding: "item.image.thumb", 

	progressValue: null,
	progressStyle: function() {
		return "width:"+this.get('progressValue')+"px";
	}.property('progressValue'),

	/* Image has changed, update the Collection or LocalUser model now */
	newImageId: null,
	updateModel: function() {
		var itemType = this.get('itemType');
		if(itemType == "users")
			this.item.set('user.image_id', this.get('newImageId') );
		else
			this.item.set('image_id', this.get('newImageId') );
	}.observes('newImageId'),

	itemChanged: function() {
		//Get Ref Type: 
		var model = String(this.item.constructor);
		var name = model.split('.');
        var itemType = Ember.String.camelize(name.pop());

        if(itemType == "user" || itemType == "localUser")
        	this.set('itemType', 'users');
        else if(itemType == "collection")
        	this.set('itemType', 'stores');

	}.observes('item'),

	start: function() {
		this.itemChanged();
	}.on('init'),

	didInsertElement: function(){
		var _this = this; 

		//INIT
		 this.dropzone = new Dropzone("#dropzone", { 

			url: Haul.IMAGE_SERVER_HOST + "/" + this.itemType + "/" + this.itemId + "/images/profile",
			maxFiles: 1,
			method: "post",
			headers: {"Authorization": "Bearer " + this.userToken},
			params: {'user_id': this.userId},
			paramName: "attachment",
			dictDefaultMessage: "Drop Files Here <br/> OR <br/> Click Here To Browse Your Files",
			previewTemplate: '<div class="profile-circular-mask text-center"><img data-dz-thumbnail  /></div><li class="haul-grid-thumbs"><div class="dz-preview dz-file-preview"><div class="dz-details"></div><div class="alert-wrapper hide"><div class="alert alert-danger" role="alert">Upload Failed</div></div><div class="delete text-right"><button data-dz-remove type="button" class="btn btn-default btn-sm btn-no-radius"><span class="glyphicon glyphicon-trash"></span></button></div></li>',
			previewsContainer: ".dropzone-preview",
			thumbnailWidth: 155,
			thumbnailHeight: 155,
			clickable: "#haul-dropzone-browse", 
			uploadprogress: function(file, progress, bytesSent) {

				_this.set('isSuccess', false);
				_this.set('isProgress', true);
				_this.set('isFailed', false);

				var el = file.previewElement.querySelectorAll("[data-dz-uploadprogress]");

				function waitingForResponse(el){

					var progressValue = _this.get('progressValue');
					var w = parseInt(progressValue);
					if( w == 100 ){
						window.clearInterval(file.progressInterval);
						return;
					} 
					var p = w + 1; 
					_this.set('progressValue', p);
				}

				if(progress > 80){
					progress = 80;
					_this.set('progressValue', progress);
					file.progressInterval = setInterval(function () {	waitingForResponse(el) }, 200);
				}else{	 
					_this.set('progressValue', progress);
				}
			},
			addedfile: function(file) {

				_this.set('isSuccess', false);
				_this.set('isProgress', false);
				_this.set('isFailed', false);

				var node, removeFileEvent, removeLink, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results;
				if (this.element === this.previewsContainer) {
					this.element.classList.add("dz-started");
				}

				if (this.previewsContainer) {
					file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
					file.previewTemplate = file.previewElement;

					//Get first child - HAUL OVERDIDE
					var firstChild = this.previewsContainer.children[0];
					this.previewsContainer.replaceChild(file.previewElement, firstChild);


					_ref = file.previewElement.querySelectorAll("[data-dz-name]");
					for (_i = 0, _len = _ref.length; _i < _len; _i++) {
					node = _ref[_i];
					node.textContent = file.name;
					}
					_ref1 = file.previewElement.querySelectorAll("[data-dz-size]");
					for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
					node = _ref1[_j];
					node.innerHTML = this.filesize(file.size);
					}
					if (this.options.addRemoveLinks) {
					file._removeLink = Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>" + this.options.dictRemoveFile + "</a>");
					file.previewElement.appendChild(file._removeLink);
					}
					removeFileEvent = (function(_this) {
					return function(e) {
						e.preventDefault();
						e.stopPropagation();
						if (file.status === Dropzone.UPLOADING) {
						return Dropzone.confirm(_this.options.dictCancelUploadConfirmation, function() {
							return _this.removeFile(file);
						});
						} else {
						if (_this.options.dictRemoveFileConfirmation) {
							return Dropzone.confirm(_this.options.dictRemoveFileConfirmation, function() {
							return _this.removeFile(file);
							});
						} else {
							return _this.removeFile(file);
						}
						}
					};
					})(this);
					_ref2 = file.previewElement.querySelectorAll("[data-dz-remove]");
					_results = [];
					for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
					removeLink = _ref2[_k];
					_results.push(removeLink.addEventListener("click", removeFileEvent));
					}
					return _results;
				}
			}
		});
		 	

		//ERROR, figure error handling here.
		this.dropzone.on('error', function(file, response) { 

			_this.set('isSuccess', false);
			_this.set('isProgress', false);
			_this.set('isFailed', true);
			
			var message;
			if( response.message.indexOf("maximum allowed") !== -1){
				message = "Sorry, your image is too large.";
			}else{
				message = "Image upload error."
			}

			_this.set('errorMessage', message);

			window.clearInterval(file.progressInterval);
		});

		//SUCCESS, reset Dropzone and hand the image file off to Ember.
		this.dropzone.on('success', function(file, response) {	 	
			_this.set('isSuccess', true);
			_this.set('isFailed', false);
			_this.set('isProgress', false);
			_this.set('newImageId', response.data.image_id);
			window.clearInterval(file.progressInterval);
		});
	}
});