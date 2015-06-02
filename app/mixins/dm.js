import Ember from 'ember';
export default Ember.Mixin.create({

	currentUserIdBinding: "session.currentUser.id",

	currentUsernameBinding: "session.currentUser.username",

	objectType: 'users',

	limit: 10,

	isSpam: false,

	/*
		Notify toId they are being followed by fromId.
	*/
	sendFollowingDm: function(toId) {

		var fromId 			= this.get('currentUserId');
		var fromUsername 	= this.get('currentUsername');


		var _this = this;
		var store = this.container.lookup('store:main');
		store.find('user', toId)
		.then(function(user){
			return user.get('username');
		})
		.then(function(toUsername){

			var message = "Hi @"+toUsername+", &#64;"+fromUsername+" has started following you.";

			//Spam check.  Is this message already in a DM from fromId to toId.
			_this.spamCheck(toId, fromId, message)
			.then(function(){
				
				//Save & fail/succeed silently.
				if( _this.get('isSpam') ){
					return;
				} else {
					return _this.saveDm(toId, fromId, message)
				}
					
			});
		})	
		.then(
			function success() {},
			function failure(error){ 
				//fail silently.
				console.log('errr', error);
			}
		);

	},

	makeUserKey: function(to, from){
		var key;
		if( to > from ) {
			key = to + "_" + from;	
		}else {
			key = from + "_" + to;
		}
		return key;
	},

	saveDm: function(toId, fromId, message) {
		//Prepare our model data.
		var store = this.container.lookup('store:main');
		var model = store.createRecord('comment', {
			user_id: 		fromId,
			object_id:   	this.makeUserKey( toId, fromId ),
			object_type: 	this.get('objectType'),
			comment: 		message,
		});
		return model.save();
	},

	spamCheck: function(toId, fromId, message) {
		var _this = this;
		var store = this.container.lookup('store:main');
		return store.find('comment', {
			object_id:   	this.makeUserKey( toId, fromId ),
			object_type: 	this.get('objectType'),
			limitkey:  		this.get('limit')
		})
		
		.then(function(records){
			records.forEach(function(mention){
				if(mention.get('comment') === message){
					_this.set('isSpam', true);
				}
			});
		})
	}

});