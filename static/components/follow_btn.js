
Haul.FollowBtnComponent = Ember.Component.extend({

	btnName: null,
	ref_type: null,
	ref_idBinding: "item.id",
	user_idBinding: "currentUser.id",
	
	isFollowingCountBinding: "item.isFollowingCount.total",
	isFollowingText: null,
	
	isFollowedByCountBinding: "item.isFollowedByCount.total",
	isFollowedByText: null,

	userFollows: null,
	userFollowsRecord: null,
	showButton: false,

	userFollowsChange: function() {
		if( this.get('userFollows') ) {
			this.set('btnName', 'unfollow');
		} else {
			this.set('btnName', 'follow');
		}
	}.observes('userFollows'),

	/**
	 	Number of users following this ITEM
	**/
	isFollowedByCountChange: function() { 
		var total = this.get('isFollowedByCount');
		if( total ) {
			if( total == 1 )
				this.set('isFollowedByText', total + " follower")
			else 
				this.set('isFollowedByText', total + " followers")
		}
	}.observes('isFollowedByCount'),

	/** 
		Number of user's this ITEM is following
	**/
	isFollowingCountChange: function() { 
		var total = this.get('isFollowingCount'); 
		if( total ) {
			this.set('isFollowingText', "following " + total);
		}
	}.observes('isFollowingCount'),

	start: function() {  
	
		this.isFollowedByCountChange();
		this.isFollowingCountChange();

		var store = this.get('targetObject.store');
		var _this = this; 

	
 		
 	
		
		//Get Ref Type:
		// var model = String(this.item.constructor);
		// var name = model.split('.');
  //       var ref_type = Ember.String.camelize(name.pop());

  		var ref_type = this.get('ref_type');
        if(ref_type == "user")
        	this.set('ref_type', 'users');
        else if(ref_type == "collection")
        	this.set('ref_type', 'stores');

		//Can't follow self.
		if( this.get('user_id') === this.get('ref_id') ) {
			this.set('showButton', false);
			return;
		} else {
			this.set('showButton', true);

			//currentUser follows item?
			var key = this.ref_id + "-" + this.ref_type;
			store.find('follow', key).then(function(ufollow){
				if(!Ember.isEmpty(ufollow)){
					_this.set('userFollows', true);
					_this.set('userFollowsRecord', ufollow);
				}
			}, function(error) {
				console.log("ERROR", error) 
				_this.set('userFollowsRecord', false);
				_this.set('userFollows', false);
			});
		}
	}.on('init'),

	actions: {	

		btnClick: function(event) { 
			var _this = this;
			var record = this.get('userFollowsRecord'); 

			var follow;
			if( record ){
				record.deleteRecord();
				follow = false;
			} else {
				var store = this.get('targetObject.store');
				var data = {
					user_id: this.user_id,
					ref_id: this.ref_id, 
					ref_type: this.ref_type
				}
				var record = store.createRecord('follow', data);
				follow = true;
			}

			record.save().then(function(response){
				_this.toggleProperty('userFollows');

				if( follow ){
					_this.set('userFollowsRecord', record);
					_this.incrementProperty('isFollowedByCount');
				}else{
					_this.set('userFollowsRecord', null);
					_this.decrementProperty('isFollowedByCount');
				}
				
			}, function(error){
				console.log("Error", error);
			})
		}
	}
});