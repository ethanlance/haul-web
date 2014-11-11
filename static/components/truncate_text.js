Haul.TruncateTextComponent = Ember.Component.extend({

	doTruncation: null, 

	maxLength: 100,

	isOpen: false,

	textTruncated: null,

	start: function() {


		this.set('doTruncation', true);

		var maxLength = this.get('maxLength');
		var text = this.get('text');
		text = text.trim();
		var trimmedString = text.substr(0, maxLength); 
		trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
		console.log('textTruncated', trimmedString);
		this.set('textTruncated', trimmedString);	
	

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