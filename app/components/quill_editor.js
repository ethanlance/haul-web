import Ember from 'ember';
var $ = Ember.$;

/* global Quill */

var QuillEditorComponent = Ember.Component.extend({

	height: '300px',
	content: '',
	editor: null,

	contentChanged: function() {
		this.get('editor').setHTML(this.get("content"));
	}.observes('content'),

	didInsertElement: function(){
		var _this = this;
		
		if( this.get('height')){
			var h = this.get('height');
		}else{
			var h = window.innerHeight; 
		}


h = '300px';
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