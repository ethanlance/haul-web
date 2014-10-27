(function () {
    'use strict';

	// //Default Rest Adapter.  All routes use this unless they explicitly extend another adapter.
    Haul.ApplicationAdapter = DS.RESTAdapter.extend({
		headers: {
			'Authorization': 'Bearer client_5eed07b8d71cf26f6df6566cf705adaa', 
		},
		
		host: "http://localhost:8080",
		
		currentUser: null,

		currentUserId: function() {
			return this.get('currentUser').get('id');
		}.property(),
	}); 


	Haul.LSSerializer = DS.LSSerializer.extend();
	Haul.LSAdapter = DS.LSAdapter.extend({});
	
})();