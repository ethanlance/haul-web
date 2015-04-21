import Ember from 'ember';
var $ = Ember.$;
/* global Dropzone */
export default Ember.Component.extend({

	dropzone: null, 
 
	errorDeleteModalStyle: "display:none",

	user_idBinding: 'session.currentUser.id',
	user_tokenBinding: 'session.currentUser.access_token',
	store: null,

	// start: function() {
 		
 // 		Dropzone.autoDiscover = false;
 
	// }.on("init"),

	didInsertElement: function(){
		var _this = this;  

		if(!this.get('user_id')){
			return;
		}
		var user_id = this.get('user_id');
		this.set('store', this.container.lookup("store:main"));

		var el = this.$().find('.poop');

		var className = 'drop' + Math.random().toString( 36 ).substr( 2 )
		$(el).addClass(className);


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



		var isMobile = { 
			Android: function() { return navigator.userAgent.match(/Android/i); }, 
			BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); }, 
			iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, 
			Opera: function() { return navigator.userAgent.match(/Opera Mini/i); }, 
			Windows: function() { return navigator.userAgent.match(/IEMobile/i); }, 
			any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } 
		};

		var maxFiles = 20;

		if(isMobile.any()) {
			maxFiles = 1;
		}

		this.dropzone = new Dropzone('.'+className, { 

			url: this.ENV.Server.IMAGE_SERVER_HOST + "/images",
			
			method: "post",
			
			headers: {"Authorization": "Bearer " + this.user_token},
			
			params: {'user_id':user_id},
			
			paramName: "attachment",
			
			dictDefaultMessage: "Drop Files Here <br/> OR <br/> Click Here To Browse Your Files",
			
			previewTemplate: '<div class="image-wrapper dz-preview dz-file-preview"><div class="dz-details"><img data-dz-thumbnail /></div><div class="alert-wrapper hide"><div class="alert alert-danger" role="alert">Upload Failed</div></div><div class="progress-wrapper"><div class="progress"><div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 10%" data-dz-uploadprogress><span class="sr-only">10% Complete</span></div></div></div><button data-dz-remove type="button" class="btn btn-default btn-sm btn-delete"><span class="glyphicon glyphicon-trash"></span></button></div>',
			
			previewsContainer: ".dropzone-preview",
			
			thumbnailWidth: 100,
			
			thumbnailHeight: 100,
			
			//clickable: "#haul-dropzone-browse", 
			
			capture: true,

			acceptedFiles: "image/*",

			maxFiles: maxFiles,




			
			uploadprogress: function(file, progress) {

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
			addedfile: function(file) {
				var node, removeFileEvent, removeLink, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results;
				if (this.element === this.previewsContainer) {
					this.element.classList.add("dz-started");
				}
				if (this.previewsContainer) {
					file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
					file.previewTemplate = file.previewElement;

					//Get first child - HAUL OVERDIDE
					var firstChild = this.previewsContainer.lastChild;
					if( firstChild ){
					this.previewsContainer.insertBefore(file.previewElement, firstChild.nextSibling);
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
			console.log("ERROR", response);
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

		//SUCCESS, reset Dropzone and hand the image file off to Ember.
		this.dropzone.on('success', function(file, response) {	

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
	}.observes('user_id')

});