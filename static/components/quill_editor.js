Haul.QuillEditorComponent = Ember.Component.extend({

	height: "80%",
	content: '',
	editor: null,

	contentChanged: function() {
		this.get('editor').setHTML(this.get("content"));
	}.observes('content'),

	didInsertElement: function(){
		var _this = this;

		$('#editor').css("height", this.get('height'));

 		var editor = new Quill('#editor',{
		  	modules: {
		    	'toolbar': { container: '#toolbar' },
		    	'link-tooltip': true 
		  	},
		  	//theme: 'snow'
		});

		this.set('editor', editor);

		editor.on('text-change', function(delta, source) { 
			_this.sendAction('quillChange', editor.getHTML());
		}); 

		this.contentChanged();
	},


});