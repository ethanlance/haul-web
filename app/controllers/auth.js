import Ember from 'ember';
import ApplicationAdapter from '../adapters/application';
import config from '../config/environment';
var Config = config.APP;



// Load the SDK asynchronously
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));




var AuthController = Ember.ObjectController.extend({

	needs: ['facebook'],
	//Turn this off:
	email: null, //'ethan@haul.io',
	password: null, //'Bailey007!',
	client_token: Config.Server.CLIENT_TOKEN,
	host: Config.Server.USER_SERVER_HOST,
	 
	isProcessing: false, 
	attemptedTransition: null, 
 

	authenticateByFB: function() {
		var _this = this;
		var facebookController = this.get('controllers.facebook');
		var data = {fb_user_id: facebookController.get('userID'), fb_token: facebookController.get('accessToken')};
		return Ember.$.ajax({
				url: _this.get('host') + '/auth/facebook',
				type: 'post',
				data: data,
				headers: {
					Authorization: 'Bearer client_' + _this.get('client_token')
				},
				dataType: 'json'
		}).then(

			function(response) { 
				//Auth Controller:  
				_this.setupUser(response);
			}, 

			//ERROR HANDLE
			function(error) {
				return error;
			}
		);
	},
		
	setupUser: function(response) {
							
		this.set('isProcessing', false);

		var attemptedTrans = this.get('attemptedTransition'); 
		
		var accessToken = response.data[0].token_id;
		var refreshToken =response.data[1].token_id; 
		var user_id = response.data[0].user_id; 
 
		//Now get the user:
		var _this = this;
		return this.store.find('user', user_id).then( 
			function(user) {

				ApplicationAdapter.reopen({
					'loginToken': accessToken
				});

				//Does user have a FEED (aka store, aka collection)?
				return _this.store.find('user-collection', user_id)
				.then(function(result){

					console.log("FEED", result);

					var collection_id = result.get('collection_id');

					if( Ember.isEmpty(collection_id) ){

						console.log("MAKE THE COLLECTION");

						//Setup collection aka feed
						var data = {
							name: user.get('name'),
							description: ' ',
							user_id: user_id
						}
						var feed = _this.store.createRecord('collection', data);
						
						return feed.save()

							.then(function(record){
								user.set('collection', record);
								console.log("SAVED", record.get('id'))
								return record.get('id');
							})
							.then(function(collection_id){
								return _this.store.find('collection', collection_id)
								
							})
							.then(function(collection){
								console.log('GOT COLLECTION', collection);
								return _this.store.find('user-collection', user_id)
								
							})
							.then(function(record){
								console.log("TRY RELOAD ", record);
								return record.reload();
							})
							.then(function(record) {
								console.log("GOT COLLECTION LIST" , record);
								return record.get('collection_id');
							});

					}else{
						
						return _this.store.find('user-collection', user_id)
						.then(function(record) {
							console.log("WHAT IS THIS? " , record);
							return collection_id;
						});
					
					}
				})



				.then(function(collection_id){
					return _this.store.find('collection', collection_id)
					.then(function(record) {
						return record;
					});
				})

				.then(function(collection) {

					//Save session.
					return _this.get('session').authenticate('authenticator:custom', 
						{
							'userId':user.id, 
							'accessToken':accessToken, 
							'refreshToken':refreshToken 
						}
					).then(function(){

						

						if(Ember.isEmpty(attemptedTrans)){  
							_this.transitionToRoute("seller", collection.get('slug')  );
						}else{
							_this.transitionToRoute(attemptedTrans);
						}
					});
				});

			}, function(error) {
				return error;
			} 
		);
	} 
});
export default AuthController;
