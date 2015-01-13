
import Ember from 'ember';


var LikeBtnComponent = Ember.Component.extend({

	ref_type: "products",
	ref_idBinding: "item.id",
	user_idBinding: "session.currentUser.id",
	totalBinding: "item.likeCount.total",
	userLikes: false,
	userLikesRecord: false,

	start: function() {
		var store = this.get('targetObject.store');
		var _this = this;

		//currentUser like item?
		store.find('like', this.ref_id).then(function(uLike){
			if(!Ember.isEmpty(uLike)){
				_this.set('userLikes', true);
				_this.set('userLikesRecord', uLike);
			}
		});
	}.on('init'),

	actions: {
		btnClick: function() { 
			var _this = this;
			var record = this.get('userLikesRecord'); 

			var like;
			if( record ){
				record.deleteRecord();
				like = false;
			} else {
				var store = this.get('targetObject.store');
				var data = {
					user_id: this.user_id,
					ref_id: this.ref_id, 
					ref_type: this.ref_type
				};
				record = store.createRecord('like', data);
				like = true;
			}

			record.save().then(function(){
				_this.toggleProperty('userLikes');

				if( like ){
					_this.set('userLikesRecord', record);
					_this.incrementProperty('total');
				}else{
					_this.set('userLikesRecord', null);
					_this.decrementProperty('total');
				}
				
			}, function(error){
				console.log("Error", error);
			});
		}
	}
});
export default LikeBtnComponent;