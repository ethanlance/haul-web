
/**
	ROUTES:

	/
	/about
	/help

	AUTH
	/login
	/logout
	/signup
	/register
	/forgot-password
	/reset-password
	/not-found

	SELLER
	/seller/:seller_slug
	/seller/:seller_slug/:product_slug
	/seller/:seller_slug/:product_slug/edit
	/seller/:seller_slug/product/new
	/seller/:seller_slug/store/new

	STORE
	/store/:store_slug/
	/store/:store_slug/edit
	/store/:store_slug/:store_product_slug
	/store/:store_slug/:store_product_slug/edit
	
	PROFILE
	/account/messages
	/account/settings

**/



//Turn off hash bang in URLs.
Haul.Router.reopen({
  location: 'history'
});


//Router Map
Haul.Router.map(function(){

	//Home
	this.resource('base', {path: "/"});
	this.resource('about');
	this.resource('not-found');
	this.resource('not-authorized');

	//Profiles
	this.resource('seller', {path: "/seller/:user_slug"}, function() {
		this.resource('product', {path: "/:product_slug"}, function() {
			this.route('edit')
		});
		this.route('new-product');
		this.route('new-market', {path: "new-store"});
	});

	//Store
	this.resource('market', {path: "/store/:market_slug"}, function() {
		this.route('edit')
	});

	//Auth
	this.resource('login');
	this.resource('logout');

	this.resource('forgotpassword', {path: "forgot-password"});
	this.resource('forgotpasswordconfirm', {path: "reset-password"});
	
	this.resource('signup');
	this.resource('signupconfirm', {path: "register"});


	//Search
	this.resource('search');
});
