import Ember from 'ember';
var $ = Ember.$;

/* global Quill */

var QuillEditorComponent = Ember.Component.extend({

	
	content: '',
	editor: null,

	contentChanged: function() {
		this.get('editor').setHTML(this.get("content"));
	}.observes('content'),

	didInsertElement: function(){
		var _this = this;

		


		
		var h = window.innerHeight; 
		$('#editor').css("height", h);



 		var editor = new Quill('#editor',{
		  	modules: {
		    	'toolbar': { container: '#toolbar' },
		    	'link-tooltip': true 
		  	},
		  	theme: 'snow'
		});

		this.set('editor', editor);

		editor.on('text-change', function() { 
			_this.sendAction('quillChange', editor.getHTML());
		
			

			// var bottom = $('.ql-images').position().top + 100;
			// console.log("H", $('.toolbar-footer').height())
			// var toolbarH = 34;//$('.toolbar-footer').height();
			// var editorBar = 50;
			
			// console.log("BOTTOM", bottom)


			// var h = h - (bottom  + toolbarH + editorBar);



			// var b = $('.ql-editor')
			// console.log("HERE?", h, b.css('max-height'))

			// $('.ql-editor').css('max-height', h+"px");

			// console.log("HERE?", b.css('max-height'))



		}); 

		this.contentChanged();
	},


});
export default QuillEditorComponent;