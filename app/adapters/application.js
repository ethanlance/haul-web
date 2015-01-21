import DS from 'ember-data'; 

export default DS.RESTAdapter.extend({
	currentUserBinding: 'Haul.currentUser',
	accessTokenBinding: 'Haul.currentUser.access_token',
}); 