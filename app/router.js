import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  	location: config.locationType,

	didTransition: function(infos) {
    	this.meta.trigger('reloadDataFromRoutes');
    	return true;
  	}
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
	this.route('register');
	this.route('signupusername');

	
	this.route('settings', function(){
		this.route('profile');
		this.route('username');
		this.route('password');
		this.route('seller');
		this.route('buyer');
		this.route('address');
		
		this.route('purchases', function() {
			this.route('purchase', {path: '/:id'});
		});
		
		this.route('sales', function() {
			this.route('sale', {path: '/:id'});
		});

		this.route('creditcards');
	});

	this.route('search');	
	this.route('discover');

	this.route('not_found');
	this.route('not_authorized');

	
	//mentions
	this.route('mentions');

	this.route('checkout', {path: "/buy/:id"});	

	//Profiles
	//this.route('new-post');
	this.resource('profile', {path: '/:username'}, function() {
		this.route('followers');
		this.route('following');
		this.route('likes'); 
		this.route('post', {path: "/:id/:post_slug"}, function() {
			this.route('edit_post');
			this.route('edit_product');
		});
	});


	this.route('404', {path: '/*wildcard'});
});

export default Router;
