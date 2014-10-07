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
		this.resource('product', {path: "/:slug"}, function() {
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
		}
	},
	redirectToLogin: function(transition) {
		this.controllerFor('auth').set('attemptedTransition', transition.targetName);
		return this.transitionTo('auth.login');
	},
	// actions: {
	//   error: function(reason, transition) {
	//     if (reason.status === 401) {
	//       this.redirectToLogin(transition);
	//     } else {
	//       console.log('unknown problem');
	//     }
	//   }
	// }
});

Haul.ProductsRoute = Haul.AuthenticatedRoute.extend({
	model: function(params) {

		var user = this.store.findQuery('user', {slug: params.user_slug}).then(function(results) {
			return Ember.get(results, 'firstObject');
		});

		return user;
	}
//	renderTemplate: function(controller, model) {

		// this.render('layouts/header_base', {
		// 	into: 'products',
		// 	outlet: 'header'
		// });
		// this.render('products/index', {
		// 	into: 'products',
		// 	outlet: 'main',
		// 	model: model,
		// 	controller: controller
		// });
//	}
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
	// model: function(params) {

	// 	var products = this.store.find('products', params.product_id).then(function(result) {
	// 		return result
	// 	});

	// 	return products;
	// },
	renderTemplate: function(controller, model) {
	// 	this.render('layouts/header_base', {
	// 		into: 'application',
	// 		outlet: 'header'
	// 	});

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

// //Products
// Haul.ProductsRoute = Haul.AuthenticatedRoute.extend({
// 	model: function() {
// 		return this.store.find('products');
// 	}
// });

// Haul.ProductsProductRoute = Ember.Route.extend({
// 	model: function(params) {
// 		return this.store.find('products', params.product_id);
// 	}
// });


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


Haul.AuthForgotpasswordRoute = Ember.Route.extend({
	controllerName: "auth"
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
