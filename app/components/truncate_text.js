import Ember from 'ember';

var TruncateTextComponent = Ember.Component.extend({

	doTruncation: false, 

	maxLength: 50,

	isOpen: false,

	text: null,

	textTruncated: null,

	start: function() {
		if(!this.get('text')) {
			return;
		}
		
		if( this.get('maxLength') > this.get('text').length ) { 
			this.set('doTruncation', false);
		} else {
			this.set('doTruncation', true);
			var maxLength = this.get('maxLength');
			var text = this.get('text').trim();	
			var trimmedString = text.substr(0, maxLength); 
			var finalString = trimmedString.substr(0, trimmedString.lastIndexOf(" "));
			this.set('textTruncated', finalString);		
		}

	}.on('init'),

	actions: {

		open: function() {
			this.set('isOpen', true);
		},

		close: function() {
			this.set('isOpen', false);
		}

	}

});
export default TruncateTextComponent;