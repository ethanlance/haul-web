import Ember from 'ember';

export default Ember.ArrayController.extend({
	
 	needs: ['profile'],
 	thisPage: "feedPage", 
 	hasPosts: false,
 	user: false,
	currentUserIdBinding: 'Haul.currentUser.id',
	isProfileOwner: false, 
	isFeedPage:true,
	currentPos:'3000px',
	showGridViewBinding: 'controllers.profile.showGridView',
	showGridBtn:true,

	limit: 1,
	hasMore: false,
	pagedContent: null,
	
	actions: {
    	fetchMore: function(callback) {
			var promise = this.fetchMore();		
			callback(promise);
    	} 
	},
	
	fetchMore: function() {

		var _this = this;
    	var meta = this.store.metadataFor("post-list");
    	var params = {
			limit: this.get('limit'),
			user_id: this.get('user.id'),
			next: meta.next,
		};
		
		return this.store.find('post-list', params)
		.then(function(results){

			//Stop pagination if results are empty
			var meta = _this.store.metadataFor("post-list");
			if(Ember.isEmpty(results)  ||  meta.limit > meta.count){
				_this.set('hasMore', false);
				return false;
			}
			_this.set('hasMore', true);

			var pagedContent = _this.get('pagedContent'); 
			if( pagedContent ) {
				pagedContent.pushObjects(results);
			}else{
				_this.set('pagedContent', results);
			}
			
			return results; //return to infinite-scroll component.
		});
	}.observes('model'),

 	currentPageBinding: 'controllers.profile.currentPage',
 	showHeaderChange: function(){  
 		if( this.get('currentPage') === this.get('thisPage')){
 			this.set('controllers.profile.showGridBtn', this.get('showGridBtn'));
 			this.get('controllers.profile').set('showHeader', true);	
 		} 		
 	}.observes('currentPage'),

	modelChange: function() {

		this.set('controllers.profile.showGridBtn', this.get('showGridBtn'));

		if(!Ember.isEmpty(this.get('model'))){
			this.set('hasPosts', true);
		}else{
			this.set('hasPosts', false);
		}
		this.showHeaderChange();
	}.observes('model'),

	isProfileOwnerChanged: function() {
		this.set('isProfileOwner', false); 
		if( this.get('session').isAuthenticated && !Ember.isEmpty(this.get('currentUserId')) ) {
			if (this.get('user').get('id') === this.get('currentUserId')) {
				this.set('isProfileOwner', true);
			}
		} 
	}.observes('user', 'currentUserId'),

}); 