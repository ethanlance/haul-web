//Turn off hash bang in URLs.
Haul.Router.reopen({
  location: 'history'
});


//Router Map
Haul.Router.map(function(){

	//Home
	this.resource('home', {path: "/"});

	//Profiles
	this.resource('products', {path: "/go/:user_slug"}, function() {
		this.resource('product', {path: "/:product_slug"}, function() {
			this.route('comments')
		});
		this.route('new');
	});


	//Auth
	this.resource('auth', function() {
		this.route('signup');
		this.route('confirmation');
		this.route('login');
		this.route('logout');
		this.route('forgotpassword');
	});

	this.resource('resetpassword', {path: "reset-password"});
	this.resource('register');

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
		return this.transitionTo('auth.login');
	}
});

Haul.ProductsRoute = Haul.AuthenticatedRoute.extend({
	model: function(params) {
		return this.store.find('user', params.user_slug);
	},	
	serialize: function(model) {
 	   return { user_slug: model.get('id') };
 	}
});

// Haul.ProductsNewRoute = Haul.AuthenticatedRoute.extend({

// });


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
Haul.AuthRoute = Ember.Route.extend({
	renderTemplate: function(){
		this.render('layouts/header_anon', {
			into: 'application',
			outlet: 'header'
		});
	}
})

Haul.AuthLoginRoute = Ember.Route.extend({
	controllerName: "authlogin",
	model: function() {
		return this.store.createRecord('authlogin');
	}
});

Haul.AuthSignupRoute = Ember.Route.extend({
	controllerName: "authsignup",
	model: function() {
		return this.store.createRecord('authsignup');
	}
});

Haul.RegisterRoute = Ember.Route.extend({
	controllerName: "authconfirmation",
	model: function() {
		return this.store.createRecord('authconfirmation');
	},
	renderTemplate: function() {
		this.render('layouts/header_anon', {
			into: 'application',
			outlet: 'header'
		});
		this.render('auth/confirmation');
	}
});

Haul.ResetpasswordRoute = Ember.Route.extend({
	controllerName: "authresetpassword",
	model: function() {
		return this.store.createRecord('authresetpassword');
	},
	renderTemplate: function() {
		this.render('layouts/header_anon', {
			into: 'application',
			outlet: 'header'
		});
		this.render('auth/resetpassword');
	}
});

Haul.AuthForgotpasswordRoute = Ember.Route.extend({
	controllerName: "authforgotpassword"
});

Haul.AuthLogoutRoute = Ember.Route.extend({
	controllerName: "auth",
	beforeModel: function(){
		this.controllerFor('auth').reset();
		this.transitionTo('auth.login');
	}
});


//HOME
Haul.HomeRoute = Ember.Route.extend({
	renderTemplate: function() {
		this.render('layouts/header_home', {
			into: 'application',
			outlet: 'header'
		});
		this.render('home');
	}
});
