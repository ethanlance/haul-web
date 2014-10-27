
//PROFILE ROUTE:
Haul.ApplicationRoute = Ember.Route.extend({
    renderTemplate: function() {
        // Render default outlet
        this.render();
        // render extra outlets
        var controller = this.controllerFor('tooltip-box');
        this.render("bs-tooltip-box", {
            outlet: "bs-tooltip-box",
            controller: controller,
            into: "application" // important when using at root level
        });
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

//ROOT
//Redirect logged in user to their profile.  
//Redirect anon users to the /about page.
Haul.BaseRoute = Ember.Route.extend({
	beforeModel: function() {
		
		var user = this.controllerFor('auth').get('currentUser');
		
		if( !Ember.isEmpty(user) ) {
			return this.transitionTo('seller', user.get('slug'));
		}else{
			return this.transitionTo('about');
		}
	}
});



//Anon - Routes that require authentication should extend this object.
Haul.AnonRoute = Ember.Route.extend({
	beforeModel: function(transition) { 
		
		if (Ember.isEmpty(this.controllerFor('auth').get('token'))) {

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



/* 
	AUTH - Routes that require authentication should extend this object.
*/
Haul.AuthenticatedRoute = Ember.Route.extend({
	needsAuthorization: false,
	controllerName: "auth",
	renderTemplate: function(){ 
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
	},
    beforeModel: function(transition) { 

	console.log("POOOPz", this.controllerFor('auth').get('currentUser'));


		if (Ember.isEmpty(this.controllerFor('auth')) || Ember.isEmpty(this.controllerFor('auth').get('token'))) {
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




//About route is the default landing page for anon users.  This route 
//will explain to anon users how signup/login and how to browse the service.
Haul.AboutRoute = Ember.Route.extend({
	renderTemplate: function() {
		this.render('layouts/header_home', {
			into: 'application',
			outlet: 'header'
		});
		this.render('home');
	}
});

/** 
	NOT FOUND 404
**/
Haul.NotFoundRoute = Haul.AnonRoute.extend({
	renderTemplate: function() {
		this._super();
		this.render('404');
	}
});


/** 
	NOT AUTHORIZED 404
	User may be authenticated, but is not authorized.
**/
Haul.NotAuthorizedRoute = Haul.AnonRoute.extend({
	renderTemplate: function() {
		this._super();
		this.render('403');
	}
});

