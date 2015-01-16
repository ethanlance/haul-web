import Ember from 'ember';

export default Ember.Component.extend({

	productType: 'products',
	productIdBinding: "product.id",
	userIdBinding: "session.currentUser.id",
	totalBinding: "product.likeCount.total",
	userLikes: false,
	userLikesRecord: false,



	start: function() {
		var store = this.container.lookup("store:main");
		var _this = this;
console.log("ASS HOLE")
		//currentUser like item?
		store.find('like', this.get('productId')).then(function(uLike){
			if(!Ember.isEmpty(uLike)){
				_this.set('userLikes', true);
				_this.set('userLikesRecord', uLike);
			}
		});
	}.on('init').observes('productId'),

	actions: {
		btnClick: function() { 
			var _this = this;
			var record = this.get('userLikesRecord'); 
			var store = this.container.lookup("store:main");

			var like;
			if( record ){
				record.deleteRecord();
				like = false;
			} else {
				var data = {
					user_id: this.get('userId'),
					ref_id: this.get('productId'), 
					ref_type: this.get('productType')
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

				store.find('user-likes-count', _this.get('userId'))
				.then(function(r){
					r.reload();
				});
				
			}, function(error){
				console.log("Error", error);
			});
		}
	}
});