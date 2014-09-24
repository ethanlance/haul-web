
//Haul App
window.Haul = Ember.Application.create(); //WithMixins(Ember.Facebook);

//Facebook
//Haul.set('appId', '443672575768207'); 

//Adapter
Haul.ApplicationAdapter = DS.FixtureAdapter.extend();

//Layout
Haul.ApplicationView = Ember.View.extend({
	//layoutName: "layout_base" 
	//init: function() { console.log("Application View Init")}
});

Haul.ApplicationController = Ember.Controller.extend({
	init: function() { 
		console.log("Application Controller Init")

		//AUTH CHECK:
		var loggedIn = true;
		if(!loggedIn)
			this.transitionToRoute('auth.login')

	}, 
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

	this.resource('home', {path: "/"});

	this.resource('auth', function() {
		this.route('signup');
		this.route('confirmation');	
		this.route('login');	
	});
	

	this.resource('products');
	this.resource('productcreate')
	this.resource('product', {path: "product/:product_id"});
	 
});



Haul.ProductsRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('products');
	}
});

Haul.ProductRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('products', params.product_id);
	}
});

Haul.ProductcreateRoute = Ember.Route.extend({
    model: function() {
    	console.log(this.store);
        return this.store.find('products');
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

