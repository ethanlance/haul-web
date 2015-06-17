import Ember from 'ember';
import ResetScrollMixin from '../mixins/resetscroll';
import config from '../config/environment';
export default Ember.Route.extend(ResetScrollMixin,{

	category: "outdoor",
	
	controllerName: "curated",

	metaTitle: function() {
		return "Outdoors, camping, big sky, stars...";
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