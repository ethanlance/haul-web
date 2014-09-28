/*global Products, Ember */
(function () {
    'use strict';


    Haul.BaseView = Ember.View.extend();

    Haul.ProductsView = Haul.BaseView.extend({
        
        didInsertElement: function() {
            Ember.run.next(function() {
                Holder.run(); //For DEV. Images
            })
         }
    });

    //Views
    Haul.ProductsIndexView = Ember.View.extend({
        didInsertElement: function() {
            Ember.run.next(function() {
                Holder.run(); //For DEV. Images
            })
         }
    });

    Haul.ProductsProductView = Ember.View.extend({
        didInsertElement: function() {
            Ember.run.next(function() {
                Holder.run(); //For DEV. Images
            })
         }
    }); 

    
})();
