import Ember from 'ember';

export default Ember.Component.extend({

	productType: 'products',
	productIdBinding: "product.id",
	userIdBinding: "session.currentUser.id",
	totalBinding: "product.likeCount.total",
	userLikes: false,
	userLikesRecord: false,

	start: function() {
		


		return;









		var store = this.container.lookup("store:main");
		var _this = this;

		//Skip if user is anon.
		if(!this.get('userId')){
			return;
		}

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

			//Anon?
			if(!this.get('userLikesRecord')){
				this.sendAction('loginModal');
				return;
			}

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

				store.find('user-likes-list', _this.get('userId'))
				.then(function(r){
					r.reload();
				});

				store.find('like-count', _this.get('productId'))
				.then(function(r){
					r.reload();
				});
				
			}, function(error){
				console.log("Error", error);
			});
		}
	}
});