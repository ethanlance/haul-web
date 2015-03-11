import Ember from 'ember';
import PaginateMixin from '../mixins/paginate';
export default Ember.ObjectController.extend(PaginateMixin,{

	currentUserIdBinding: 'Haul.currentUser.id',
	currentUserBinding: 'Haul.currentUser',
	isProfileOwner: true,  
	model:false,

	//Paginate Mixin:
	paginateMeta: {
		limit: 1, 
		storeName: 'feed',
	},

	modelChange: function() {
		if(!Ember.isEmpty(this.get('model'))){
			this.set('hasPosts', true);
		}else{
			this.set('hasPosts', false);
		}

		//Pagination:
		this.set('paginateFilterCheck', {user_id: this.get('user.id')});
		this.set('paginateQuery', {user_id: this.get('currentUserId')});
		this.set('pagedContent', this.paginateFilter());
		this.paginateMore();
		
	}.observes('model'),

	start: function() {
		if( this.get('currentUserId') ){
			var _this = this;
			this.store.find('feed', {user_id:this.get('currentUserId')}).
			then(function(feed){
				_this.set('model', feed);
			});	
		}
	}.on('init').observes('currentUserId'), 


}); 