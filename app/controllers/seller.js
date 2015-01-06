import Ember from 'ember';
import auth from './auth';

var SellerController = Ember.ObjectController.extend({
	needs: ["auth"],  
	currentUser: Ember.computed.alias('controllers.auth.currentUser')
}); 
export default SellerController;
