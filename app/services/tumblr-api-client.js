/* globals tumblr */

import Ember from 'ember';

var scriptPromise;

export default Ember.Object.extend({

	load: function() {
		var self = this;
		if (!scriptPromise) {	
			scriptPromise = new Ember.RSVP.Promise(function(resolve /* , reject */) {
				window.tumblr = (function(d,s,id){
					var js,
					ajs=d.getElementsByTagName(s)[0],
					t = window.tumblr || {};
					if (d.getElementById(id)) {return;}
					js=d.createElement(s);
					js.id=id;
					js.src="https://secure.assets.tumblr.com/share-button.js";
					ajs.parentNode.insertBefore(js,ajs);

					t._e = [];
					t.ready = function(f) {
						t._e.push(f);
					};

					return t;
				}(document, "script", "tumblr-js"));

				window.tumblr.ready(function(tumblr) {
					Ember.run.later(function(){
						console.log("TUBMLR", window.tumblr)	
						resolve(tumblr);
					}, 1000)
				});

			});

		}
		return scriptPromise;
	}
});