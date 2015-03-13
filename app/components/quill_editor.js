import Ember from 'ember';
var $ = Ember.$;

/* global Quill */

var QuillEditorComponent = Ember.Component.extend({

	height: '300px',
	content: '',
	editor: null,

	contentChanged: function() {
		//this.get('editor').setHTML(this.get("content"));
	}.observes('content'),

	didInsertElement: function(){
		$('#editor').css("height", this.get('height'));	

		var _this = this;
		var h = null;

			
		Ember.run.later(function(){
			var el = $('#editor');

			var top = el.parent().offset().top;
			var height = window.outerHeight;

			console.log("TOP ", top)
			console.log("HEIGHT ", height)

			h = height - top - 100;

			console.log("H", h)
			//h = window.innerHeight - 350;; 
			$('#editor').css("height", h);	
			
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
		}, 600);
		
		this.contentChanged();
	},


});
export default QuillEditorComponent;