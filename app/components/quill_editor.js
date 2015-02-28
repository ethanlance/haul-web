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
		var _this = this;
		var h = null;
			
		if( this.get('height')){
			h = this.get('height');
		}else{
			h = window.innerHeight; 
		}


		h = window.innerHeight - 350;; 
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
		}); 

		this.contentChanged();
	},


});
export default QuillEditorComponent;