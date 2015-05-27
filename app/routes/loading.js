import Ember from 'ember';
import ResetScrollMixin from '../mixins/resetscroll';
export default Ember.Route.extend(ResetScrollMixin,{

	setupController: function(controller, model) {
		this.send('turnLoadingBarOn', true);
		this._super(controller, model);
	}, 

	
	willTransition: function() {
		this.send('turnLoadingBarOn', false);
	}.on('deactivate'),
	

	renderTemplate: function() {
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
		this.render('loading');
	},
});