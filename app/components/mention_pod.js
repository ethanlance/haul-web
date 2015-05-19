import Ember from 'ember';
import config from '../config/environment';

import PaginateMixin from '../mixins/paginate';
export default Ember.Component.extend( PaginateMixin,{

    currentUserIdBinding: "session.currentUser.id",
    
    needsSellerAccount: false,

    storeName: 'user-mentions-list',  
    
    limit:5,

    hasMoreBinding: 'paginateHasMore',

    commentsSorting: ['created_at:desc'],
    
    sortedComments: Ember.computed.sort('pagedContent', 'commentsSorting'),

    pollInterval: 3000,

    resize: function() {
        var height = window.outerHeight;
        var h = height - 150;
        $('.message-center').css("height", h);   
    },

    
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



    doesUserNeedSellerAccount: function() {
        var _this = this;
        var store = this.container.lookup("store:main");

        var userId = this.get('currentUserId');

        store.find('seller', userId).then(
            function success(record){

                //Seller exists.
                //do nothing.
                if(Ember.isEmpty(record)  ||  record.get('isDirty') ) {
                    _this.set('needsSellerAccount', true);
                }

            },
            function failure(error){
                
                //Seller does not exist.
                _this.set('needsSellerAccount', true);
                

            }   
        );
    },

    getMentions: function() {
        
        var _this = this;
        
        var store = this.container.lookup('store:main'); 
        
        var storeName = this.get('storeName');

        var filter = store.find(storeName, {
            user_id: this.get('currentUserId'), 
            limit:this.get('limit')
        })
        .then(function(){
            return store.filter(storeName, function(result){
                return result;
            });
        });

        filter.then(function(results){
            _this.set('pagedContent', results.get('content').splice(0, _this.get('limit'))); 
        });
    },


    didInsertElement: function() {
        if(!this.get('currentUserId')){ return; }

        //Check if user has a seller account.
        //this.doesUserNeedSellerAccount();
                
        //Get last X mentions.
        this.getMentions();

        this.startPoll();

        this.resize();

        //RESIZE:
        var _this = this;
        $( window ).resize(function() {
            Ember.run.bind(_this, _this.resize());
        });
   
    }.observes('currentUserId'),

});
