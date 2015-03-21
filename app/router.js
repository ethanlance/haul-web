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

	//Profiles
	this.route('new-post');
	this.resource('profile', {path: '/:username'}, function() {
		this.route('followers');
		this.route('following');
		this.route('likes'); 
		this.route('post', {path: "/:id/:post_slug"}, function() {
			this.route('edit');
		});
	});
});


export default Router;
