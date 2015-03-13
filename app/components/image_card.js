import Ember from 'ember'
export default Ember.Component.extend({
	action: 'imageDelete',

	actions: {
		imageDelete: function(image) {
			console.log("SEND EVENT!")
			this.sendAction('action', {
				'image': image,
				'cb': Ember.run.bind(this, this.handleDelete)
			});
		}
	},

  	// handleDelete: function(promise) {
   //  	var success = Ember.run.bind(this, this.deleteDidSucceed),
   //      	failure = Ember.run.bind(this, this.deleteDidFail);

   //  	promise.then(success, failure);
  	// },

  	// deleteDidSucceed: function(response) {
   //  	//this.remove();
  	// },

  	// deleteDidFail: function(error) {
   //  	console.log("CANNOT REMOVE", error);
  	// },

});