import Ember from 'ember';
import ApplicationAdapter from '../adapters/application';

// Load the SDK asynchronously
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));



//AUTHENTICATE
//AuthController makes API Calls to Haul
var AuthController = Ember.ObjectController.extend({

	needs: ['facebook'],
	//Turn this off:
	email: null, //'ethan@haul.io',
	password: null, //'Bailey007!',
	client_token: Haul.CLIENT_TOKEN,
	host: Haul.USER_SERVER_HOST,
	 
	isProcessing: false, 
	attemptedTransition: null, 
	currentUser: false, 
	accessToken: false,

	init: function() { 
		this._super();
		var _this = this;

		
		// this.store.find('local-user', 1) 
		// .then(function(localUser){
		// 	if(Ember.isEmpty(localUser)) { 
		// 		console.log("EMPTY ", localUser)
		// 		_this.set('currentUser', false);
		// 		Haul.set('currentUser', false);
		// 	}else{
		// 		_this.set('currentUser', localUser);
		// 		Haul.set('currentUser', localUser);
		// 		console.log("LOCALUSER", localUser);
		// 	}
		// },function(error){
		// 	return error;
		// 	this.set('currentUser', false); 
		// });
		

		// var localUser = record.get('content');
		// if(Ember.isEmpty(localUser)) { 
		// 	console.log("EMPTY", localUser)
		// 	this.set('currentUser', false); 
		// }else{ 
		// 	this.set('currentUser', localUser);
		// 	Haul.set('currentUser', localUser);
		// 	console.log("SET " , this.get('currentUser'))
		// } 
	}.on('init'),

	resetHeader: function() { 

		// if( !this.currentUser ){
		// 	return;
		// }

		//var accessToken = this.currentUser.get('access_token');

		//Haul.currentUser = this.currentUser;
		//Haul.accessToken = accessToken;
console.log("RESET THE TOKEN")
		ApplicationAdapter.reopen({
			headers: {
				'Authorization': 'Bearer ' + this.get('accessToken'), 
				},
				currentUser: this.currentUser
		});

		// Haul.RESTSerializer.reopen({
		// 	currentUser: this.currentUser
		// });			
	}.observes('currentUser'),


	deAuthenticateLocalUser: function(cb) {

		this.set('currentUser', false);
		Ember.$.ajaxSetup({
			headers: {
				'Authorization': 'Bearer none'
			}
		});			

		//Remove user from localstorage
		return this.store.find('local-user').then(function(results){
			results.forEach(function(lu){
				console.log('lu',lu)
				lu.destroyRecord().then(function(){
					if(cb){
						return cb();
					}
				});
			});

			if( Ember.isEmpty(results) ){
				if(cb){
					return cb();
				}
			}

		}, function(error) {
			console.log("ERROR", error);
			if( cb ){
				return cb();
			}else{
				return error;
			}
			
		});



		// .then(function( lu ){ 

		// 	if(Ember.isEmpty(lu)) {
		// 		if(cb) {
		// 			return cb();	
		// 		}
		// 	}else{
		// 		lu.deleteRecord();
		// 		lu.save().then(
		// 			function() {  
		// 				if(cb) {
		// 					return cb();
		// 				}
		// 			},
		// 			function(error){
		// 				console.log("Error" , error);
		// 			}
		// 		);
		// 	}

		// }, function(error) {
		// 	console.log("ERROR", error);
		// 	if( cb ){
		// 		return cb();
		// 	}else{
		// 		return error;
		// 	}
			
		// });
	},

	authenticateLocalUser: function(user, accessToken, refreshToken, attemptedTrans) {

		HaulAuthenticator.authenticate(user, accessToken, refreshToken);




		// var data = {
		// 		id: 1,
		// 		user_id: user.get('id'),  
		// 		user: user,
		// 		name: user.get('name'),
		// 		slug: user.get('slug'), 
		// 		accessToken: accessToken,
		// 		refreshToken: refreshToken,
		// 		current: true,
		// 	}; 
		// var _this = this;



		// this.store.find('local-user', {id:1}).then(function(lu){
		// 	console.log("FOUND LOCAL USER")

		// 	return lu.setProperties(data)
		// 	.save()
		// 	.then(function(){

		// 		currentUserLoader.initialize();

		// 		//TRANSITION:
		// 		if(Ember.isEmpty(attemptedTrans)){ 
		// 			console.log("HERE?")
		// 			_this.transitionToRoute("seller", user);
		// 		}else{
		// 			_this.transitionToRoute(attemptedTrans);
		// 		}
		// 	});


		// },function(error){
		// 	console.log("CANNOT FIND CANNOT", error);

		// 	var record = _this.store.recordForId("local-user", 1)
		// 	record.loadedData();
		// 	record.setProperties(data);
		// 	record.save()
		// 	.then(function(){
		// 		//TRANSITION:
		// 		if(Ember.isEmpty(attemptedTrans)){ 
		// 			console.log("HERE?")
		// 			_this.transitionToRoute("seller", user);
		// 		}else{
		// 			_this.transitionToRoute(attemptedTrans);
		// 		}
		// 	});


		// });

		// //Local login is a callback.
		// var _this = this;
		// function cb(){
			



		// 	//LOCAL STORAGE USER
		// 	var data = {
		// 			id: 1,
		// 			user_id: user.get('id'),  
		// 			user: user,
		// 			name: user.get('name'),
		// 			slug: user.get('slug'), 
		// 			access_token: accessToken,
		// 			refresh_token: refreshToken,
		// 			current: true,
		// 		};
			
		// 	return _this.store.createRecord("local-user", data)
		// 	.save()
		// 	.then(function(lu) { 
		// 		console.log("HERE? ", lu)
		// 		_this.set('currentUser', lu);	

		// 		//TRANSITION:
		// 		if(Ember.isEmpty(attemptedTrans)){ 
		// 			console.log("HERE?")
		// 			_this.transitionToRoute("seller", user);
		// 		}else{
		// 			_this.transitionToRoute(attemptedTrans);
		// 		}

		// 	}, function(error) {
		// 		console.log("UHOH ERROR", error);
		// 		return error;
		// 	}); 
		// }

		// //First LOGOUT any previous User
		// return this.deAuthenticateLocalUser(cb);

	},


	authenticateByFB: function() {
		var _this = this;
		var facebookController =this.get('controllers.facebook');
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
				_this.send('setupUser', response);
			}, 

			//ERROR HANDLE
			function(error) {
				return error;
			}
		);
	},

	actions: { 
			
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

					//Save session.
					_this.get('session').authenticate('authenticator:custom', 
						{
							'userId':user.id, 
							'accessToken':accessToken, 
							'refreshToken':refreshToken 
						}
					).then(function(){
						if(Ember.isEmpty(attemptedTrans)){  
							_this.transitionToRoute("seller", user);
						}else{
							_this.transitionToRoute(attemptedTrans);
						}	
					});

					

				}, function(error) {
					return error;
				} 
			);
		}
	}
});
export default AuthController;
