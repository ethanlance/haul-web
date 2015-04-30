import Ember from 'ember';
import ErrorMixin from '../mixins/server_error';
export default Ember.Component.extend(ErrorMixin, {

	currentUserBinding: "session.currentUser",

	currentUserIdBinding: "session.currentUser.id",

	transactions: null,

	didInsertElement: function() {
		
		if(Ember.isEmpty(this.get('currentUserId'))){
			return;
		}

		var _this = this;
		var store = this.container.lookup("store:main");

		store.find('transaction-list', {user_id:this.get('currentUserId')})
		.then(
			function(transactions) {
				console.log("transactions", transactions);
				_this.set('transactions', transactions);
			},

			function(error) {
				console.log("transaction list error", error);
			}

		)

	}.observes('currentUserId'),
});