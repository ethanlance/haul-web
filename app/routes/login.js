import Ember from 'ember';
import AnonMixin from '../mixins/anon';
export default Ember.Route.extend(AnonMixin, {

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
		this._super(controller, model);
	},
	renderTemplate: function() {
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
		this.render('login');
	}
}); 