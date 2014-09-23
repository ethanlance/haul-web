/*global Products, Ember */
(function () {
    'use strict';
    //Views
    Haul.ProductsView = Ember.View.extend({
        didInsertElement: function() {
            Ember.run.next(function() {
                Holder.run(); //For DEV. Images
            })
         }
    });

    Haul.ProductView = Ember.View.extend({
        didInsertElement: function() {
            Ember.run.next(function() {
                Holder.run(); //For DEV. Images
            })
         }
    });

})();