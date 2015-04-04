import Ember from 'ember';

/* globals FB */
export default Ember.Object.extend({

	facebookScriptPromise: false, 

	appId: function(){
		return this.ENV.Server.FACEBOOK_APP_ID;
	},

	load: function() {
		var self = this;
		var facebookScriptPromise = this.get('facebookScriptPromise');
		if (!facebookScriptPromise) {
			facebookScriptPromise = new Ember.RSVP.Promise(function(resolve/*, reject*/) {
				if (Ember.$('#fb-root').length === 0) {
					Ember.$('body').append('<div id="fb-root"></div>');
				}
				window.fbAsyncInit = function() {
					FB.init({
						appId      : self.appId(),
						xfbml      : true,
						version    : 'v2.1'
					});
					Ember.run(function(){
						resolve(FB);
					});
				};

				(function(d, s, id){
					 var js, fjs = d.getElementsByTagName(s)[0];
					 if (d.getElementById(id)) {return;}
					 js = d.createElement(s); js.id = id;
					 js.src = "//connect.facebook.net/en_US/sdk.js";
					 fjs.parentNode.insertBefore(js, fjs);
				 }(document, 'script', 'facebook-jssdk'));
			});
			this.set('facebookScriptPromise', facebookScriptPromise);
		}
		return facebookScriptPromise;
	}
});