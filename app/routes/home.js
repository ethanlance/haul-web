
import Ember from 'ember';

// //ROOT
// //Redirect logged in user to their profile.  
// //Redirect anon users to the /about page.
var BaseRoute = Ember.Route.extend({
	renderTemplate: function(){
		this._super();
		this.render('homepage');
	}
});
export default BaseRoute;