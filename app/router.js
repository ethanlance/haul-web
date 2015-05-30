import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  	location: config.locationType,

	changeMetaTags: function() {
    	this.meta.trigger('reloadDataFromRoutes');
    	return true;
  	}.on('didTransition'),

  	

  	/**
  	 Google Analytics
  	**/
  	pageviewToGA: function() {
  		var _this = this;
    	
    	this.ga.load()
    	.then(function(){

			var url = _this.get('url');

			ga('create', 'UA-63427657-1', 'auto');

			ga('set', {
				page: url,
				title: url
			});

			ga('send', 'pageview')

    	});

	}.on('didTransition')


});


// //Router Map
Router.map(function(){

	//Home
	this.route('home', {path: "/"});

	this.route('about', function(){
		this.route('us');
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

	//Import Story
	this.route('import');
	this.route('new-post');

	//mentions
	this.route('mentions');

	this.route('checkout', {path: "/buy/:id"});	

	//Profiles
	this.resource('profile', {path: '/:username'}, function() {
		this.route('followers');
		this.route('following');
		this.route('likes'); 
		this.route('dm'); 
		this.route('post', {path: "/:id/:post_slug"}, function() {
			this.route('edit_post');
			this.route('edit_product');
		});
	});


	this.route('404', {path: '/*wildcard'});
});



export default Router;
