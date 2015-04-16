import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  	location: config.locationType,

  	// action: {
		didTransition: function(infos) {
	    	//this._super(infos);

	    	var _this = this;
console.log("BOOM?")
	    	//Ember.run.next(function() {
	      		// the meta module will now go trough the routes and look for data
	      		console.log("TRIGGER NEW META.")
	      		_this.meta.trigger('reloadDataFromRoutes');
	    	//});

	    	return true;
	  	}
	// }
});




// //Router Map
Router.map(function(){

	//Home
	this.route('home', {path: "/"});

	this.route('haul', function(){
		this.route('about');
		this.route('tips');
		this.route('tos');
		this.route('faq');
		this.route('privacy');
	}); 

	//Auth
	this.route('login');
	this.route('logout');

	this.route('forgotpassword', {path: "forgot-password"});
	this.route('reset-password');
	
	this.route('signup');
	this.route('signupconfirm', {path: "register"});
	this.route('signupusername');

	
	this.route('settings', function(){
		this.route('profile');
		this.route('username');
		this.route('password');
	});


	//Search
	this.route('search');

	this.route('not-found');
	this.route('not-authorized');

	
	//mentions
	this.route('mentions');

	this.route('checkout');	

	//Profiles
	//this.route('new-post');
	this.resource('profile', {path: '/:username'}, function() {
		this.route('followers');
		this.route('following');
		this.route('likes'); 
		this.route('post', {path: "/:id/:post_slug"}, function() {
			this.route('edit');
		});
	});
});



 

// as you can see, there is a App.meta object that handles all the action
// you can even set title and description directly if you want to!
// App.meta.set('title', 'New Site Title');
// App.meta.set('description', 'Somethign changed, so I update my meta data.');

// // you can as well ask for all the tags that were set by calling
// App.meta.get('summary');

export default Router;
