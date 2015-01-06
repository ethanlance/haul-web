import Ember from 'ember';
import ApplicationAdapter from '../adapters/application';


import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';



var ApplicationRoute = Ember.Route.extend({
	beforeModel: function() {   

		if( this.get('currentUser') ){

			ApplicationAdapter.reopen({
				headers: {
					'Authorization': 'Bearer ' + this.get('currentUser').get('access_token'), 
				}
			});

		}
		
		this._super();
	}
});
export default ApplicationRoute;
