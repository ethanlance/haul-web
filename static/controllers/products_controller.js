/*global Products, Ember */
(function () {
	'use strict'; 
	Haul.ApplicationController = Ember.ObjectController.extend({
		needs: ["auth"],  
		currentUser: Ember.computed.alias('controllers.auth.currentUser')
	}); 

	Haul.ProductsController = Ember.ObjectController.extend({
		needs: ["auth"],  
		currentUser: Ember.computed.alias('controllers.auth.currentUser')
	}); 
	

	//SHOW all user's products
	Haul.ProductsIndexController = Ember.ObjectController.extend({
		needs: ["auth"], 
		currentUser: Ember.computed.alias('controllers.auth.currentUser'),

		//Is currentUser viewing his own page?
		isProfileOwner: false,
		isProfileOwnerChanged: function() {
			if( this.get('id') === this.get('currentUser').id) {
				this.set('isProfileOwner', true);
			}
		}.observes('model'),

		productCount: function() {
			return this.get('model.products').get('length');            
		}.property('products'),  
		
	});  


	//SHOW one product
	Haul.ProductIndexController = Ember.ObjectController.extend({ 
		needs: ["auth"], 
		currentUser: Ember.computed.alias('controllers.auth.currentUser'),

		//Is currentUser viewing his own page?
		imagez: false,
		isProfileOwner: false,
		
		setup: function() {
			
			if( this.get('user').id === this.get('currentUser').id) {
				this.set('isProfileOwner', true);
			}
			
			//Reload the model 
			var model = this.get('model');
			var _this = this;
			model.reload().then(function(product){
				_this.set('imagez', product.get('images'))
			});
			
		}.observes('model'),

		commentCount: function() {
			return this.get('model.comments').get('length');
		}.property('comments')
	});


	//EDIT or CREATE product.
	Haul.ProductEditController = Ember.ArrayController.extend({
		
		//Auth Controller
		needs: ["auth"],
		currentUser: Ember.computed.alias('controllers.auth.currentUser'),

		//This array controller sorts it's images
		sortProperties: ['created_at'],
		sortAscending: false,

		//Properties for UI display state
		showImagePicker: false,
		imagesAreSelected: false,
		productExists: false,
		dataComplete: false, //True when images, title, and description are filled out.

		//Product
		product: null,

		//This product's image objects.
		selectedImages: [],

		//This product's image_ids 
		image_ids:[],

		//This product's meta properties.
		id: null,
		name: null,
		description: null,
		quantity: null,
		price: null,


		//Blow away all property values
		reset: function(){ 
			this.set('showImagePicker',true);
			this.set('imagesAreSelected',false);
			this.set('productExists',false);
			this.set('dataComplete',false);
			this.set('product',null);
			this.set('id',null);
			this.set('name',null);
			this.set('description',null);
			this.set('quantity',null);
			this.set('price',null);
			this.set('selectedImages',[]);
			this.set('productPromise', null);
		},

		// Observer: When editing a product we start with a productPromise.
		// When creating a new product there is no productPromise.
		productChanged: function() {

			var _this =this;
			if( this.productPromise ){
				this.productPromise.then(function(product) {

					_this.set('productExists', true);
					_this.set('showImagePicker', false);

					_this.product = product;
					_this.id = product.get('id');
					_this.name = product.get('name');
					_this.description = product.get('description');
					_this.quantity = product.get('quantity');
					_this.price = product.get('price');

					//What images does this product have?
					var images = product.get('images').then(function(images){
						images.map(function(image){ 
							_this.selectedImages.pushObject(image); 
							return image
						});
					}).then(function(){
						//Now let's tell the all user images array which images
						//the product has.
						_this.forEach(function(img) {
							_this.selectedImages.forEach(function(simg){
								//Set this image isSelected.
								if(simg.get('id') === img.get('id')) {
									console.log("BOOOOM", _this.selectedImages)
									img.set('isSelected', true);
								}
							});
						});
					});
				});
			}else{
				_this.set('productExists', false);
			}
		}.observes('productPromise'),


		//Observer: anytime our array of selected images changes, update
		// our list of image_ids.
		imagesIdsChanged: function() {
			var ids = this.get('selectedImages').map(function(image) {
				return image.get('id');
			});
			this.set('image_ids', ids);
		}.observes('selectedImages.@each'),


		//Observes: When selectedImages changes, do things.
		selectedImagesChange: function() {
			
			var selectedImages = this.get('selectedImages');
			//Highlight the image:
			if( selectedImages.length == 0 ) {
				this.set('imagesAreSelected', false);
			}else{
				this.set('imagesAreSelected', true);
			}

		}.observes('selectedImages.@each'),


		//Observes: Did the form data change?  
		//Final validation happens here.
		formChanged: function(){
			if( this.name !== null ){
				this.set('dataComplete', true);
			}else{
				this.set('dataComplete', false);
			}
		}.observes('name', 'description', 'price', 'quantity'),


		//Preserves the drag sort order of the images.
		updateSortOrder: function(indexes) { 
			var selectedImages = this.get('selectedImages');
		    selectedImages.beginPropertyChanges();
		    selectedImages.forEach(function(item) {
		      var index = indexes[item.get('id')];
		      item.set('idx', index);
		    }, selectedImages);
		    selectedImages = selectedImages.sortBy('idx')
		    selectedImages.endPropertyChanges();
		    this.set('selectedImages', selectedImages);
		    this.formChanged();
		},

		//UI ACTIONS
		actions: { 

			//Click "create" in UI
			create: function() {
				var _this = this;
				var data = {
					name: this.get('name'),
                    description: this.get('description'),
                    currency: "usd",
                    price: this.get('price'),
                    image_ids: this.get('image_ids'),
                    quantity: this.get('quantity')
				}

				//create & save
				var product = this.store.createRecord('product', data);
				
				product.save().then(
					function(result) { 
						_this.transitionToRoute('product', result.get('id'));
					},
					function(error){
						console.log("Error" , error);
					}
				);
			},

			//Click "save" in UI
			save: function() {
				var _this = this;
				var data = this.getProperties('id', 'name', 'description', 'quantity', 'price', 'image_ids');
				var product = this.store.update('product', data);

				product.save().then(
					function(result) { 
						console.log(product)
						_this.transitionToRoute('product', product);
					},
					function(error){
						console.log("Error" , error);
					}
				);
			},

			//Click "delete" in UI
			delete: function() {
				$('#deleteModal').modal('show');
			},

			deleteCancel: function() {
				$('#deleteModal').modal('hide');
			},

			deleteProceed: function() {
				$('#deleteModal').modal('hide');
				var _this = this;
				var user = this.get('controllers.auth').get('currentUser');
				var product = this.get('product');
				product.deleteRecord();
				
				product.save().then(
					function(result) { 
						_this.transitionToRoute('products', user.slug);
					},
					function(error){
						console.log("Error" , error);
					}
				);
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

			//Image Picker Component has deleted/destroyed this image.
			//Update our selectedImages.
			//Should an observer do this?
			imageDeleted: function(image) {
				var image = false;
				var image_id = image.get('id');
				var selectedImages = this.get('selectedImages'); 

				selectedImages.forEach(function(result){
					if(result.get('id') === image_id){
						image = result;
					}
				});	
				
				if( image ) {
					selectedImages.splice($.inArray(image, selectedImages),1); // remove image
					selectedImages.splice(0,0,image); // add image to top of array
					selectedImages.shiftObject(); // use ember's KVO shiftObject to remove image from top.
				}
			},
		
			//Click "imageClick" in UI
			imageClick: function(event) {
				var image = event.get('image');
				var selectedImages = this.get('selectedImages'); 
				var found = false;

				selectedImages.forEach(function(result){
					if(result.get('id') === image.get('id')){
						found = true;
						return;
					}
				});

				//Only allow 5 images.
				if( selectedImages.length == 5 && !found ) {

					//Show our modal.
					$('#imagePickerModal').modal('show');
					return;
				
				//Remove
				}else if( found ) { 
					selectedImages.splice($.inArray(image, selectedImages),1); // remove image
					selectedImages.splice(0,0,image); // add image to top of array
					selectedImages.shiftObject(); // use ember's KVO shiftObject to remove image from top.
					event.set('isSelected',false); 
				//Add
				}else{
					selectedImages.pushObject(image);
					event.set('isSelected',true);
					console.log("add",image, selectedImages);
				}

				this.formChanged();
				
			},

			clickNext: function() {
				this.set('showImagePicker', false);
			},

			clickPrev: function() {
				this.set('showImagePicker', true);
			}
		}
	});
})();