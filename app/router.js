import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});




// //Router Map
Router.map(function(){

	//Home
	this.route('home', {path: "/"});

	this.route('poop');
	


	this.route('about');
	this.route('not-found');
	this.route('not-authorized');

	//Profiles
	this.resource('seller', {path: "/seller/:user_slug"}, function() {
		this.route('followers');
		this.route('follows');
		this.route('likes');
		this.route('products');

		this.route('product', {path: "/:product_slug"}, function() {
			this.route('edit');
		});
	});

	this.route('product-new', {path: "/new-product"});

	//Store
	this.resource('collection-new', {path: "/new-collection"});
	this.resource('collection', {path: "/collection/:collection_slug"}, function() {
		this.route('followers');
		this.route('edit');

		this.resource('collection-product', {path: "/:product_slug"}, function() {
			this.route('edit');
		});
	});

	//Auth
	this.route('login');
	this.route('logout');

	this.route('forgotpassword', {path: "forgot-password"});
	this.route('forgotpasswordconfirm', {path: "reset-password"});
	
	this.route('signup');
	this.route('signupconfirm', {path: "register"});

	//Settings
	this.route('settings');

	//Search
	this.route('search');
});


export default Router;
