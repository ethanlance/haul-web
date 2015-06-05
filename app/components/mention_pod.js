import Ember from 'ember';
import config from '../config/environment';

import PaginateMixin from '../mixins/paginate';
export default Ember.Component.extend( PaginateMixin, {

    currentUserIdBinding: "session.currentUser.id",
    
    needsSellerAccount: false,

    storeName: 'user-mentions-list',  
    
    limit: 5,

    hasMoreBinding: 'paginateHasMore',

    commentsSorting: ['created_at:desc'],
    
    sortedResults: Ember.computed.sort('pagedContent', 'commentsSorting'),

    sortedLimitedResults: function() {
        
        return this.get('sortedResults').slice(0, this.get('limit'));

    }.property('sortedResults.[]'),


    /**
        Start it up!
    **/
    setup: function() {
        if(!this.get('currentUserId')){ return; }

        //Check if user has a seller account.
        //this.doesUserNeedSellerAccount();
                
        this.startFilter();
 
   
    }.on('didInsertElement').observes('currentUserId'),


 








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




    /**
        Start up the filter which automatically updates.
    **/
    startFilter: function() {
        
        var _this = this;
        
        var store = this.container.lookup('store:main'); 
        
        var storeName = this.get('storeName');

        store.find(_this.get('storeName'), {user_id: this.get('currentUserId')})

        var filter = store.filter(storeName, function(result){
            if( !result.get('read') ){
                return result;
            }
        });
         
        _this.set('pagedContent', filter);  
    },





    markMentionAsRead: function(mention) {
        var _this = this;
        var user_id = this.get('currentUserId');
        var access_token = this.get('session.access_token');
        var comment_id = mention.get('id');

        Ember.$.ajax({
            url: _this.ENV.Server.COMMENT_SERVER_HOST  + '/users/'+user_id+'/comments/'+comment_id+'/read',
            type: 'PUT',
            headers: {
                Authorization: 'Bearer ' + access_token
            },
            dataType: 'json'
        })
        .then(
            function success(){
                
                var store = _this.container.lookup('store:main'); 

                store.find('user-mentions-count', user_id)
                .then(function(r){
                    r.reload();
                });

                store.find('user-mentions-unread-count', user_id)
                .then(function(r){
                    r.reload();
                });

                mention.set('read', true);

            },

            function failure(error){
                console.log("ERROR", error);
            }
        );
    },





    redirectToPost: function(mention) {
        var _this = this;
        //Start by finding out who this is is from:
        mention.get('user')
        .then(function(user){

            _this.set('fromUsername', user.get('username'));
            
            //Find info about the post.
            return mention.get('subject');
        })

        .then(function(post){
            
            var post_username = post.get('user.username'); 
            var username_who_made_comment = _this.get('fromUsername');

            _this.sendAction('goToRoute', 'profile.post', post_username, post, {
                queryParams: {anchor: "comments", reply: username_who_made_comment}
            }); 

        });
    },


    redirectToUser: function(mention) {
        var _this = this;
        
        //Start by finding out who this is is from:
        var subject_id = mention.get('subject_id');

        var userIds = subject_id.split("_");
        var fromUserId;

        if( this.get('currentUserId') !== userIds[0]) {
            fromUserId = userIds[0];
        }else{
            fromUserId = userIds[1];
        }

        var store = this.container.lookup('store:main');
        store.find('user', fromUserId)
        .then(function(user){

            _this.set('fromUsername', user.get('username'));
            
            return;
        })

        .then(function(post){ 
            _this.sendAction('goToRoute', 'profile.dm', _this.get('fromUsername') );              
        });
    },


    redirectToTransaction: function(mention) {
        var _this = this;
        _this.sendAction('goToRoute', 'settings.sales', mention.get('subject_id') );              
    },

    redirectToMessage: function(mention) {

        var objectType = mention.get('subject_type');


        //Find out what type of message this is:
        //ie posts, transactions, users
        if( objectType === "posts" ){

            this.redirectToPost( mention );

        }else if( objectType === "users") {

            this.redirectToUser( mention );

        }else if( objectType === "transactions") {

            this.redirectToTransaction( mention );

        }

        this.markMentionAsRead(mention);

    },

    actions: {

        doReply: function(mention) {
            this.redirectToMessage(mention);
        },
    }

});
