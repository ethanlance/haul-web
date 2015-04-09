import Ember from 'ember';
import config from '../config/environment';

import PaginateMixin from '../mixins/paginate';
export default Ember.Component.extend( PaginateMixin,{
    
    storeName: 'user-mentions-list',  
    limit:5,
    hasMoreBinding: 'paginateHasMore',

    isProcessing:false,

    anchorBinding: 'anchor',
    postIdBinding: 'post.post_id',
    userIdBinding: 'post.user_id',
    currentUserBinding: "session.currentUser",
    currentUserIdBinding: "session.currentUser.id",

    totalLikesBinding: "post.likesCount.total",
    totalCommentsBinding: "post.commentCount.total",
    showSubmitCommentButton: false,

    model:null,
    comments: null,
    comment_box:null,
    commentsSorting: ['created_at:desc'],
    sortedComments: Ember.computed.sort('pagedContent', 'commentsSorting'),

    pollInterval: 3000,

    
    schedulePoll: function(f) {
        var _this = this;
        return Ember.run.later(this, function(){
            f.apply(this);
        }, _this.ENV.pollingTime.comments );
    },

    onPoll: function() {
        var _this = this;
        var store = this.container.lookup('store:main');
        store.find(_this.get('storeName'), {user_id: this.get('session.user_id')})
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

        var _this = this;
        
        //this.startPoll();
        
        var store = this.container.lookup('store:main'); 
        var storeName = this.get('storeName');

        var filter = store.find(storeName, {user_id: this.get('session.user_id'), limit:this.get('limit')} )
        .then(function(){
            return store.filter(storeName, function(result){
                return result;
            });
        });

        filter.then(function(results){
            _this.set('pagedContent', results); 
        });
    },

});
