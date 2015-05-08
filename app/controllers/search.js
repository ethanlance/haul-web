import Ember from 'ember';
import PaginateMixin from '../mixins/paginate';
import config from '../config/environment';
export default Ember.ArrayController.extend(PaginateMixin, {
	queryParams:['q'],
	q: null, 
	typeText: '',
	queryText: '',
	showResults:false,

	currentQ: null,
	currentType: null,

	limit: config.APP.paginationLimit.search,
	
	sorting: ['created_at:desc'],
    sortedContent: Ember.computed.sort('pagedContent', 'sorting'),	

    currentTypeChanged: function() {

		this.set('currentTypeIsHashtag', false);
		this.set('currentTypeIsUser', false);	
		this.set('currentTypeIsPost', false);

    	if( this.get('currentType') === "hashtag" ){
    		this.set('currentTypeIsHashtag', true);
    	}else if( this.get('currentType') === "user" ){
    		this.set('currentTypeIsUser', true);	
    	}else {
    		this.set('currentTypeIsPost', true);
    	}
    }.observes('currentType'),

	queryChanged: function() {
		var key = this.get('q');
		var q = key.split("_")[1];
		var type = key.split("_")[0];
		var storeName;

		this.set('queryText', q);
		this.set('typeText', type);
		this.set("showResults", false);

		if( type === "hashtag"){
			this.set('typeText', "hashtags like");
			this.set("showResults", true);
			storeName = 'search-hashtag';
		}
		else if( type === "tag"){
			this.set('typeText', "# hashtag results for");
			this.set("showResults", true);
			storeName = 'search-tag';
		}
		else if( type === "user"){
			this.set('typeText', "@ user results for");
			this.set("showResults", true);
			storeName = 'search-user';
		}
		else if( type === "post"){
			this.set('typeText', "<span class='glyphicon glyphicon-search'></span> post results for");
			this.set("showResults", true);
			storeName = 'search-post';
		}else{
			return;
		}

		if(type  && q) { 

			//IF the query changes, then void our meta offset.
			if( !Ember.isEmpty(this.get('currentQ'))  && this.get('currentQ') !== q ){
				this.set('currentQ', q);  
				this.store.unloadAll(storeName);			
				var meta = this.store.metadataFor(storeName)
				delete meta.offset;
				this.store.setMetadataFor(storeName, meta);	
			}

			var promise = this.store.filter(storeName, function(result){
				return result;
			});

			this.set('pagedContent', promise);

			//Pagination:	
			this.set('paginateQuery', {
				storeName: storeName,
				limit: this.get('limit'), 
				q: q,
			});

			this.set('paginateHasMore', true);
			this.paginateMore();
			this.set('currentQ', q);
			this.set('currentType', type);
		}

 
	}.observes('q'),

	actions: {
    	fetchMore: function(callback) {
			var promise = this.paginateMore();		
			if(callback){callback(promise)};
    	},

    	clickHashtag: function(tag) {
    		var key = "tag_" + tag.get('name');
    		this.transitionToRoute('search', {queryParams: {q:key}} );
    	}
	}
});