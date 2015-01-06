import DS from 'ember-data';

var RESTSerializer = DS.RESTSerializer.extend({ 
	
	currentUser: null,

	currentUserId: function() {
		return this.get('currentUser').get('id');
	}.property(),

});
export default RESTSerializer;

