import Ember from 'ember';

export default Ember.Component.extend({

	tags: [
		'books',
		'vintage',
		'travel', 
		'gear', 
		'art', 
		'fashion', 
		'vintage', 
		'hobby', 
		'cars', 
		'craftsmanship', 
		'outdoors', 
		'fashion', 
		'tech',
		'books',
		'decor',
		'furniture',
	],

	actions: {

		tagClick: function(tag) {
			var qt = "tag_"+tag;
			this.sendAction('goToRoute', 'search', {queryParams: {q:qt}});	
		}

	}

});