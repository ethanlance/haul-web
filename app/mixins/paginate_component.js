import Ember from 'ember';
export default Ember.Mixin.create({
	storeBinding: 'targetObject.store',
	paginateQuery: {},
	paginateFilterCheck: {},
	paginateHasMore: true,
	paginateMore: function() {

		var _this = this;
		var paginateQuery = this.get('paginateQuery');
		var paginateMeta = this.get('paginateMeta');
		if(!this.get('paginateHasMore')){
			return;
		}
		
		var limit = paginateMeta.limit;
		var storeName = paginateMeta.storeName;
		var store = this.container.lookup('store:main');
    	var meta = store.metadataFor(storeName);
    	var params = {
			limit: limit,
			next: meta.next,
		};

		for (var attrname in paginateQuery) { params[attrname] = paginateQuery[attrname]; } //merge
		
		return store.find(storeName, params)
		.then(function(results){
			//Stop pagination?
			var meta = store.metadataFor(storeName);
			if(Ember.isEmpty(results)  ||  meta.limit > meta.count){
				_this.set('paginateHasMore', false);
				return false;
			}
			_this.set('paginateHasMore', true);
			return results
		});
	},
	paginateFilter: function() {
		var paginateMeta = this.get('paginateMeta');
		var paginateFilterCheck = this.get('paginateFilterCheck');
		var storeName = paginateMeta.storeName;
		var store = this.get('targetObject.store');
		var _this = this;
		return store.filter(storeName, function(result) {
			
			if(!Ember.isEmpty(result.get('id'))){ 

				var key, match;
				for(var attrname in paginateFilterCheck){
					match = false;
					if( result.get(attrname) === paginateFilterCheck[attrname ]){
						match = true;
					}
				}

				if( match ) {
					//Can this comment be deleted by the currentUser?
					if (result.get('user_id') === _this.get('currentUserId')) {
						result.set('canDelete', true);
					}

					return result;
				}
			}
		});
	}
});