import Ember from 'ember';   

export default  Ember.ObjectController.extend({ 
	currentUserIdBinding: 'Haul.currentUser.id',
	collection: null,
	showAboutUs:false,
	followsCount:0,

	//Is currentUser viewing his own page?
	isCollectionOwner: false, 

	setup: function() { 

		if( this.get("collection")  ) {
 
			if( this.get('session').isAuthenticated ) {
				if( this.get('collection').get('user').get('id') === this.currentUserId) {
					this.set('isCollectionOwner', true);
				}
			} 

			var _this = this; 
			var collection_id = this.get("collection").id;
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
