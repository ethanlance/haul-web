
//Haul App
window.Haul = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_TRANSITIONS_INTERNAL: true
  });//WithMixins(Ember.Facebook);

//Facebook
//Haul.set('appId', '443672575768207'); 

$.cookie.json = true;

//Layout
Haul.ApplicationView = Ember.View.extend({
	//layoutName: "layout_base" 
	//init: function() { console.log("Application View Init")}
});

Haul.ApplicationController = Ember.Controller.extend({
	init: function() { 
		console.log("Application Controller Init")
	}, 

	needs: ['auth'],
	currentUser: (function() {
	  return this.get('controllers.auth.currentUser');
	}).property('controllers.auth.currentUser'),
	isAuthenticated: (function() {
	  return !Ember.isEmpty(this.get('controllers.auth.currentUser'));
	}).property('controllers.auth.currentUser')

});



//Store
Haul.Store = DS.Store.extend({
  adapter: Haul.ApplicationAdapter
})

//Turn off hash bang in URLs.
Haul.Router.reopen({
  location: 'history'
});

//Router
Haul.Router.map(function(){

	//Home
	this.resource('home', {path: "/"});

	//Auth
	this.resource('auth', function() {
		this.route('signup');
		this.route('confirmation');	
		this.route('login');
		this.route('logout');	
		this.route('forgotpassword');	
	});

	//Account
	this.resource('account', function() {
		this.route('settings');
		this.route('profile');
		this.route('help');
	});
	
	//Products
	this.resource('products');
	this.resource('productcreate')
	this.resource('product', {path: "product/:product_id"});

	//Messages
	this.resource('messages');

	//Search
	this.resource('search');	 
});


//AUTH - Routes that require authentication should extend this object.
Haul.AuthenticatedRoute = Ember.Route.extend({

    beforeModel: function(transition) {
		if (Ember.isEmpty(this.controllerFor('auth').get('token'))) {
			return this.redirectToLogin(transition);
		}
	},
	redirectToLogin: function(transition) {
		this.controllerFor('auth').set('attemptedTransition', transition);
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




//Private Routes
Haul.ProductsRoute = Haul.AuthenticatedRoute.extend({
	model: function() {
		return this.store.find('products');
	}
});

Haul.ProductRoute = Haul.AuthenticatedRoute.extend({
	model: function(params) {
		return this.store.find('products', params.product_id);
	}
});

Haul.ProductcreateRoute = Haul.AuthenticatedRoute.extend({
    model: function() {
    	console.log(this.store);
        return this.store.find('products');
    }
});



//Public Route
Haul.AuthLoginRoute = Ember.Route.extend({
	controllerName: "auth"
}); 

Haul.AuthSignupRoute = Ember.Route.extend({
	controllerName: "auth"
}); 

Haul.AuthConfirmationRoute = Ember.Route.extend({
	controllerName: "auth"
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










// Haul.Router.map(function() {
// 	this.resource('products');
// 	this.resource('product', { path: 'product/:product_id'});


// 	this.resource('messages');
// 	this.resource('messagethread', { path: 'message/:thread_id'});


// 	this.resource('settings');
// });


// Haul.ProductsRoute = Ember.Route.extend({
// 	model: function() {
// 		return products;
// 	}
// });

// Haul.ProductRoute = Ember.Route.extend({
// 	model: function(params) {
// 		return this.store.find('product', params.post_id);
// 		//return products.findBy('id', params.post_id);
// 	}
// });



// Haul.MessagesRoute = Ember.Route.extend({
// 	model: function() {
// 		return messages;
// 	},

// });


// Haul.MessagesController = Ember.ArrayController.extend({
// 	isShowingBody: false,

// 	actions: {
// 	    toggleBody: function() {
// 	    	console.log("POOOOONG")
// 	      this.toggleProperty('isShowingBody');
// 	    }
// 	  }
// });


// Haul.MessagethreadRoute = Ember.Route.extend({
// 	model: function(params) {
// 		console.log(params);
// 		return message_threads.findBy('id', params.thread_id);
// 	},

// 	setupController: function(controller, model) {
// 		model = message_threads.findBy('id', model.id);
// 		console.log("MODEL");
// 		console.log(model);
// 		// model = Ember.get(this.modelFor('measagethread'),)
// 		// this._super(controller, model);
// 		controller.set('model', model);
// 		//controller.set('model', model);

// 	}
// });





// Ember.Handlebars.helper('format-date', function(date) {
// 	return moment.unix(date).fromNow();
// });


// var products = [
// 	{
// 		title: "Purse 1",
// 		id: "78978789"
// 	},
// 	{
// 		title: "Purse 4",
// 		id: "321324342343"
// 	},
// 	{
// 		title: "Purse 3",
// 		id: "098031231"
// 	}	
// ];




// var messages = [
// 	{

// 		topic_id: "1",
// 		title: "You have a new sale.",
// 		body:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
// 		id: "100",
// 		from: "John",
// 		to: "Sally",
// 		timestamp: '1411167711'
// 	},
// 	{
// 		topic_id: "2",
// 		title: "RE: You have a new sale.",
// 		body:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
// 		id: "200",
// 		to: "John",
// 		from: "Sally",
// 		timestamp: '1411167323'
// 	},
// 	{
// 		topic_id: "3",
// 		title: "Thanks for getting back to me.",
// 		body:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
// 		id: "300",
// 		from: "John",
// 		to: "Sally",
// 		timestamp: '1410821716'
// 	}
// ];





// var message_threads = [
// 	{ "id": "100",
// 	"posts":[
// 		{
// 			id: "43243242",
// 			topic_id: "1",
// 			title: "Hello can you tell is this product in good condition?",
// 			id: "78978789",
// 			from: "John",
// 			to: "Sally",
// 			timestamp: '1411167711'
// 		},
// 		{
// 			id: "5454343",
// 			topic_id: "1",
// 			title: "Oh yes this is in great condition!",
// 			id: "78978789",
// 			to: "John",
// 			from: "Sally",
// 			timestamp: '1411167323'
// 		},
// 		{
// 			id: "808090-",
// 			topic_id: "1",
// 			title: "Thanks for getting back to me.",
// 			id: "78978789",
// 			from: "John",
// 			to: "Sally",
// 			timestamp: '1410821716'
// 		}
// 	]},
// 	{ "id": "200",
// 		"posts":[
// 		{
// 			id: "43243242",
// 			topic_id: "1",
// 			title: "You have a new sale!  $125.  Respond now.",
// 			id: "78978789",
// 			from: "John",
// 			to: "Sally",
// 			timestamp: '1411167711'
// 		},
// 		{
// 			id: "5454343",
// 			topic_id: "1",
// 			title: "RE: You have a new sale.",
// 			id: "78978789",
// 			to: "John",
// 			from: "Sally",
// 			timestamp: '1411167323'
// 		},
// 		{
// 			id: "808090-",
// 			topic_id: "1",
// 			title: "Thanks for getting back to me.",
// 			id: "78978789",
// 			from: "John",
// 			to: "Sally",
// 			timestamp: '1410821716'
// 		}]
// 	},
// 	{ "id": "300",
// 		"posts":[
// 		{
// 			id: "43243242",
// 			topic_id: "1",
// 			title: "You have a new sale.",
// 			id: "78978789",
// 			from: "John",
// 			to: "Sally",
// 			timestamp: '1411167711'
// 		},
// 		{
// 			id: "5454343",
// 			topic_id: "1",
// 			title: "RE: You have a new sale.",
// 			id: "78978789",
// 			to: "John",
// 			from: "Sally",
// 			timestamp: '1411167323'
// 		},
// 		{
// 			id: "808090-",
// 			topic_id: "1",
// 			title: "Thanks for getting back to me.",
// 			id: "78978789",
// 			from: "John",
// 			to: "Sally",
// 			timestamp: '1410821716'
// 		}]
// 	}

// ];

