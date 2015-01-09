import DS from 'ember-data'; 

export default DS.RESTAdapter.extend({

	currentUserBinding: 'Haul.currentUser',
	accessTokenBinding: 'Haul.currentUser.access_token',

	headers: function() {
		if( this.get('accessToken') ){
			return {'Authorization':  "Bearer " + this.get('accessToken')};
		}else{
			return {'Authorization': 'Bearer client_5eed07b8d71cf26f6df6566cf705adaa'}
		}
	}.property()
}); 