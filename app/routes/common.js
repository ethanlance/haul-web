import Ember from 'ember';
import AnonRoute from './common';

//PROFILE ROUTE:
var ApplicationRoute = Ember.Route.extend({
    renderTemplate: function() {
        // Render default outlet
        this.render();
        // render extra outlets
        // var controller = this.controllerFor('tooltip-box');
        // this.render("bs-tooltip-box", {
        //     outlet: "bs-tooltip-box",
        //     controller: controller,
        //     into: "application" // important when using at root level
        // });
    }, 
    //This is the end of the road for actions.
    actions: {
    	
    	//Components & Views emit a call to this action.
    	//Allows components to tell the application to transistion to a new route.
    	//Note, components do not have access to call "transitionTo" method.
    	clickTransition: function(route, arg) {  
    		this.transitionTo(route, arg);
    	}
    }
});
export default ApplicationRoute;

// //ROOT
// //Redirect logged in user to their profile.  
// //Redirect anon users to the /about page.
var BaseRoute = Ember.Route.extend({
	beforeModel: function() {
		
		//var user = this.controllerFor('auth').get('currentUser');
		
		// if( !Ember.isEmpty(user) && user ) {
		// 	return this.transitionTo('seller', user.get('slug'));
		// }else{
			return this.transitionTo('home');
		//}
	},
});
export default BaseRoute;


//Anon - Routes that require authentication should extend this object.
var AnonRoute = Ember.Route.extend({
	beforeModel: function() { 
		if (Ember.isEmpty(this.controllerFor('auth').get('currentUser'))) {

		}else{
			this.controllerFor('auth').resetHeader();
		}
	},
	renderTemplate: function(){
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
	}
});
export default AnonRoute;



/* 
	AUTH - Routes that require authentication should extend this object.
*/
var AuthenticatedRoute = Ember.Route.extend({
	needsAuthorization: false,
	controllerName: "auth",
	renderTemplate: function(){ 
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
	},
    beforeModel: function(transition) { 
		if (Ember.isEmpty(this.controllerFor('auth')) || Ember.isEmpty(this.controllerFor('auth').get('currentUser'))) {
			return this.redirectToLogin(transition);
		}else{
			this.controllerFor('auth').resetHeader();
		}
	},
	redirectToLogin: function(transition) {
		if(!Ember.isEmpty(transition)) {
			this.controllerFor('auth').set('attemptedTransition', transition.targetName);	
		}
		return this.transitionTo('login');
	}
});
export default AuthenticatedRoute;



//HOMEPAGE
var HomeRoute = AnonRoute.extend({
	renderTemplate: function(){
		this._super();
		this.render('homepage');
	}
});
export default HomeRoute;

/** 
	NOT FOUND 404
**/
var NotFoundRoute = AnonRoute.extend({
	renderTemplate: function() {
		this._super();
		this.render('404');
	}
});
export default NotFoundRoute;

/** 
	NOT AUTHORIZED 404
	User may be authenticated, but is not authorized.
**/
var NotAuthorizedRoute = AnonRoute.extend({
	renderTemplate: function() {
		this._super();
		this.render('403');
	}
});
export default NotAuthorizedRoute;
