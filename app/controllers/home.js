
import Ember from 'ember';


	var HomeController = Ember.ObjectController.extend({
		needs: ["auth"], 
		currentUser: Ember.computed.alias('controllers.auth.currentUser'),
	});
	export default HomeController;
 