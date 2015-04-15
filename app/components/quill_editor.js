import Ember from 'ember';

import TransformMixin from '../mixins/transform';

var $ = Ember.$;

/* global Quill */

export default Ember.Component.extend(TransformMixin, {

	selectedImages: [],

	galleryOpen: true,

	hasGallery: Ember.computed.notEmpty('selectedImages'),

	height: false,

	content: '',

	variance: 250,

	editor: null,

	triggerResize: false,

	requestContents: false,

	editorImageSize: 'small',

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


	//Method for finding images that are not the correct size and changing them.
	convertImages: function() {
		var _this = this;
		var editor = this.get('editor');
		var delta = editor.getContents();
		var change = false;

		//console.log("DELTA", delta);

		delta.ops.forEach(function(operation, index){ 
			if( operation.hasOwnProperty("attributes") && operation.attributes.hasOwnProperty('image') ){
				var src = operation.attributes.image;

				if( src.indexOf('thumb') >=0 ){ 
					src = src.replace('thumb', _this.get('editorImageSize')); 
					delta.ops[index].attributes['image'] = src;
					change = true;
				}
			}
		});

		if( change ) {
			editor.setContents(delta);	
		}
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

		

		//On drop convert any images that are thumbs into the correct size.
		$('#editor').on('drop', function(e) {
    		Ember.run.later(function(){
    			_this.convertImages();
			}, 1000);
		});


		// editor.on('text-change', function() { 
 
		// 	var html = editor.getHTML();
		// 	//console.log("html ", html);

		// 	_this.sendAction('quillChange', html);
		// }); 
	},


	transformImagesForSaving: function() {

		var editor = this.get('editor');

		var html = editor.getHTML();

  		return this.htmlToMarkup( html );
	},


	requestContentsChanged: function() {
		 
		var html = this.transformImagesForSaving();
console.log("HTML", html);
		this.sendAction('quillChange', html);

	}.observes('requestContents'),


});