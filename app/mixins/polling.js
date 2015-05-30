import Ember from 'ember';
export default Ember.Mixin.create({

    schedulePoll: function(func) {
        var _this = this;
        var intTime = _this.get('pollInterval');

        
        //Safety:
        if( !intTime || intTime < 10000){
            intTime = 10000;
        }

        //Run our scheduled function later.
        return Ember.run.later(this, function(){
            func.apply(this);
        }, intTime );
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


});