import Ember from 'ember';

/* globals FB */
export default Ember.Object.extend({

	FB: false, 

	appId: function() {
		return this.ENV.Server.FACEBOOK_APP_ID;
	},

	load: function() {
 
		var _this = this;
		
		return  new Ember.RSVP.Promise(function(resolve/*, reject*/) {

			//IF we already have FB.
			if(_this.get('FB')) {
				return resolve(_this.get('FB'));
			}


			//Otherwise get FB.
			if (Ember.$('#fb-root').length === 0) {
				Ember.$('body').append('<div id="fb-root"></div>');
			}
			window.fbAsyncInit = function() {
				FB.init({
					appId      : _this.appId(),
					xfbml      : true,
					version    : 'v2.2'
				});
				Ember.run(function(){
					_this.set('FB', FB);
					return resolve(FB);
				});
			};

			(function(d, s, id){
				 var js, fjs = d.getElementsByTagName(s)[0];
				 if (d.getElementById(id)) {return;}
				 js = d.createElement(s); js.id = id;
				 js.src = "https://connect.facebook.net/en_US/all.js";
				 fjs.parentNode.insertBefore(js, fjs);
			 }(document, 'script', 'facebook-jssdk'));


		});
	}
});