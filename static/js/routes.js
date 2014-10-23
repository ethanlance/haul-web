//Turn off hash bang in URLs.
Haul.Router.reopen({
  location: 'history'
});


//Router Map
Haul.Router.map(function(){

	//Home
	this.resource('base', {path: "/"});
	this.resource('about');

	//Profiles
	this.resource('products', {path: "/seller/:user_slug"}, function() {
		this.resource('product', {path: "/:product_slug"}, function() {
			this.route('edit')
		});
		this.route('new');
	});


	//Auth
	this.resource('login');
	this.resource('logout');

	this.resource('forgotpassword', {path: "forgot-password"});
	this.resource('forgotpasswordconfirm', {path: "reset-password"});
	
	this.resource('signup');
	this.resource('signupconfirm', {path: "register"});

	//Account
	this.resource('account', function() {
		this.route('settings');
		this.route('profile');
		this.route('help');
	});

	//Messages
	this.resource('messages');

	//Search
	this.resource('search');
});

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
			return this.transitionTo('products', user.slug);
		}else{
			return this.transitionTo('about');
		}
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



Haul.ProductsRoute = Haul.AnonRoute.extend({
	model: function(params) {
		console.log("THERE?", params)
		return this.store.find('user', params.user_slug);
	},	
	serialize: function(model) {
 	   return { user_slug: model.get('id') };
 	}
});

Haul.ProductsIndexRoute = Haul.AnonRoute.extend({
	model: function(params) {
		console.log("HEREsh ", this.modelFor('products').get('products'))
		return this.modelFor('products').get('products');
	},
 	setupController: function(controller, model) {
 		controller.set('user', this.modelFor('products'));
 		controller.set('content', model);
 	},
	renderTemplate: function(){
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
		this.render('products/index')
	}
});


Haul.ProductRoute = Haul.AnonRoute.extend({
	model: function(params) {
		return this.store.find('product', params.product_slug);
	},
	serialize: function(model) {
    	return { product_slug: model.get('id') };
  	}
});









/* 
	AUTH - Routes that require authentication should extend this object.
*/
Haul.AuthenticatedRoute = Ember.Route.extend({
	controllerName: "auth",
	renderTemplate: function(){ 
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
	},
    beforeModel: function(transition) {
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

Haul.ProductsNewRoute = Haul.AuthenticatedRoute.extend({ 
	controllerName: "product-edit",
	//Get the users images from api.
	beforeModel: function() {
		var user = this.controllerFor('auth').get('currentUser');
		this.store.findQuery('image', user.id );
		this.controllerFor('product-edit').reset();
	},
	model: function() {
		return this.get('store').all('image');
	},
 	setupController: function(controller, model) {
 		controller.reset();	 
 		controller.set('product', this.store.createRecord('product'))
    },
	renderTemplate: function(controller, model) {  
		this._super();
		this.render('product/edit', {
			into: 'application',
			outlet: 'main',
			controller: controller,
			model: model
		});
	}
});

//NEEDS AUTH
Haul.ProductEditRoute = Haul.AuthenticatedRoute.extend({ 
	controllerName: "product-edit",
	//Get the users images from api.
	beforeModel: function() {
		this._super();
		var user = this.controllerFor('auth').get('currentUser');
		this.store.findQuery('image', user.id );
		this.controllerFor('product-edit').reset();
	},
	model: function() { 
		return this.get('store').all('image');
	},
 	setupController: function(controller, model) {
 		controller.reset();	
        controller.set('productPromise', this.store.find('product', this.modelFor('product').get('id')));
    },
	renderTemplate: function(controller, model) {
		this.render('product/edit', {
			into: 'application',
			outlet: 'main',
			controller: controller,
			model: model
		});
	}
});


//MESSAGES
Haul.MessagesRoute = Haul.AuthenticatedRoute.extend({
	renderTemplate: function() {
		this._super();
		this.render('messages', {
			into: 'application',
			outlet: 'main'
		});
	}
});


// AUTH
//Login Form
Haul.LoginRoute = Ember.Route.extend({
	controllerName: "authlogin",
	model: function() {
		return this.store.createRecord('authlogin');
	},
	renderTemplate: function(controller, model) {
		this.render('layouts/header_anon', {
			into: 'application',
			outlet: 'header'
		}),
		this.render('auth/login');
	},
});


//Sign Up Form
Haul.SignupRoute = Ember.Route.extend({
	controllerName: "signup",
	model: function() {
		return this.store.createRecord('authsignup');
	},
	renderTemplate: function(controller, model) {
		this.render('layouts/header_anon', {
			into: 'application',
			outlet: 'header'
		}),
		this.render('auth/signup');
	},
	beforeModel: function() {
		this.controllerFor('signup').reset();
	}
});

Haul.SignupconfirmRoute = Ember.Route.extend({
	controllerName: "signupconfirm",
	model: function() {
		return this.store.createRecord('authconfirmation');
	},
	renderTemplate: function() {
		this.render('layouts/header_anon', {
			into: 'application',
			outlet: 'header'
		});
		this.render('auth/signup_confirm');
	},
	beforeModel: function() {
		this.controllerFor('signupconfirm').reset();
	}
});


//FORGOT PASSWORD:
Haul.ForgotpasswordRoute = Ember.Route.extend({
	controllerName: "forgotpassword",
	renderTemplate: function() {
		this.render('layouts/header_anon', {
			into: 'application',
			outlet: 'header'
		});
		this.render('auth/forgot_password');
	},
	beforeModel: function() {
		this.controllerFor('forgotpassword').reset();
	}
});

Haul.ForgotpasswordconfirmRoute = Ember.Route.extend({
	controllerName: "forgotpasswordconfirm",
	model: function() {
		return this.store.createRecord('authresetpassword');
	},
	renderTemplate: function() {
		this.render('layouts/header_anon', {
			into: 'application',
			outlet: 'header'
		});
		this.render('auth/forgot_password_confirm');
	},
	beforeModel: function() {
		this.controllerFor('forgotpasswordconfirm').reset();
	}
});



Haul.LogoutRoute = Ember.Route.extend({
	controllerName: "auth",
	beforeModel: function(){
		this.controllerFor('auth').reset();
		this.transitionTo('login');
	}
});



