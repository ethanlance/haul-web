import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});




// //Router Map
Router.map(function(){

	//Home
	this.route('home', {path: "/"});

	this.route('haul', function(){
		this.route('about');
		this.route('tos');
		this.route('faq');
		this.route('privacy');
	});


	this.route('not-found');
	this.route('not-authorized');

	//Profiles
	this.resource('seller', {path: "/profile/:slug"}, function() {
		this.route('followers');
		this.route('follows');
		this.route('likes');
		this.route('products');

		this.route('product', {path: "/:product_id/:product_slug"}, function() {
			this.route('edit');
		});
	});
	this.route('product-new', {path: "/new-product"});

	//Auth
	this.route('login');
	this.route('logout');

	this.route('forgotpassword', {path: "forgot-password"});
	this.route('forgotpasswordconfirm', {path: "reset-password"});
	
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

	//404
	this.route('not-found', { path: '/*path' });
});


export default Router;
