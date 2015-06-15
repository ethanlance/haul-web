import Ember from 'ember';
import PaginateMixin from '../mixins/paginate';
export default Ember.ObjectController.extend(PaginateMixin,{
		
	currentScrollPos: 0,

 	storeName: 'user-likes-list',

 	limit:null, 

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


	categoryUsername: {
		'featured':'haul',
		'gear':'haulcargo',
		'style':'haulstyle',
		'tech':'haultech',
		'art':'haulart',
		'music':'haulmusic',
		'books':'haulbooks',
	},

	categoryChanged: function() {

		var username = this.get('categoryUsername')[this.get('category')];

		this.set('usernameFilter', username);

		//Find this user.
		var _this = this; 
		this.store.find('user', username).then(function(user){
			_this.set('user', user);
		});


		var cats = this.get('categoryUsername')
		for(var prop in cats){
			_this.set('is'+prop, false);
		}
		_this.set('is'+this.get('category'), true);

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
    	}
	},
}); 