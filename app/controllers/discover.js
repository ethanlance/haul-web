import Ember from 'ember';
import PaginateMixin from '../mixins/paginate';
export default Ember.ObjectController.extend(PaginateMixin,{
		
	currentScrollPos: 0,

 	storeName: 'user-likes-list',

 	limitBinding: 'this.ENV.paginationLimit.posts',

 	user: false,

	currentUserIdBinding: 'session.currentUser.id', 

	sorting: ['created_at:desc'], 

    sortedContent: Ember.computed.sort('pagedContent', 'sorting'),	

	category: 'featured',

	usernameFilter: 'haul',

	isfeatured: true,
	isgear: false,
	isstyle: false,
	istech: false,
	isart: false,
	ismusic: false,
	isbooks: false,
	ismotors: false,
	isoutdoor: false,
	isfashion: false,
	isliving: false,

	listView: false,

	gridView: true,


	categories: [
		'motors',
		'outdoor',
		'gear',
		'art',
		'living',
		'music',
		'books',
		'style',
		'fashion',
	],

	categoryUsername: {
		'featured':'haul',
		'motors':'haulmotors',
		'outdoor':'hauloutdoors',
		'gear':'haulgear',
		'art':'haulart',
		'living':'haulliving',
		'music':'haulmusic',
		'books':'haulbooks',
		'style':'haulstyle',
		'fashion':'haulfashion',
	},

	categoryChanged: function() {

		var _this = this; 
		var username = this.get('categoryUsername')[this.get('category')];

		this.set('usernameFilter', username);

		var cats = this.get('categoryUsername')
		for(var prop in cats){
			$("li."+prop).removeClass('active');
		}
		$("li."+this.get('category')).addClass('active');

		this.set('pagedContent', []);

		//Find this user.
		this.store.find('user', username).then(function(user){
			_this.set('user', user);
		});

	}.on('init').observes('category'),



	startPagination: function() {
		
		var user = this.get('user');

		if(Ember.isEmpty(user)) {
			return;
		}

		//Pagination:	
		this.set('paginateQuery', {
			storeName: this.get('storeName'),
			limit: this.get('limit'), 
			user_id: user.get('id'),
		});

		this.set('paginateHasMore', true);
		
		this.paginateMore();

	}.observes('user'),


	startFilter: function() {

		var user = this.get('user');

		if(Ember.isEmpty(user)) {return;}

		//The Filter. 
		var _this = this;
		var store = this.container.lookup('store:main'); 
		var filter = store.filter(_this.get('storeName'), function(result) {
			if(result.get('user_id') === user.id ){
				return result	
			}
		});
		filter.then(function(results){
			_this.set('pagedContent', results);	
		});
	}.observes('user'),


    changeCategory: function(category) {
    	this.set('category', category);
    },


	actions: {
    	fetchMore: function(callback) {
			var promise = this.paginateMore();		
			if(callback){callback(promise)};
    	},

    	clickCategory: function(category) { 
    		this.changeCategory( category );
    	},

		toggleView: function() {
    		if( this.get('gridView') ){
				this.set('gridView', false);
    			this.set('listView', true);
    		}else{
    			this.set('gridView', true);
    			this.set('listView', false);
    		}
    	}
	},
}); 