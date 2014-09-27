/*global Products, Ember */
(function () {
    'use strict';


    Haul.BaseView = Ember.View.extend({layoutName:'layouts/layout_base'});

    Haul.ProductsView = Haul.BaseView.extend({
        templateName: "products/products",
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