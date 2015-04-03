import Ember from 'ember';
export default Ember.Component.extend({
	tagName: 'span',
	classNames: 'badge pull-right',
	totalBinding: 'session.currentUser.getUnreadMentionsCount.total',

	schedulePoll: function(f) {
    	var _this = this;
    	return Ember.run.later(this, function(){
    		f.apply(this);
    	}, _this.ENV.pollingTime.mention_count );
    },

    onPoll: function() {
    	var _this = this;
    	var store = this.container.lookup('store:main');
    	store.find('user-mentions-unread-count', this.get('session.currentUser.id'))
    	.then(function(model) { 
    		return model.reload();
		})
    	.then(function(record){
            _this.set('total', record.get('total'));                
    		_this.set('runPoll', _this.schedulePoll(_this.get('onPoll')));
    	});
    },

    stopPoll: function() {
    	Ember.run.cancel(this.get('runPoll'));
    },

    startPoll: function() {
    	this.set('runPoll', this.schedulePoll(this.get('onPoll')));
    },

    totalChanged: function() {
        console.log("TOTAL CHANGE");
        this.flash();
    }.observes('total'),

    flash: function() { 
    	$(this.get('element')).effect("highlight", {}, 1500);
    },

    willDestroyElement: function() {
    	this.stopPoll();
    },

    didInsertElement: function() {	
    	
    	this.startPoll();

    }
});


