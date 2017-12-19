import Ember from 'ember';
import config from '../config/environment';

import PaginateMixin from '../mixins/paginate';
import PollingMixin from '../mixins/polling';
export default Ember.Component.extend( PaginateMixin, PollingMixin, {

	//ie. transaction_id, userId-userId
	objectId: null,

	//ie. 'post', 'transaction', 'dms', etc.
	objectType: null,


	//same as objectType but supplied via the handlebars component.
	regardingType: null,

	//same as objectId but supplied via the handlebars component.
	regardingId: null,

	canDM: false,
	 
	currentUserIdBinding: "session.currentUser.id",

	toUser: null,

	userIdKey: null,

	toUserIdBinding: "toUser.id",

	toUsernameBinding: "toUser.username",

	limitBinding: "this.ENV.paginationLimit.comments",

	hasMoreBinding: 'paginateHasMore',

	isProcessing:false,

	storeName: 'comment',	

	showSubmitCommentButton: false,

	model:null,

	comments: null,
	
	commentsSorting: ['created_at:desc'],
    
    sortedComments: Ember.computed.sort('pagedContent', 'commentsSorting'),

    placeholder: "Write a message...",

    pollIntervalBinding: 'this.ENV.pollingTime.comments', 


    /*
    	Being Setup
    */

    setup: function() {

    	//Bail out if empty.
    	if( Ember.isEmpty(this.get('toUserId')) || Ember.isEmpty(this.get('currentUserId')) ) { return; }

    	//Bail out if the same.
    	if( this.get('toUserId') === this.get('currentUserId') ) { return; }
		
				
		this.startObject();	

		this.set('canDM', true);

		this.makeModel();

		this.startPagination();		

    	this.startFilter();

    	this.startPoll();

		this.startUI();


	}.on('didInsertElement').observes('toUserId', 'currentUserId'),


	/**
		What object/type is this conversation about
		ie: transactionId/transactions  or userIds/users
	**/
	startObject: function() {

		//To and From can talk to eachother.		
		//What are we talking about?  
		// ie: is this a DM regarding a 'transaction' or 'user'?
		if( this.get('regardingType') && this.get('regardingId') ){

			this.set('objectId', this.get('regardingId'));
			this.set('objectType', this.get('regardingType'));
			
		} else {

			//Assume it's a user DM
			this.set('objectId', this.makeUserKey( this.get('toUserId'), this.get('currentUserId') ));
			this.set('objectType', "users");

		}

	},


	makeUserKey: function(to, from){
		var key;
		if( to > from ) {
			key = to + "_" + from;	
		}else {
			key = from + "_" + to;
		}
		return key;
	},



    /**
		Polling Mixin
	**/
    onPoll: function() {

    	var _this = this;
    	var store = this.container.lookup('store:main');
    	
    	store.find(_this.get('storeName'), {
    		object_id: _this.get('objectId'),
    		object_type: _this.get('objectType'),
    		limit: this.get('limit'),
    	})
    	
    	.then(function() {
    		_this.startPoll();
		});

    },






	startUI: function() {

		this.set('placeholder', "Write a message to " + this.get('toUsername') +"...");

		var _this = this;

		Ember.$(this.get('element')).find('textarea').keypress(function(e){

			$(e.currentTarget).css('outline', 0);

			if( e.currentTarget.value ){
				_this.set('showSubmitCommentButton', true);
			}else{
				_this.set('showSubmitCommentButton', false);
			}
		});
	},
	 


	startFilter: function() {
		//The Filter. 
		var _this = this;
		var store = this.container.lookup('store:main');
		var filter = store.filter(_this.get('storeName'), function(result) {
			if(result.id && (result.get('object_id') === _this.get('objectId'))) {
				return result;
			}
		});
		filter.then(function(results){
			_this.set('pagedContent', results);	
		});
	},


	

	startPagination: function() {
		//Pagination:	
		this.set('paginateQuery', {
			storeName: this.get('storeName'),
			limit: this.get('limit'), 
			object_id: this.get('objectId'),
			object_type: this.get('objectType'),
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
		this.paginateMore();
	},



	makeModel: function() {
		var store = this.container.lookup('store:main');
		var model = store.createRecord('comment');
		this.set('model', model);
		this.reset();
	},

	updateCommentCount: function(direction) {
		var store = this.container.lookup('store:main');
		var key = this.get('objectId') + "-" + this.get('objecType')
		store.find('comment-count', key )
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
		});
	},

	prependMessageWithUsername: function(message) {

		//First remove any @ in the comment.
		message = message.replace(/@/g, " ");

		//Inject the toUser @username to make this work.
		message =  "@" + this.get('toUsername') + " " + message;

		return message;

	},
 
	saveModel: function() {


		this.set('isProcessing', true);

		var _this = this; 
		var store = this.container.lookup('store:main');
		var model = this.get('model');

		model.set('user_id', this.get('currentUserId'));
		
		model.set('object_id', this.get('objectId'));
		
		model.set('object_type', this.get('objectType'));

		model.validate()
		.then(function(){

			var message = model.get('comment');
			
			message = _this.prependMessageWithUsername( message );

			model.set('comment', message);

			return model.save();
		})
		.then(
			function success(record) {  
			
				_this.set('isProcessing', false);
				_this.set('showServerErrors', false);
				_this.makeModel();
				_this.updateCommentCount('up');

				_this.set('showSubmitCommentButton', false);
				
			},
			function failure(error){ 
				_this.set('isProcessing', false);
				_this.set('showServerErrors', true);

				var message;
				if( _this.ENV.errorMessages[error.status] ){
					message = _this.ENV.errorMessages[error.status];
				}else{
					message = _this.ENV.errorMessages[400];
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

		submit: function() {
			this.saveModel();	
		}
	}
});
