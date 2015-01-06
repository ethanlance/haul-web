import Ember from 'ember';
import auth from '../../auth';


//SHOW one product
var CollectionProductIndexController = Ember.ObjectController.extend({ 
	needs: ["auth"], 
	currentUser: Ember.computed.alias('controllers.auth.currentUser'),
	model: null,
	hasCollections: "collections.collections",

	//Is currentUser viewing his own page?
	isCollectionOwner: false,
	isProductOwner: false,
	collectionProductPromise:null,

	setup: function() {  

		var currentUser = this.get('currentUser');
		var model = this.get('model');
		if( currentUser && model ){

			//Collection's Owner
			if( !Ember.isEmpty(currentUser) && model.get('collection').get('user').get('id') === currentUser.get('id')) {
				this.set('isCollectionOwner', true);
			}	 

		}
	}.observes('model'),

});
export default CollectionProductIndexController;