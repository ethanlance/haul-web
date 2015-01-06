import Ember from 'ember'; 
import auth from '../auth';

/**
* 	Display a collection
**/ 
var CollectionIndexController = Ember.ObjectController.extend({
	needs: ["auth"],  
	currentUser: Ember.computed.alias('controllers.auth.currentUser'),
	products: [],
	model: [],
	collection: null,
	showAboutUs:false,
	followsCount:0,

	//Is currentUser viewing his own page?
	isCollectionOwner: false, 

	setup: function() { 
		var _this = this;
		var currentUser = this.get('currentUser');	
		

		if( this.get("collection")  ) {

			var collection_id = this.get("collection").id;
		
			if( currentUser ){
				if( !Ember.isEmpty(currentUser) && this.get('collection').get('user').get('id') === currentUser.get('id')) {
					this.set('isCollectionOwner', true);
				}
			} 


			this.store.find('collection-is-followed-by-count', collection_id).then(function(count){
				_this.set('followsCount', count.get('total'));			
			});


			
	 	}
	}.observes('collection'),

	actions: {
		toggleAboutUs: function(){
			this.toggleProperty('showAboutUs');
		}
	}
});
export default CollectionIndexController;