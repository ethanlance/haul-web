import Ember from 'ember';
import ErrorMixin from '../../../mixins/server_error';
export default Ember.ObjectController.extend(ErrorMixin, {

	currentUserBinding: 'session.currentUser',

	currentUserIdBinding: 'session.currentUser.id',

	showCancelModal: false,

	modalIsClosed: false,

	cancelTransaction: function() {
		var _this = this;		
		var model = this.get('model');
		var id = this.get('model.id');
		

		model.deleteRecord();
		model.save()
		.then(function() {
			model.reload();
		})
		.then(function() {
			var record = _this.store.getById('transaction-list', id);
			_this.store.unloadRecord(record);
		})
		.then(function(record){
			_this.set('isProcessing', false);
				$('label[for="nav-trigger"]').css('z-index',2)
			_this.transitionToRoute('settings.transactions');
		}, function(error){
			console.log("Error", error);
			_this.set('isProcessing', false);
		});
	},



	toggleModal: function() {
		var _this = this;

		var modalIsClosed = this.get('modalIsClosed');

		if( modalIsClosed ) {

			this.set('modalIsClosed', false);
			this.set('showCancelModal', true);
			Ember.run.later(function(){
				_this.set('animateCancelModal', true);
				$('label[for="nav-trigger"]').css('z-index',0)
			},100);	

		} else {

			this.set('modalIsClosed', true);
			this.set('animateCancelModal', false);
			Ember.run.later(function(){
				_this.set('showCancelModal', false);
				$('label[for="nav-trigger"]').css('z-index',2)
			},300);
			
		}
	}.observes('showCancelModal'),

	actions: {

		cancelPurchase: function() {
			this.cancelTransaction();
		},

		showCancelPurchase: function(){
			this.set('showCancelModal', true);
		},

		closeCancelPurchase: function(){
			this.set('showCancelModal', false);
		},

	}

});