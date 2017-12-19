import Ember from 'ember';
import PollingMixin from '../mixins/polling';
export default Ember.Component.extend( PollingMixin, {

	tagName: 'span',
	
    classNames: 'nav-link-badge',
	
    totalBinding: 'session.currentUser.getUnreadMentionsCount.total',

    pollIntervalBinding: 'this.ENV.pollingTime.comments', 

    currentUserIdBinding: 'session.currentUser.id',


    /**
        Fire it up.
    **/
    setup: function() {  
        
        this.startPoll();

    }.on('didInsertElement'),



    /**
        Poll.
    **/
    onPoll: function() {
    	var _this = this;
    	var store = this.container.lookup('store:main');
    	
        //Get and reload the count of unread mentions.
        store.find('user-mentions-unread-count', _this.get('currentUserId'))
    	.then(function(model) { 
    		return model.reload();
		})
    	.then(function(record){
            _this.set('total', record.get('total'));
            return;
    	})

        //Now get mentions for the current user.
        .then(function(){

            store.find('user-mentions-list', {user_id: _this.get('currentUserId')})
            .then(function() {

                _this.startPoll();


            });
        })

    },

 

    totalChanged: function() {

        this.flash();

    }.observes('total'),


    flash: function() { 

    	$(this.get('element')).effect("highlight", {}, 1500);

    }

});


