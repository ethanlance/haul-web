import Ember from 'ember';
import config from '../config/environment';
var Haul = config.APP;
import PaginateMixin from '../mixins/paginate';
export default Ember.Component.extend( PaginateMixin,{
	
	storeName: 'post-comment',	
	limit:10,
	hasMoreBinding: 'paginateHasMore',

	isProcessing:false,

	anchorBinding: 'anchor',
	postIdBinding: 'post.post_id',
	userIdBinding: 'post.user_id',
	currentUserBinding: "session.currentUser",
	currentUserIdBinding: "session.currentUser.id",

	model:null,
	comments: null,
	commentsSorting: ['created_at:desc'],
    sortedComments: Ember.computed.sort('pagedContent', 'commentsSorting'),

    didInsertElement: function() {
  		if(this.get('anchor')) {
  			Ember.run.later(function(){
  				var top = $('#leaveComment').offset().top - 100;
	  			$('html, body').animate({
		        	scrollTop: top
		    	}, 800);
		    }, 300);
  		}

		this.makeModel();

		//Pagination:	
		this.set('paginateQuery', {
			storeName: this.get('storeName'),
			limit: this.get('limit'), 
			post_id: this.get('postId'),
		});
		this.set('paginateHasMore', true);

		var store = this.container.lookup('store:main'); 
		store.setMetadataFor(this.get('storeName'), { 
			next: '',
			previous: '',
			limit: '',
			count: '',
		});  

		//Set Content.
		var _this = this;
		this.paginateMore()

		//The Filter. 
		var filter = store.filter('post-comment', function(result) {
			if(result.id && (result.get('post_id') === _this.get('postId'))) {
				
				if( result.get('user_id') === _this.get('userId') ) {
					result.set('canDelete', true);
				}		
				return result;
			}
		});
		filter.then(function(results){
			_this.set('pagedContent', results);	
		})
		
		
	},

	makeModel: function() {
		var store = this.container.lookup('store:main');
		var model = store.createRecord('post-comment');
		this.set('model', model);
	},

	updateCommentCount: function(direction) {
		var store = this.container.lookup('store:main');
		store.find('post-comment-count', this.get('postId') )
		.then(function(record){
			if( direction === "up"){
				record.incrementProperty('total');
			}else{
				record.decrementProperty('total'); 
			}
		});
	},

	reset: function() {
		this.setProperties({
			serverErrorMessage: false,
			showServerErrors: false,
			showClientErrors: false,
			isProcessing: false,
		})
	},

	saveModel: function() {

		this.reset();

		//Intercept if user is anonymous:
		if( !this.get('currentUserId')){
			this.sendAction('openModal', 'loginmodal', {});
			return;
		}
		
		var _this = this; 
		var store = this.container.lookup('store:main');
		var model = this.get('model');
		
		model.set('user_id', this.get('currentUserId'));
		model.set('post_id', this.get('postId'));

		model.validate()
		.then(
			function(){
				_this.set('isProcessing', true);
				return model.save();
			},
			function(error){
				_this.set('isProcessing', false);
				_this.set('showClientErrors', true);
				return;
			}
		)
		.then(
			function(record) {  
				_this.set('isProcessing', false);
				_this.set('showServerErrors', false);
				_this.makeModel();
				_this.updateCommentCount('up');
			},
			function(error){ 
				_this.set('isProcessing', false);
				_this.set('showServerErrors', true);

				var message;
				if( Haul.errorMessages[error.status] ){
					message = Haul.errorMessages[error.status];
				}else{
					message = Haul.errorMessages[400];
				}

				var obj = JSON.parse(error.responseText);

				message = message + "<p>" + obj.message + "</p>";

				_this.set('serverErrorMessage', message);
			}
		);
	},

	actions: {

    	fetchMore: function() {
    		this.paginateMore();
    	},

		delete: function(record) {
			var _this = this;

			record.deleteRecord();
			record.save().then(function(){
				_this.updateCommentCount('down');
			}, function(error){
				console.log("Error" , error);
				record.rollback();
			});
		},

		submit: function() {
			this.saveModel();	
		}
	}
});