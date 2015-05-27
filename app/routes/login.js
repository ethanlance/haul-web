import Ember from 'ember';
import AnonMixin from '../mixins/anon';
export default Ember.Route.extend(AnonMixin, {

	metaTitle: function() {
		return "Haul Login";
	}.property(),	

	controllerName: 'login',

	beforeModel: function(transition) {
        this._super(transition);

        if( this.get('session').isAuthenticated ){
			this.get('session').invalidate();	
		}

    },
    
	model: function() {
		return this.store.createRecord('authlogin');
	},
	setupController: function(controller, model){ 
		controller.reset();
		controller.set("hideCancelBtn", true);
		this._super(controller, model);
	},
	renderTemplate: function() {
		this.render('layouts/header_anon', {
			into: 'application',
			outlet: 'header'
		});
		this.render('login');
	}
}); 