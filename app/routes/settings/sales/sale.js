import Ember from 'ember';
export default Ember.Route.extend( {

	metaTitle: function() {
		
		var model = this.get('post');

		var title = "Transaction: " + model.get('product_name');
		
		return title;

	}.property('post'), 


	model: function(params) {
		var _this = this;
		var id = params.id;

		return this.store.find('transaction', id)
		.then(function(result){
			
			_this.set('transaction', result);
 
 			return result.get('post');
 		})
 		.then(function(post){

			_this.set('post', post);

 			return _this.get('transaction');
			
		}, function() {
			return _this.transitionTo('not_found');
		});
 	}
});