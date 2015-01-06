import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function() {
		//Get the users collections
		var user = this.get('currentUser'); 
		this.store.find('user-collection', {user_id:user.id});
	},
	model: function() { 
		return this.modelFor('seller.product');
	},
  	setupController: function(controller, model) {
  		controller.set('model', model ); 
  	},
	// renderTemplate: function(controller, model) {
	// 	console.log("HERE?")
	// 	this.render('layouts/header_base', {
	// 		into: 'application',
	// 		outlet: 'header'
	// 	});
	// 	//this.render('seller/product/index');
	// 	this._super(controller, model);
	// } 
});