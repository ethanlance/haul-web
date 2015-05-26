import Ember from 'ember';
import config from '../config/environment';

import PaginateMixin from '../mixins/paginate';
export default Ember.Component.extend( PaginateMixin,{

	objectId: false,

	//ie. 'post', 'transaction', etc.
	objectType: false,
	 
	currentUserIdBinding: "session.currentUser.id",

	limitBinding: "this.ENV.paginationLimit.comments",

	hasMoreBinding: 'paginateHasMore',

	isProcessing:false,

	anchorBinding: 'anchor',

	replyBinding: 'reply',

	storeName: 'comment',	

	showSubmitCommentButton: false,

	model:null,

	comments: null,
	
	comment_box:null,
	
	commentsSorting: ['created_at:desc'],
    
    sortedComments: Ember.computed.sort('pagedContent', 'commentsSorting'),

	
	schedulePoll: function(f) {
    	var _this = this;
    	return Ember.run.later(this, function(){
    		f.apply(this);
    	}, _this.ENV.pollingTime.comments );
    },

    onPoll: function() {
    	var _this = this;
    	var store = this.container.lookup('store:main');
    	store.find('comment', {
    		object_id: _this.get('objectId'),
    		object_type: _this.get('objectType'),
    		limit: this.get('limit'),
    	})
    	.then(function() {
    		_this.set('runPoll', _this.schedulePoll(_this.get('onPoll')));
		});
    },

    stopPoll: function() {
    	Ember.run.cancel(this.get('runPoll'));
    },

    startPoll: function() {
    	this.set('runPoll', this.schedulePoll(this.get('onPoll')));
    },


    willDestroyElement: function() {
    	this.stopPoll();
    },

    didInsertElement: function() {

    	
    	this.startPoll();
    	
    	this.startMentions();

  		if(this.get('anchor')) {
  			Ember.run.later(function(){
  				var top = $('#leaveComment').offset().top - 100;
	  			$('html, body').animate({
		        	scrollTop: top
		    	}, 800);
		    }, 300);
  		}

		this.makeModel();

  		if(this.get('reply')) {
  			var model = this.get('model');
  			var txt = "Hi @" + this.get('reply') +" ...";
  			model.set('comment', txt);
  			this.set('showSubmitCommentButton', true);
  		}		

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
		this.paginateMore()

		//The Filter. 
		var _this = this;
		var filter = store.filter('comment', function(result) {
			if(result.id && (result.get('object_id') === _this.get('objectId'))) {
				
				if( result.get('user_id') === _this.get('currentUserId') ) {
					result.set('canDelete', true);
				}		 
				return result;
			}
		});
		filter.then(function(results){
			_this.set('pagedContent', results);	
		});


		Ember.$(this.get('element')).find('textarea').keypress(function(e){

			$(e.currentTarget).css('outline', 0);

			if( e.currentTarget.value ){
				_this.set('showSubmitCommentButton', true);
			}else{
				_this.set('showSubmitCommentButton', false);
			}
		});


	},

	startMentions: function() {
		var _this = this;
		var box = $(".commentbox textarea");
		this.set('comment_box', box);

		$(box).mentionsInput({ 
	  		elastic: true,
	  		templates: {
				wrapper                    : _.template('<div class="mentions-input-box"></div>'),
				autocompleteList           : _.template('<div class="mentions-autocomplete-list"></div>'),
				autocompleteListItem       : _.template('<li data-ref-id="<%= id %>" data-ref-type="<%= type %>" data-display="<%= display %>"><%= content %></li>'),
				autocompleteListItemAvatar : _.template('<img src="<%= avatar %>" />'),
				autocompleteListItemIcon   : _.template('<div class="icon <%= icon %>"></div>'),
				mentionsOverlay            : _.template('<div class="mentions"><div></div></div>'),
				mentionItemSyntax          : _.template('<%= value %>'),
				mentionItemHighlight       : _.template('<strong><span><%= value %></span></strong>')
			},
	    	onDataRequest:function (mode, query, callback) {
				
				var limit = 10;
				var query = query;
				var type = 'users';
				var url = _this.ENV.Server.SEARCH_SERVER_HOST + '/search/' + type + '?query=' + query+ "&limit=" + limit;
				var promise = Ember.$.ajax({
					url:         url,
					type:        'GET',
					dataType:    'json',
					contentType: 'application/x-www-form-urlencoded',
					headers: {
						Authorization: 'Bearer ' + _this.ENV.Server.CLIENT_TOKEN
					},
				});
				promise.then(function(results){
					
					if( Ember.isEmpty(results)){return;}

					var data = results.data;

		      		data = _.filter(data, 
		      			function(item) { 

		      				//Image:
		       				var image;
		       				if( item.facebook_user_id ) {
		       					image = "https://graph.facebook.com/" + item.facebook_user_id + "/picture?width=20";
		       				}else if( item.image_id) {
		       					image = "http://static.haul.io/images/local/"+item.image_id+"/thumb";
		       				}
		       				item.icon = image;
		       				item.avatar = image;
	 						
	 						item.name = "@" + item.username;

		      				return item;
		      			}
		      		);

					callback.call(this, data);
				});
	      		
	    	}
	  	});		
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
 
	saveModel: function() {

		//this.reset();

		//Intercept if user is anonymous:
		if( !this.get('currentUserId')){
			this.sendAction('openModal', 'loginmodal', {});
			return;
		}


		var _this = this; 
		var store = this.container.lookup('store:main');
		var model = this.get('model');

		//Get the comment text from the .data() method that the 
		//jquery mentions script uses.

		var data = this.get('comment_box').data();

		model.set('comment', data.messageText);
		
		model.set('user_id', this.get('currentUserId'));
		
		model.set('object_id', this.get('objectId'));
		
		model.set('object_type', this.get('objectType'));

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

				_this.get('comment_box').mentionsInput('reset');

				_this.set('showSubmitCommentButton', false);
				
			},
			function(error){ 
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
