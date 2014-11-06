

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
	beforeModel: function() {
		this.controllerFor('login').reset();
	}
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
		this.controllerFor('auth').deAuthenticateLocalUser();
		this.transitionTo('login');
	}
});



