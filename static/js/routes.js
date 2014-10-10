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
	this.resource('products', {path: "/go/:user_slug"}, function() {
		this.resource('product', {path: "/:product_slug"}, function() {
			this.route('comments')
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
	},
})


//AUTH - Routes that require authentication should extend this object.
Haul.AuthenticatedRoute = Ember.Route.extend({

	renderTemplate: function(){
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
	},

    beforeModel: function(transition) {
		if (Ember.isEmpty(this.controllerFor('auth').get('token'))) {
			return this.redirectToLogin(transition);
		}else{
			this.controllerFor('auth').resetHeader();
		}
	},
	redirectToLogin: function(transition) {
		this.controllerFor('auth').set('attemptedTransition', transition.targetName);
		return this.transitionTo('login');
	}
});

Haul.ProductsRoute = Haul.AuthenticatedRoute.extend({
	model: function(params) {
		return this.store.find('user', params.user_slug);
	},	
	serialize: function(model) {
 	   return { user_slug: model.get('slug') };
 	}, 
});

Haul.ProductsNewRoute = Haul.AuthenticatedRoute.extend({ 
	//Get the users images from api.
	beforeModel: function() {
		var user = this.controllerFor('auth').get('currentUser');
		this.store.findQuery('image', user.id );
	},
	model: function(params) {
		return this.get('store').all('image');
	},
	renderTemplate: function(controller, model) {
		this.render('products/new', {
			into: 'application',
			outlet: 'main',
			model: model,
			controller: controller
		});
	}
});


Haul.ProductRoute = Ember.Route.extend({

	model: function(params) {

		var product = this.store.findQuery('product', {slug: params.slug}).then(function(results) {
			record = Ember.get(results, 'firstObject');
			console.log(record)
			return record;
		});

		return product;
	},
	serialize: function(model) {
    	return { product_slug: model.get('slug') };
  	},
	renderTemplate: function(controller, model) {
		this.render('products/product', {
			into: 'application',
			outlet: 'main',
			model: model,
			controller: controller
		});
	}
});


Haul.ProductCommentsRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('product').get('comments');
    },

	renderTemplate: function(controller, model) {
		this.render('comments/comments', {
			into: 'products/product',
			outlet: 'main',
			model: model,
			controller: controller
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



