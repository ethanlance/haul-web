/*global Products, Ember */
(function () {
    'use strict';


    Haul.BaseView = Ember.View.extend({layoutName:'layouts/layout_base'})

    //Views
    Haul.ProductsView = Haul.BaseView.extend({ 
        didInsertElement: function() {
            Ember.run.next(function() {
                Holder.run(); //For DEV. Images
            })
         }
    });

    Haul.ProductView = Haul.BaseView.extend({
        didInsertElement: function() {
            Ember.run.next(function() {
                Holder.run(); //For DEV. Images
            })
         }
    }); 
})();