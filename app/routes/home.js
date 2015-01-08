
import Ember from 'ember';

export default Ember.Route.extend({ 
	renderTemplate: function() {
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
		this.render('home');
	},
}); 