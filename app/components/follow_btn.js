import Ember from 'ember';


var FollowBtnComponent = Ember.Component.extend({

	showButton: false,
	hideIfFollowing:false,
	userFollows: false,
	buttonText: 'follow',
	followType: 'stores',
	followIdBinding: "followObj.id",
	userIdBinding: "session.currentUser.id",
	userFollowsRecord: false,

	didInsertElement: function() {
		this.set('showButton', true); 
	},


	userFollowsChange: function() {
		if( this.get('userFollows') ) {
			this.set('buttonText', 'following');
		} else {
			this.set('buttonText', 'follow');
		}

		if( this.get('hideIfFollowing') === true ) {
			this.set('showButton', false);
		}

	}.observes('userFollows'),


 	start: function(){ 		
 		this.itemChanged();
 	}.on('init'),

 	itemChanged: function() {
 
		if(!this.get('userId') || !this.get('followId') ){
			return;
		}

		//Don't follow self.
		if( this.get('followObj').get('user').get('id') === this.get('userId')){
			this.set('showButton', false);
			return;
		}

		var _this = this;
		var store = this.container.lookup("store:main");
		

		//currentUser follows item?
		var key = this.followId + "-" + this.followType;
		store.find('follow', key).then(function(record){
			console.log("RECORD", record)
			if(!Ember.isEmpty(record)){
				_this.set('userFollows', true);
				_this.set('userFollowsRecord', record);
			}
		}, function() {
			_this.set('userFollowsRecord', false);
			_this.set('userFollows', false);
		});
		
	}.observes('followId', 'userId'),

	

	actions: {	

		buttonClick: function() { 

			//Intercept if user is anonymous:
			if( !this.get('user_id')){
				console.log("SEND MODAL")
				this.sendAction('openModal', 'loginmodal', {});
				return;
			}


			var _this = this;
			var record = this.get('userFollowsRecord'); 
			var store = this.container.lookup("store:main");
			var follow;
			
			if( record ){
				record.deleteRecord();
				follow = false;
			} else {
				record = store.createRecord('follow', {user_id: this.get('userId'),ref_id: this.get('followId'), ref_type: this.get('followType')});
				
				follow = true;
			}

			record.save()
			.then(function(){

				if( follow ){
					_this.set('userFollowsRecord', record);
					_this.set('userFollows', true); 
				}else{
					_this.set('userFollowsRecord', false);
					_this.set('userFollows', false); 
				}

				store.find('collection-is-followed-by-count', _this.get('followId'))
				.then(function(r){
					r.reload();
				});

				store.find('collection-followers-list', _this.get('followId'))
				.then(function(r){
					r.reload();
				});

				store.find('user-is-following-count', _this.get('userId'))
				.then(function(r){
					r.reload();
				});

				store.find('user-follows-list', _this.get('userId'))
				.then(function(r){
					r.reload();
				});

				
			}, function(error){
				console.log("Error", error);
			});
		}
	}
});
export default FollowBtnComponent;