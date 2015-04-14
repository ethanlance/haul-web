import Ember from 'ember';
var $ = Ember.$;

/* global Quill */

var QuillEditorComponent = Ember.Component.extend({

	selectedImages: [],

	galleryOpen: true,

	hasGallery: Ember.computed.notEmpty('selectedImages'),

	height: false,

	content: '',

	variance: 250,

	editor: null,

	actions: {
		toggleGallery: function() {
			this.set('galleryOpen', !this.get('galleryOpen'));
		}
	},

	setEditorTextChanged: function() {
		
		var text = this.get('setEditorText'); 

		var editor = this.get('editor');
		 
		editor.insertText(3, text);

	}.observes('setEditorText'),

	setEditorImgSrcChanged: function() {

		var text = this.get('setEditorImgSrc'); 

		var editor = this.get('editor');
		
		editor.insertEmbed(0, 'image', text);

		editor.insertText(1, ' ');

	}.observes('setEditorImgSrc'),

	triggerResize: false,
	triggerResizeChanged: function() {
		if( this.get('triggerResize') ) {
			this.resize();
		}
	}.observes('triggerResize'),

	resize: function() {
		var el = $('#editor');	
 
		var h = null;
		if( this.get('height')) {
			h = this.get('height');
		} else {
			var top = el.parent().offset().top;
			var scrollTop = $(window).scrollTop();
			var height = window.outerHeight;
			h = height - (top - scrollTop) - this.get('variance');
		}

		$('#editor').css("height", h);	 
	},

	didInsertElement: function(){
		$('#editor').css("height", this.get('height'));	

		var _this = this; 

		//RESIZE:
		$( window ).resize(function() {
			Ember.run.bind(_this, _this.resize());
		});
			
		Ember.run.later(function(){
			Ember.run.bind(_this, _this.resize());
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
	},


});
export default QuillEditorComponent;