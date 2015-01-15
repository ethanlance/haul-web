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


		var store = this.container.lookup("store:main");
		var _this = this; 


		this.set('showButton', true);

		//currentUser follows item?
		var key = this.followId + "-" + this.followType;
		store.find('follow', key).then(function(record){
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
				
			}, function(error){
				console.log("Error", error);
			});
		}
	}
});
export default FollowBtnComponent;