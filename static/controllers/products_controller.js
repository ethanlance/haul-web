/*global Products, Ember */
(function () {
    'use strict'; 

    Haul.ApplicationController = Ember.ArrayController.extend({
        needs: ["auth"],
    }); 

    Haul.ProductsController = Ember.ObjectController.extend({
        needs: ["auth"],
           
    }); 
    

    Haul.ProductsIndexController = Ember.ObjectController.extend({
        needs: ["auth"],

        productCount: function() {
            return this.get('model.products').get('length');            
        }.property('products'),        

        
    });     


    Haul.ProductController = Ember.ObjectController.extend({ 
        needs: ["auth"], 

        commentCount: function() {
            return this.get('model.comments').get('length');
        }.property('comments'),
        
    	actions: {

            likeProduct: function () {
                console.log("LIKE PRODUCT")
            },

            shareProduct: function () {
                console.log("SHARE PRODUCT")
            },


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

    Haul.ProductCommentsController = Ember.ArrayController.extend({
        needs: ["product"]
    });


    Haul.ProductsNewController = Ember.ObjectController.extend({
        needs: ["auth"],
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