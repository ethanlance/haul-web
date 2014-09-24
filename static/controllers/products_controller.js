/*global Products, Ember */
(function () {
    'use strict';

    Haul.ProductController = Ember.ObjectController.extend({
    	actions: {
    		saveProduct: function() {
    			console.log("SAVE THIS PRODUCT");
    		},

    		deleteProduct: function(){
            	console.log("DELETE THIS");	
            	var product = this.get('model');

    			product.deleteRecord();
    			product.save();

            	//Goto
            	this.transitionToRoute('products');
            }
    	}
    });


    Haul.ProductcreateController = Ember.ObjectController.extend({
        actions: {
            createProduct: function(){
            	
            	var title, product;
    			title = this.get('newProduct').trim();
    			if(!title) return;	

    			//create & save
            	var product = this.store.createRecord('products', {title:title});
            	product.save();

            	//Goto
            	this.transitionToRoute('product', product);
            }
        }
    });
})();