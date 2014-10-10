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


	Haul.ProductsNewController = Ember.ArrayController.extend({
		needs: ["auth"],

		sortProperties: ['created_at'],
		sortAscending: false,

		imagesSelected: false,
		imagesSelectedCount: 0,
		imagesList: [],

		actions: { 

			nextStep: function() {
				console.log("next step ", this);
			},
 			
 			//Image has been uploaded.
 			//Push it into the store.
 			//The images computed property in this controller will update the view.
			refresh: function(response) {
				var authController = this.get('controllers.auth'); 
				var user_id  = authController.get('currentUser').id;
				var store = this.store; 
				var _this = this;

				response.data.forEach( function(image){ 
					var record = store.push('image', {
						original: image.locations.original,
						small: image.locations.small,
						thumb: image.locations.thumb,
						caption: image.caption,
						locations: image.locations,
						user_id: user_id,
						id: image.image_id,
						created_at: image.created_at
					});
					_this.unshiftObject(record);
				});				
			},
		

			imageClick: function(event) {
				var image = event.get('image');
				var imagesList = this.get('imagesList');
				
				//If image is in imagesList, then remove it.
				var id = image.get('id');
				var result = $.grep(imagesList, function(e){ return e.id == id; });
				
				//Only allow 5 images.
				if( imagesList.length == 5 && result.length == 0 ) {
					return;
				
				//Add
				}else if( result.length == 0 ) {
					imagesList.push(image);

				//Remove
				}else{
					imagesList.splice($.inArray(image, imagesList),1);
				}

				//Toggle UI
				event.toggleProperty('isSelected',true);

				//Update imageList count.
				this.set('imagesSelectedCount', imagesList.length);
				
				//Highlight the image:
				if( imagesList.length == 0 ) {
					this.set('imagesSelected', false);
				}else{
					this.set('imagesSelected', true);
				}

				console.log('images, ' , imagesList);
			},

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