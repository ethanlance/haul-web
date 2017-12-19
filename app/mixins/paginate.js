import Ember from 'ember';
export default Ember.Mixin.create({
	
	paginateQuery: {},
	paginateHasMore: true,
	pagedContent:null,
	isProcessingFetch:false,

	paginateMore: function() {

		this.set('isProcessingFetch', true);
 
		var _this = this;
		var paginateQuery = this.get('paginateQuery'); 

		
		if(!this.get('paginateHasMore')){
			console.log("DO NOT PAGINATE ANYMORE.  YOU ARE DONE!")
			this.set('isProcessingFetch', false);
			return;
		}
		

		var storeName = paginateQuery.storeName;
		if( !storeName ) {
			return new Promise(function(resolve, reject) { reject() });
		}
	

		var store = this.container.lookup('store:main');
    	var meta = store.metadataFor(storeName);

    	var offset = 0;
    	if( !Ember.isEmpty(meta.offset) ) {
    		offset = meta.offset + 1;
    	}

    	var params = {
			next: meta.next,
			offset: offset,
		};

		var pagedContent = this.get('pagedContent');

		//Merge
		for (var attrname in paginateQuery) { params[attrname] = paginateQuery[attrname]; } //merge
		delete params.storeName;

		//Return promise:
		return store.find(storeName, params)
		.then(function(results){
			
			//Check if more to paginate.
			var meta = store.metadataFor(storeName);
			if(Ember.isEmpty(results)  || (meta.limit > meta.count) ){
				_this.set('paginateHasMore', false);
				return results;
			}else{
				_this.set('paginateHasMore', true);	
			}

			_this.set('isProcessingFetch', false);
			return results
		});
	},
	
});