import Ember from 'ember';
export default Ember.Route.extend( {

	post: null,

	image: null,

	metaTitle: function() {
		
		var model = this.get('transaction');

		var title = "Transaction: " + model.get('product_name');
		
		return title;

	}.property('transaction'), 


	model: function(params) {
		var _this = this;
		var id = params.id;

		return this.store.find('transaction', id).then(function(result){
			
			_this.set('transaction', result);
 
 			return result;

		}, function() {
			return _this.transitionTo('not-found');
		});
 	}
});