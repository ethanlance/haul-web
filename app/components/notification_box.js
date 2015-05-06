import Ember from 'ember';
export default Ember.Component.extend({
	
	currentUserIdBinding: "session.currentUser.id",

	dismiss: true,

	message: false,

	toggleDismiss: function() {

		if( this.get('dismiss') ) {

			this.set('dismiss', false);
			$('body').addClass('notification');

		} else {

			this.set('dismiss', true);
			$('body').removeClass('notification');
		}

	},

	didInsertElement: function() {
console.log("BOOM");
		if( !this.get('currentUserId')){return;}

		//Eventually this will be a real method that looks for system notifications.
		//For now it only checks to see if a user has things to sell but has not
		//setup their seller account.
		var _this = this;
		var store = this.container.lookup("store:main");

		var userId = this.get('currentUserId');

		store.find('seller', userId).then(
			function success(record){

				//Seller exists.
				//do nothing.
				if(Ember.isEmpty(record)) {
					_this.toggleDismiss();
				}

			},
			function failure(error){
				
				//Seller does not exist.
				_this.toggleDismiss();
				

			}	
		);


	}.observes('currentUserId'),

	actions: {

		dismiss: function() {
			this.toggleDismiss();
		}

	}

});