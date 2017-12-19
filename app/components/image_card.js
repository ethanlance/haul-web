import Ember from 'ember'
export default Ember.Component.extend({
	action: 'imageDelete',

	actions: {
		imageDelete: function(image) {
			
			this.sendAction('action', {
				'image': image,
				'cb': Ember.run.bind(this, this.handleDelete)
			});
		}
	},

});