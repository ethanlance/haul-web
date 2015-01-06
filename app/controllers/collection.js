import Ember from 'ember'; 
import auth from './auth';

var CollectionController = Ember.ObjectController.extend({
	needs: ["auth"],
	model: {},
});
export default CollectionController;



