import Ember from 'ember';
import auth from '../auth';


var CollectionProductController = Ember.ObjectController.extend({ 
	needs: ["auth"], 
	currentUser: Ember.computed.alias('controllers.auth.currentUser'),
});
export default CollectionProductController;



