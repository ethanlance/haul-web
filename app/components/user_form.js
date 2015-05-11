import Ember from 'ember';
export default Ember.Component.extend({
	
	showErrorMessage: false,
	
	errorMessage: null,
	
	username:null,
	
	currentUserIdBinding: 'session.currentUser.id',

	showForm:true,

	didInsertElement: function() {
		if(Ember.isEmpty(this.get('currentUserId'))){
			return;
		}
		var _this = this;
		var store = this.container.lookup("store:main");
		store.find('user', this.get('currentUserId'))
		.then(function(record) {
			_this.set('model', record);
		});

	}.observes('currentUserId'),

	save: function() {

		var _this = this;
		var model = this.get('model');
		var firstname = model.get('firstname');
		var lastname = model.get('lastname');
		
		model.validate()
		.then(function(){
			return model.save();
		})
		.then(function(){
			_this.set('session.currentUser.firstname', firstname);
			_this.set('session.currentUser.lastname', lastname);
		})
		.then(
			function() { 
				_this.set('isProcessing', false);
				_this.set('showForm', false);
			},
			function(error){
				_this.set('isProcessing', false);	
				_this.set('showErrors', true);
				if(error.status === 400){ 
					_this.set('errorMessage', "Oops, usernames must be <ul><li>at least 3 characters long</li><li>must start with a letter</li><li>cannot have spaces</li><li>and can only contain letters and numbers</li></ul>");
				}else if(error.status === 409){ 
					_this.set('errorMessage', "Sorry, name unavailable.");
				}else{
					_this.set('errorMessage', "Uhoh, there was an error.");
				}
				_this.set('showErrorMessage', true);
				console.log("Error" , error);
			}
		);
	},

	actions: {
		saveForm: function() {
			this.save();
		},
		showForm: function() {
			this.set('showForm', true);
		}
	}
});