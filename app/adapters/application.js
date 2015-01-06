import DS from 'ember-data'; 


// //Default Rest Adapter.  All routes use this unless they explicitly extend another adapter.
var ApplicationAdapter = DS.RESTAdapter.extend({
	headers: {
		'Authorization': 'Bearer client_5eed07b8d71cf26f6df6566cf705adaa', 
	}
}); 
export default ApplicationAdapter;