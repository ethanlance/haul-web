import Ember from 'ember';
export default Ember.View.extend({

	templateName: 'seller/product/post',

    willAnimateIn : function () { 
        this.$().addClass('view-slide');
        this.$().css({'position':'absolute', 'width':'100%', 'left':'1000px'});
    },

    animateIn : function (done) { 
        console.log("SLIDE POST IN"); 
        var _this = this;
        
        Ember.run.next(function(){
            _this.$().css({ left: '0' });

        
            Ember.run.later(done, 500);
        })
    },

    animateOut : function (done) {
        var _this = this;

        Ember.run.next(function(){
            console.log("SLIDE POST OUT");     
             _this.$().css({ left: '1000px' });
            Ember.run.later(done, 500);     
        });
        
        
        // Ember.run.later(function(){
        //     console.log("-- done post out");
        //     done();
        // }, 500);
    }
});