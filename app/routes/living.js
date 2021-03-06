import Ember from 'ember';
import ResetScrollMixin from '../mixins/resetscroll';
import config from '../config/environment';
export default Ember.Route.extend(ResetScrollMixin,{

	category: "living",
	
	controllerName: "curated",

	metaTitle: function() {
		return "Your life, home, space";
	}.property(),	

	setupController: function(controller, model) {
		
		controller.set('category', this.get('category') );

		this._super(controller, model);

	},

	renderTemplate: function() {
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
		this.render('curated');
	},
});