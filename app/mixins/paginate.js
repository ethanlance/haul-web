import Ember from 'ember';
export default Ember.Mixin.create({
	
	paginateQuery: {},
	paginateHasMore: true,
	pagedContent:null,


	paginateMore: function() {

		var _this = this;
		var paginateQuery = this.get('paginateQuery'); 
		
		if(!this.get('paginateHasMore')){
			console.log("DO NOT PAGINATE ANYMORE.  YOU ARE DONE!")
			return;
		}
		
		
		var storeName = paginateQuery.storeName;
		var store = this.container.lookup('store:main');
    	var meta = store.metadataFor(storeName);
    	var params = {
			next: meta.next,
		};

		var pagedContent = this.get('pagedContent');

		//Merge
		for (var attrname in paginateQuery) { params[attrname] = paginateQuery[attrname]; } //merge
		delete params.storeName;

		//Return promise:
		return store.find(storeName, params)
		.then(function(results){
			console.log(storeName, "params " , params, " results", results);
			//Check if more to paginate.
			var meta = store.metadataFor(storeName);
			if(Ember.isEmpty(results)  || (meta.limit > meta.count) ){
				_this.set('paginateHasMore', false);
				return results;
			}else{
				_this.set('paginateHasMore', true);	
			}

			return results
		});
	},
	
});