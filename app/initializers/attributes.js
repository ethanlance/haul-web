import Ember from 'ember';
export default {

	name:   'attributes',
	
	before: 'meta',

	initialize: function(container, application) {

		Ember.TextField.reopen({
		  attributeBindings: ['data-braintree-name']
		});

	}
};