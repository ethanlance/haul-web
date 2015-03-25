import Ember from 'ember';
var $ = Ember.$;

/* global Quill */

var QuillEditorComponent = Ember.Component.extend({

	selectedImages: [],

	galleryOpen: true,

	hasGallery: Ember.computed.notEmpty('selectedImages'),

	height: false,

	content: '',

	editor: null,

	actions: {
		toggleGallery: function() {
			this.set('galleryOpen', !this.get('galleryOpen'));
		}
	},

	contentChanged: function() {
		//this.get('editor').setHTML(this.get("content"));
	}.observes('content'),

	didInsertElement: function(){
		$('#editor').css("height", this.get('height'));	

		var _this = this;
		var h = null;


		//RESIZE:
		$( window ).resize(function() {
			var el = $('#editor');
			
			if( _this.get('height')) {
				h = _this.get('height');
			} else {
				var top = el.parent().offset().top;
				var scrollTop = $(window).scrollTop();
				var height = window.outerHeight;
				h = height - (top - scrollTop) - 150;
			}

			$('#editor').css("height", h);	

			if( _this.get('hasGallery')){ 
				$('#gallery').css("height", h + $('#toolbar').height() + 5);
			}

		});
			
		Ember.run.later(function(){
			var el = $('#editor');	

			if( _this.get('height')) {
				h = _this.get('height');
			} else {
				var top = el.parent().offset().top;
				var scrollTop = $(window).scrollTop();
				var height = window.outerHeight;
				h = height - (top - scrollTop) - 150;
			}

			$('#editor').css("height", h);	

			if( _this.get('hasGallery')){
				console.log("THE HEIGHT", $('#toolbar').height())
				$('#gallery').css("height", h + $('#toolbar').height() +5);
			}
		}, 1000);
			
 		var editor = new Quill('#editor',{
		  	modules: {
		    	'toolbar': { container: '#toolbar' },
		    	'link-tooltip': true 
		  	},
		  	theme: 'snow'
		});

		_this.set('editor', editor);

		editor.on('text-change', function() { 
			_this.sendAction('quillChange', editor.getHTML());
		}); 

		this.contentChanged();
	},


});
export default QuillEditorComponent;