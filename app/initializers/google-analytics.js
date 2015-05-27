import DS from 'ember-data';  
import ENV from '../config/environment';
export default {
	name:   'ga',
	before: 'environment',
	

	initialize: function(container, application) {
		// helper function to get tag from dom
		// save object to app




 		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');



		var GA = Ember.Object.extend({
			
			load: function(url) {


				return  new Ember.RSVP.Promise(function(resolve/*, reject*/) {

					  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
					  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
					  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
					  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

					  return resolve(ga);
			  	});

			 }
		});
		var ga = GA.create({application: application});

		application.set('ga', ga);
		application.register('google-analytics:main', ga, { instantiate: false });
		application.inject('router', 'ga', 'google-analytics:main');



	}
};