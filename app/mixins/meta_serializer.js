import Ember from 'ember';
export default Ember.Mixin.create({
	extractMeta: function(store, type, payload) {
		if (payload && payload.paging) {
			store.setMetadataFor(type, { 
				next: payload.paging.next,
				previous: payload.paging.previous,
				limit: payload.paging.limit,
				count: payload.paging.count,
			});  
		}
  	}
});