Haul.QuillEditorComponent = Ember.Component.extend({


	didInsertElement: function(){
 		var editor = new Quill('#editor', {
		  modules: {
		    'toolbar': { container: '#toolbar' },
		    'link-tooltip': true 
		  },
		  theme: 'snow'
		});

 		var _this = this;
		editor.on('text-change', function(delta, source) { 
			_this.sendAction('quillChange', editor.getHTML());
		});
	},


});