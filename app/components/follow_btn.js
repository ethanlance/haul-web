import Ember from 'ember';
export default Ember.Component.extend({

	showButton: false,
	hideIfFollowing:false,
	userFollows: false,
	buttonText: 'follow', 
	userFollowsRecord: false,
	currentUserBinding: "session.currentUser",
	currentUserIdBinding: "session.currentUser.id",


	followUser: null,
	followType: 'users',
	followIdBinding: 'followUser.id',
	
 

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
 

 	didInsertElement: function() {
  

		//Don't follow self.
		if( this.get('followId') === this.get('currentUserId')){
			this.set('showButton', false);
			return;
		}

		if(!this.get('currentUserId') || !this.get('followUser') ){
			this.set('showButton', false);
			return;
		}

		this.set('showButton', true); 

		var _this = this;
		var store = this.container.lookup("store:main");
		

		//currentUser follows item?
		var key = this.followId + "-" + this.followType;
		store.find('follow', key)
		.then(function(record){
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
			if( !this.get('currentUserId')){
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
				record = store.createRecord('follow', {user_id: this.get('currentUserId'),ref_id: this.get('followId'), ref_type: this.get('followType')});
				
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
  
				store.find('user-following-count', _this.get('currentUserId'))
				.then(function(r){
					r.reload();
				});

				store.find('user-following-list', _this.get('currentUserId'))
				.then(function(r){
					r.reload();
				});


				store.find('user-followers-count', _this.get('followId'))
				.then(function(r){
					r.reload();
				});

				store.find('user-followers-list', _this.get('followId'))
				.then(function(r){
					r.reload();
				});
				
			}, function(error){
				console.log("Error", error);
			});
		}
	}
});