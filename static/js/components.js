Haul.LaddaBtnComponent = Ember.Component.extend({

	laddaBtn: null,

	spin: false,

	elementId: null,

	btnClasses: null,

	spinChanged: function() {
		if( this.spin ){
			this.laddaBtn.start();
		}else{
			this.laddaBtn.stop();
		}
	}.observes('spin'),

	enable: function(){
		this.laddaBtn = Ladda.create( this.get('element').firstChild );
	}.on('didInsertElement'),

	actions: {
		buttonClick: function(event) { 
			this.set('spin', true);
			this.sendAction('laddaClick', event);
		}
	}
});


Haul.ProductToStoreComponent = Ember.Component.extend({
	model: null,
	store: null,
	start: function() {
		var store = this.get('targetObject.store');
		this.set('store', store);
		this.set('model', store.createRecord('market-product'));
	}.on('init'),

	editorial: null,
	actions: {
		//Add Product to Market
		curate: function() {
			$('#curateModal').modal('show');
		},

		curateCancel: function() {
			$('#curateModal').modal('hide');
		},

		curateSubmit: function() {

			var editorial = this.get('model').get('editorial');
				
			//Get to the store.
			var store = this.get('store');

			var promise = this.user.get('market');

			var _this = this;
			promise.then(function(market) {
				console.log("market", market);
				
				//Create an empty object
				var marketProduct = store.createRecord('market-product');

				marketProduct.set('product', _this.product);
				marketProduct.set('editorial', editorial);
				marketProduct.set('user', _this.user.content);
				marketProduct.set('market', market);

				marketProduct.save().then(
					function(result) { 
						//Save and close.
						$('#curateModal').modal('hide');
					},
					function(error){
						console.log("Error" , error);
					}
				);


			}, function(error) {
				console.log("ERROR", error);
			});
		}
	}
});


Haul.ProfileUserComponent = Ember.Component.extend({
	actions: {
		clickProfile: function() {  
			this.sendAction("clickTransition", "seller", this.user.get('id'));
		}
	}
});


/**
	ImageCardComponent is one image.  
	The image in the ImageCardComponent sends an onclick event 'imageClick'
**/
Haul.ImageCardComponent = Ember.Component.extend({

	//Bound property.  When isSelected is true, then class="selected" 
	//is appendend to the parent div wrapping the image.
	classNameBindings: ['isSelected:selected'],
	isSelected: false,

	deleteModalStyle: "display:none",
	
	didInsertElement: function() {
		this.image.get('isSelected') ? this.set('isSelected', true) : this.set('isSelected', false);
	},

	observe: function() { 
		this.image.get('isSelected') ? this.set('isSelected', true) : this.set('isSelected', false);
	}.observes('image.isSelected'),

	actions: {
		imageClick: function() {
			this.sendAction('imageClick', this);	
		},
		imageDelete: function() {
			this.set('deleteModalStyle', 'display:block'); 
		},

		imageDeleteCancel: function() {
			this.set('deleteModalStyle', 'display:none');
		},

		imageDeleteProceed: function() {			
			this.sendAction('imageDeleteProceed', this);	
		}
	}
});


Haul.ImagePickerComponent = Ember.Component.extend({

	dropzone: null, 
 
	errorDeleteModalStyle: "display:none",


	didInsertElement: function(){
		var _this = this; 

		//INIT
		 this.dropzone = new Dropzone("#haul-dropzone", { 

			url: Haul.IMAGE_SERVER_HOST + "/users/" + this.user_id + "/images",
			method: "post",
			headers: {"Authorization": "Bearer " + this.user_token},
			paramName: "attachment",
			dictDefaultMessage: "Drop Files Here <br/> OR <br/> Click Here To Browse Your Files",
			previewTemplate: '<li class="haul-grid-thumbs"><div class="dz-preview dz-file-preview"><div class="dz-details"><img class="thumbnail haul-thumb" data-dz-thumbnail  /></div><div class="alert-wrapper hide"><div class="alert alert-danger" role="alert">Upload Failed</div></div><div class="progress-wrapper"><div class="progress"><div class="progress-bar progress-bar-striped active"	role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 10%" data-dz-uploadprogress><span class="sr-only">10% Complete</span></div></div></div></div><div class="delete text-right"><button data-dz-remove type="button" class="btn btn-default btn-sm btn-no-radius"><span class="glyphicon glyphicon-trash"></span></button></div></li>',
			previewsContainer: ".dropzone-preview",
			thumbnailWidth: 155,
			thumbnailHeight: 155,
			clickable: "#haul-dropzone-browse", 
			uploadprogress: function(file, progress, bytesSent) {

				var el = file.previewElement.querySelectorAll("[data-dz-uploadprogress]");

				function waitingForResponse(el){
					var w = parseInt($(el).attr("aria-valuenow"));
					if( w == 100 ){
						window.clearInterval(file.progressInterval);
						return;
					} 
					var p = w + 1; 
					$(el).css('width', p+'%').attr("aria-valuenow", p);
				}

				if(progress > 80){
					progress = 80;
					$(el).css('width', progress+'%').attr("aria-valuenow", progress); 
					file.progressInterval = setInterval(function () {	waitingForResponse(el) }, 200);
				}else{	 
					$(el).css('width', progress+'%').attr("aria-valuenow", progress);
				}
			},
			addedfile: function(file) {
				var node, removeFileEvent, removeLink, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results;
				if (this.element === this.previewsContainer) {
					this.element.classList.add("dz-started");
				}
				if (this.previewsContainer) {
					file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
					file.previewTemplate = file.previewElement;

					//Get first child - HAUL OVERDIDE
					var firstChild = this.previewsContainer.firstChild;
					if( firstChild ){
					this.previewsContainer.insertBefore(file.previewElement, firstChild);
					}else{
					this.previewsContainer.appendChild(file.previewElement);
					}

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
			
			var alertWrapper = file.previewElement.querySelector('.alert-wrapper');
			$(alertWrapper).removeClass('hide');
			
			var progessWrapper = file.previewElement.querySelector('.progress-wrapper');
			$(progessWrapper).addClass('hide');


			var message = response.message;
			var alert;
			if( message.indexOf("maximum allowed") !== -1){
				alert = "Sorry, your image is too large.";
			}else{
				alert = "Image upload error."
			}

			var messageDiv = file.previewElement.querySelector('.alert');

			$(messageDiv).html( alert );

			window.clearInterval(file.progressInterval);
		});

		//SUCCESS, reset Dropzone and hand the image file off to Ember.
		this.dropzone.on('success', function(file, response) {	 		
			
			window.clearInterval(file.progressInterval);

			//Get the base 64 thumb.
			var img = $(file.previewElement).find('img');
 			var src = img.prop('src');
 			response.data[0].locations.thumb = src;

 			//Send our new file to the controllers action.
			_this.refreshImages(file, response); 

			//Fade out then remove from dropzone.
			var self = this;
			self.removeFile(file) 
			
		});
	},
 
	//Send Event To Controller:
	refreshImages: function(file, response) {	 
		this.sendAction('refresh', response);	
	},

	actions: {

		//This passed the image click from Haul.ImageCardComponent up to our controller. 
		imageClick: function(event) {
			this.sendAction('imageClick', event);
		},

		closeModal: function(event) {
			this.set('errorDeleteModalStyle', 'display:none');
		},

		imageDeleteProceed: function(event) {

			var image = event.get('image');
			var image_id = image.get('id')
			var _this = this;

			image.deleteRecord();
			
			image.save().then(function(success){
				_this.sendAction('imageDeleted', image_id);	
			},
			function(error){
				//Rollback.
				image.rollback();
				_this.set('errorDeleteModalStyle', 'display:block');
			});
		},
	}
});














