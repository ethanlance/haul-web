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
		
 		Dropzone.prototype.init = function() {
	      var eventName, noPropagation, setupHiddenFileInput, _i, _len, _ref, _ref1;
	      if (this.element.tagName === "form") {
	        this.element.setAttribute("enctype", "multipart/form-data");
	      }
	      if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {
	        this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><span>" + this.options.dictDefaultMessage + "</span></div>"));
	      }
	      if (this.clickableElements.length) {
	        setupHiddenFileInput = (function(_this) {
	          return function() {
	            if (_this.hiddenFileInput) {
	              document.body.removeChild(_this.hiddenFileInput);
	            }
	            _this.hiddenFileInput = document.createElement("input");
	            _this.hiddenFileInput.setAttribute("type", "file");
	            if ((_this.options.maxFiles == null) || _this.options.maxFiles > 1) {
	              _this.hiddenFileInput.setAttribute("multiple", "multiple");
	            }
	            _this.hiddenFileInput.className = "dz-hidden-input";
	            if (_this.options.acceptedFiles != null) {
	              _this.hiddenFileInput.setAttribute("accept", _this.options.acceptedFiles);
	            }
	            if (_this.options.capture != null) {
	              _this.hiddenFileInput.setAttribute("capture", true);
	            }
	            // _this.hiddenFileInput.style.visibility = "hidden";
	            // _this.hiddenFileInput.style.position = "absolute";
	            // _this.hiddenFileInput.style.top = "0";
	            // _this.hiddenFileInput.style.left = "0";
	            // _this.hiddenFileInput.style.height = "0";
	            // _this.hiddenFileInput.style.width = "0";

	            console.log('_this.hiddenFileInput', _this.hiddenFileInput);
	            
	            //document.body.appendChild(_this.hiddenFileInput);
	            var el  = _this.element.querySelector("#haul-dropzone-filebutton")
	            console.log("EL " , el)
	            el.appendChild(_this.hiddenFileInput);


	            return _this.hiddenFileInput.addEventListener("change", function() {
	              var file, files, _i, _len;
	              files = _this.hiddenFileInput.files;
	              if (files.length) {
	                for (_i = 0, _len = files.length; _i < _len; _i++) {
	                  file = files[_i];
	                  _this.addFile(file);
	                }
	              }
	              return setupHiddenFileInput();
	            });
	          };
	        })(this);
	        setupHiddenFileInput();
	      }
	      this.URL = (_ref = window.URL) != null ? _ref : window.webkitURL;
	      _ref1 = this.events;
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        eventName = _ref1[_i];
	        this.on(eventName, this.options[eventName]);
	      }
	      this.on("uploadprogress", (function(_this) {
	        return function() {
	          return _this.updateTotalUploadProgress();
	        };
	      })(this));
	      this.on("removedfile", (function(_this) {
	        return function() {
	          return _this.updateTotalUploadProgress();
	        };
	      })(this));
	      this.on("canceled", (function(_this) {
	        return function(file) {
	          return _this.emit("complete", file);
	        };
	      })(this));
	      this.on("complete", (function(_this) {
	        return function(file) {
	          if (_this.getUploadingFiles().length === 0 && _this.getQueuedFiles().length === 0) {
	            return setTimeout((function() {
	              return _this.emit("queuecomplete");
	            }), 0);
	          }
	        };
	      })(this));
	      noPropagation = function(e) {
	        e.stopPropagation();
	        if (e.preventDefault) {
	          return e.preventDefault();
	        } else {
	          return e.returnValue = false;
	        }
	      };
	      this.listeners = [
	        {
	          element: this.element,
	          events: {
	            "dragstart": (function(_this) {
	              return function(e) {
	                return _this.emit("dragstart", e);
	              };
	            })(this),
	            "dragenter": (function(_this) {
	              return function(e) {
	                noPropagation(e);
	                return _this.emit("dragenter", e);
	              };
	            })(this),
	            "dragover": (function(_this) {
	              return function(e) {
	                var efct;
	                try {
	                  efct = e.dataTransfer.effectAllowed;
	                } catch (_error) {}
	                e.dataTransfer.dropEffect = 'move' === efct || 'linkMove' === efct ? 'move' : 'copy';
	                noPropagation(e);
	                return _this.emit("dragover", e);
	              };
	            })(this),
	            "dragleave": (function(_this) {
	              return function(e) {
	                return _this.emit("dragleave", e);
	              };
	            })(this),
	            "drop": (function(_this) {
	              return function(e) {
	                noPropagation(e);
	                return _this.drop(e);
	              };
	            })(this),
	            "dragend": (function(_this) {
	              return function(e) {
	                return _this.emit("dragend", e);
	              };
	            })(this)
	          }
	        }
	      ];
	      this.clickableElements.forEach((function(_this) {
	        return function(clickableElement) {
	          return _this.listeners.push({
	            element: clickableElement,
	            events: {
	              "click": function(evt) {

	                if ((clickableElement !== _this.element) || (evt.target === _this.element || Dropzone.elementInside(evt.target, _this.element.querySelector(".dz-message")))) {
	                	console.log("CLICK ", _this.hiddenFileInput)
	                  return _this.hiddenFileInput.click();
	                }
	              }
	            }
	          });
	        };
	      })(this));
	      this.enable();
	      return this.options.init.call(this);
	    };

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
			
			previewTemplate: '<div><img class="profile-image thumbnail" data-dz-thumbnail  /></div><li class="haul-grid-thumbs"><div class="dz-preview dz-file-preview"><div class="dz-details"></div><div class="alert-wrapper hide"><div class="alert alert-danger" role="alert">Upload Failed</div></div><div class="delete text-right"><button data-dz-remove type="button" class="btn btn-default btn-sm btn-no-radius"><span class="glyphicon glyphicon-trash"></span></button></div></li>',
			
			previewsContainer: ".dropzone-preview",
			
			thumbnailWidth: 155,
			
			thumbnailHeight: 155,
			
			clickable: "#haul-dropzone-browse", 
			
			uploadprogress: function(file, progress) {

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
			if( response.message && response.message.indexOf("maximum allowed") !== -1){
				message = "Sorry, your image is too large.";
			}else{
				message = "Image upload error.";
			}

			_this.set('errorMessage', message);

			window.clearInterval(file.progressInterval);
		});

		//SUCCESS, reset Dropzone and hand the image file off to Ember.
		this.dropzone.on('success', function(file, response) {	 	
			_this.set('isSuccess', true);
			_this.set('isFailed', false);
			_this.set('isProgress', false);
			_this.set('newImageId', response.data[0].image_id);
			window.clearInterval(file.progressInterval);
		});
	}.observes('currentUserId')
});