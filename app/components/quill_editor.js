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

	minHeight: 400,

	triggerResize: false,

	requestContents: false,

	editorImageSize: 'small',

	cursorPosition: null,


	setEditorTextChanged: function() {
		
		var text = this.get('setEditorText'); 

		var editor = this.get('editor');

		var delta = editor.getContents();
 
		var pos = delta.length();

		editor.insertText(pos, text);

	}.observes('setEditorText'),


	setEditorImgSrcChanged: function() {

		var text = this.get('setEditorImgSrc'); 

		var editor = this.get('editor');
		
		editor.insertEmbed(0, 'image', text);

		editor.insertText(1, ' ');

	}.observes('setEditorImgSrc'),

	
	injectImage: function(image) {

		var editor = this.get('editor');

		var cursorPosition = this.get('cursorPosition');

		var text = image.get('small');
		if( !text ) {
			text = image.get('thumb');
		}


		if( cursorPosition ) {
			editor.insertEmbed(cursorPosition, 'image', text);
		} else {
			editor.insertEmbed(0, 'image', text);
		}

	},


	//Method for finding images that are not the correct size and changing them.
	convertImages: function() {
		var _this = this;
		var editor = this.get('editor');
		var delta = editor.getContents();
		var change = false;

		

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

			
 		var editor = new Quill('#editor',{
		  	modules: {
		    	'toolbar': { container: '#toolbar' },
		    	'link-tooltip': true 
		  	},
		  	theme: 'snow'
		});


		editor.on('selection-change', function(range) {
			if (range) {
				if (range.start == range.end) {

					_this.set('cursorPosition', range.start);

			    } else {
					var text = editor.getText(range.start, range.end);
					
				}
			} else {
			    
			}
		});

		_this.set('editor', editor);

		

		//On drop convert any images that are thumbs into the correct size.
		$('#editor').on('drop', function(e) {
    		Ember.run.later(function(){
    			_this.convertImages();
			}, 1000);
		});

		this.watchToolbar();
	},


	watchToolbar: function() {
		//TOOLBAR
		var modal = $('.editorWrapper').parents('.modal')[0];

		//When scroll is finished, move the toolbar
		var self = this;
		$(modal).on('scroll',function() {
		  clearTimeout($.data(self, 'timer'));
		  $.data(this, 'timer', setTimeout(function() {
		     self.toolbarPosition(); 
		     clearTimeout($.data(self, 'timer'));
		  }, 250));
		});


		var self = this;
		$(window).on('resize',function() { 
		     self.toolbarPosition();
		});


	},

	toolbarPosition: function() { 
		var modal = $('.editorWrapper').parents('.modal')[0];		
			
		var top = $(".editorWrapper").offset().top;

		var b = $('body').scrollTop();

		var toolbar = $("#toolbar")[0];

		if( top < 20 ||  b > top ) {
			var t = $(modal).scrollTop();
			var w = $('.editorWrapper').width() + 1;
			if( w > 0 ){
				$(toolbar).addClass('fixed').css('top', t).css('width', w);
			}
		}else{
			$(toolbar).removeClass('fixed').css('width', '100%');
		} 
	},


	doShowImageModal: function() {
		var _this = this;
		this.set('showImageModal', true);

		var h = $('body').prop('scrollHeight');
		var w = window.innerWidth; 

		var modal = $('.editorWrapper').parents('.modal')[0];		
		var t = $(modal).scrollTop();

		$('#imageModal').css('z-index', 5001);
		$('#imageModal').css('width', w);
		$('#imageModal').css('min-height', h);
		$('#imageModal').css('top', t); 


		Ember.run.later(function(){
			_this.set('animateImageModal', true);
		},100);
	},

	transformImagesForSaving: function() {

		var editor = this.get('editor');

		var html = editor.getHTML();

  		return this.htmlToMarkup( html );
	},


	requestContentsChanged: function() {

		if(!this.get('requestContents')){return;}
		 
		var html = this.transformImagesForSaving();

		this.sendAction('quillChange', html);

		this.set('requestContents', false); //reset.

		

	}.observes('requestContents'),

	closeImageModal: function() {
		var _this = this;
		this.set('animateImageModal', false);
		Ember.run.later(function(){
			_this.set('showImageModal', false);
		},300);
	},

	actions: {

		toggleGallery: function() {
			this.set('galleryOpen', !this.get('galleryOpen'));
		},

		showImageModal: function(){

			this.doShowImageModal();
		},

		closeImageModal: function(){
			this.closeImageModal();
		}, 

		injectImage: function(image) {
			this.injectImage(image);
			this.closeImageModal();
		}, 
	}

});