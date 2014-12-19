Haul.CollectionBtnComponent = Ember.Component.extend({

	product:null,
	collection_id:null,
	productImage: null,
	productImageBind: "product.first_image.small", 
	userCollectionsBinding: "currentUser.user.collections",
	showForm:true,
	isShowCreateCollection:false, 

	selectedCollection: null,
 	selectedCollectionId: null,
	editorialForQuill: '',
	isCollectionPicked: false,

	//Is this product already in this collection? If so get the editorial.
	selectedCollectionChanged: function() {	
		var _this = this;
		var store = this.get('targetObject.store');
		var key = this.get('selectedCollection').get('collection').get('id') + "-" + this.get('product').get('id');
		var collection_product = store.find('collection-product', key);
		collection_product.then(function(cp) {
			console.log(cp.get('editorial'));
			_this.set('editorialForQuill', cp.get('editorial'));
			_this.set('isCollectionPicked', true);
		}, function(error){
			_this.set('isCollectionPicked', true);
		});
	}.observes('selectedCollection'),

	selectedCollectionIdChanged: function(){
	 	var _this = this;
	 	collection_id = this.get('selectedCollectionId')
	 	this.get('userCollections').forEach(function(uc){
	 		if( uc.get('collection_id') === collection_id){ 
	 			_this.set('selectedCollection', uc); 
	 		}
	 	});	
	 }.observes('selectedCollectionId', 'userCollections.@each'),
 
 
	start: function() {
		//PRODUCT IMAGE		
		//this.set('productImage', this.product.get('image').get('small'));
		this.makeModel();

	}.on('init'), 

	reset: function() {
		this.set('showForm', true);
		this.set('showSuccessMessage', false); 
	},

	makeModel: function() {
		var store = this.get('targetObject.store');
		var _this = this;
		var model = store.createRecord('collection-product');

		model.set('product', this.get('product'));
		model.set('collection_id', null);

		this.set('model', model);
	},	

	saveModel: function() {
		var model = this.get('model');
		var _this = this;

		var product_id = model.get('product').get('id');
		var collection_id = model.get('collection').get('id');

		model.set('id', product_id);
		model.save().then(
			function(result) { 
				_this.set('isProcessing', false);
				_this.set('showForm', false);
				_this.set('showSuccessMessage', true);

				//Also reload model "collection_product_list"
				var store = _this.get('targetObject.store'); 
				store.find('collection-product-list', {collection_id: collection_id});
			},
			function(error){
				_this.set('isProcessing', false);
				_this.set('errorShow', true);
				_this.set('errorMessage', Haul.errorMessages.get(error.status));
				console.log("Error" , error);
			}
		); 
	},


	actions: {

		quillChange: function(text) {
			var model = this.get('model');
			model.set('editorial', text);
		},

		curateCancel: function() {
			this.reset(); 
			$('#curateModal').modal('hide');
		},

		close: function() {
			this.reset(); 
			$('#curateModal').modal('hide');	
		},		

		openModal: function() {
			this.reset();
			$('#curateModal').modal('show'); 
		}, 

		//Submit action.  Initiate Validation.
		submit: function() { 

			this.set('isProcessing', true);

			var _this = this;
			var store = this.get('targetObject.store');
			var model = this.get('model');

			model.set('collection', this.get('selectedCollection.collection'));
 
	 		//Model Validations:
			model.validate().then(function(result){
				_this.saveModel();	//Validation complete, now save.
			}, function(error) {
				console.log("ERROR", error);
				_this.set('isProcessing', false);

				if( error.collection.length > 0 ) {
					_this.set('errorMessage', "Oops, please pick a collection.")
					_this.set('errorShow', true);
				}
				
			}); 
		},

		selectedCollectionId: function(collection_id) {
			console.log("WHAM!" , collection_id)
			this.set('selectedCollectionId', collection_id);
		},

		showCreateCollection: function() {
			console.log("SHOW")
			this.set('isShowCreateCollection', true);
		}
	}, 
});


// /**
// ProductToCollectionComponent 
// 	This component  allows a user to manage wether a specific product is 
// 	associated to the user's collectionplace.  The component adds a button to the page.

// 	You must pass this component:
// 	currentUser - this is the authenticated Local Storage user.
// 	product: this is one record of the product model, which will be added to a collection.

// **/
// Haul.CollectionBtnComponent = Ember.Component.extend({
	
// 	model: null,
// 	product: null,
// 	collection: null,
// 	currentUser: null,

// 	isProcessing: false,
// 	errorShow: false,
// 	errorMessage: null,

// 	showForm: true,
// 	showSuccessMessage: false, 
// 	showDeletedMessage: false, 

// 	editMode: false, 
// 	addMode: false, 
// 	createStoreMode: false,

// 	reset: function() {
// 		this.set('showForm', true);
// 		this.set('showSuccessMessage', false);
// 		this.set('showDeletedMessage', false);
// 	},
 
// 	setMode: function(mode) {
// 		this.set('editMode', false);
// 		this.set('addMode', false);
// 		this.set('createStoreMode', false);
// 		this.set(mode, true);
// 	},

// 	productImage: null,
// 	productModel: null,
// 	productImageGet: function() {

// 		if(Ember.isEmpty(this.get('productModel'))) {
// 			return;
// 		}

// 		var _this = this;
// 		var store = this.get('targetObject.store');
// 		var product = this.get('productModel');

// 		store.find('product', product.get('id'))
// 		.then(function(product){
// 			return product.get('images');
// 		})
// 		.then(function(images){
// 			_this.set('productImage', images.get('firstObject').get('small'));
// 		});
		
// 	}.observes('productModel'),


// 	fixToolBar: function() {
// 		$('#curateModal').on('hidden.bs.modal', function () {
// 	  		$('.toolbar').removeClass('toolbar-hide')
// 		});
// 	}.on('didInsertElement'),

// 	/**
// 		start: is the init function.
// 	**/
// 	start: function() {

// 		var _this = this;
// 		var store = this.get('targetObject.store');

// 		_this.set('showForm', true);
// 		_this.set('showSuccessMessage', false);

// 		//Create placeholder model.
// 		var model = store.createRecord('collection-product');

// 		//Product was supplied to component, set it on the model.
// 		model.set('product', this.get('product'));

// 		//Set productModel, to kick off observer that get's product image.
// 		this.set('productModel', this.get('product'));

// 		//Persist our model.
// 		this.set('model', model);

// 		//Now go find out if this user has a collection.
// 		this.findCollections();
		

// 	}.on('init'),

// 	findCollections: function() { 
// 		var _this = this;
// 		var store = this.get('targetObject.store');
// 		var model = this.get('model');

// 		//Does this user have this product in their store?
// 		this.get('currentUser')
// 		.get('user').get('collections') 
// 		.then(function(collections) {

// 			//SET MARKET ON MODEL
// 			model.set('collections', collections); 
			
// 			//Now get all the products in this collection.
// 			var product_list = store.find('collection-product-list', {collection_id: collection.get('id')});

// 			//Pass this promise on to next method.
// 			_this.findProducts( product_list );

// 		}, function(error) {

// 			//IF user does not have a collection, then we need to abort and display a message
// 			//about how to create a collection first.
// 			console.log("USER DOES NOT HAVE MARKET");
// 			console.log("ERROR", error);
// 			_this.setMode('createStoreMode');
// 		});
// 	},

// 	findProducts: function(promise) {
// 		var _this = this;
// 		var product_id = this.get('product').get('id');

// 		//IF we find our product in the list of products
// 		//then we know this user already has this product in 
// 		//her collection.  If that is the case then we get that product-collection model
// 		//and this becomes an EDIT not an ADD.
// 		promise.then(function(products) { 
// 			if(Ember.isEmpty(products)) {
// 				_this.setMode('addMode');
// 				return;
// 			}else{ 
// 				var found = false;
// 				products.forEach(function(product){
// 					if( product.get('product').id === product_id ){ 

// 						//Product has a match in product list.  This is an "EDIT"
// 						_this.set('productModel', product.get('product'));
// 						_this.findModel(); 
// 						found = true;
// 						return;
// 					}
// 				});

// 				//Product has no match in product list.  This is an "ADD"
// 				if(!found)
// 					_this.setMode('addMode');
// 				return; 
// 			} 
// 		}, function(error) {
// 			console.log("ERROR", error);
// 		});

// 	},

// 	findModel: function() {
// 		var _this = this;
// 		var store = this.get('targetObject.store');
// 		var model = this.get('model');

// 		var collection_id = model.get('collection').id;
// 		var product_id = model.get('product').id;
// 		var data = {'collection_id':collection_id, 'product_id':product_id};
		
// 		//Get the collection-product record.  
// 		//We will assign it to model.
// 		//This model will be edited by user.
// 		store.find('collection-product', data)
// 		.then(function(results){
// 			return results.get('content');
// 		})
// 		.then(function(content){
// 			_this.set('model', content.get('firstObject'));
// 			_this.setMode('editMode');
// 		}, function(error){
// 			console.log("ERROR", error);
// 		});
// 	},


// 	//Client Validation is complete.  Now persist to api.
// 	saveModel: function() {
// 		var model = this.get('model');
// 		var _this = this;

// 		var product_id = model.get('product').get('id');
// 		var collection_id = model.get('collection').get('id');

// 		model.set('id', product_id);
// 		model.save().then(
// 			function(result) { 
// 				_this.set('isProcessing', false);
// 				_this.set('showForm', false);
// 				_this.set('showSuccessMessage', true);

// 				//Also reload model "collection_product_list"
// 				var store = _this.get('targetObject.store'); 
// 				store.find('collection-product-list', {collection_id: collection_id});
// 			},
// 			function(error){
// 				_this.set('isProcessing', false);
// 				_this.set('errorShow', true);
// 				_this.set('errorMessage', Haul.errorMessages.get(error.status));
// 				console.log("Error" , error);
// 			}
// 		); 
// 	},


// 	deleteModel: function() {
// 		var model = this.get('model');
// 		var _this = this;

// 		var product_id = model.get('product').get('id');
// 		var collection_id = model.get('collection').get('id');
// 		var id = product_id	+ collection_id;
		 
// 		model.deleteRecord();
// 		model.save().then(
// 			function(result) { 
// 				_this.set('isProcessingDelete', false);
// 				_this.set('showForm', false);
// 				_this.set('showDeletedMessage', true);

// 				//Also delete this product from the model "collection_product_list".  Do not hit api
// 				var store = _this.get('targetObject.store');
// 				var mpl = store.getById('collection_product_list', id);
// 				if(mpl){
// 					 store.deleteRecord(mpl);
// 					 store.unloadRecord(mpl);
// 				}

// 			},
// 			function(error){
// 				_this.set('isProcessingDelete', false);
// 				_this.set('errorShow', true);
// 				_this.set('errorMessage', Haul.errorMessages.get(error.status));
// 				console.log("Error" , error);
// 			}
// 		); 
// 	},


// 	actions: {

// 		//Add Product to Collection
// 		curate: function() {
// 			this.reset();
// 			$('#curateModal').modal('show');
// 			$('.toolbar').addClass('toolbar-hide');
// 		},

// 		curateCancel: function() {
// 			this.reset();
// 			$('.toolbar').removeClass('toolbar-hide');
// 			$('#curateModal').modal('hide');
// 		},

// 		close: function() {
// 			this.reset();
// 			$('.toolbar').removeClass('toolbar-hide');
// 			$('#curateModal').modal('hide');	
// 		},

// 		//Submit action.  Initiate Validation.
// 		submit: function() { 

// 			this.set('isProcessing', true);

// 			var _this = this;
// 			var model = this.get('model');

// 	 		//Model Validations:
// 			model.validate().then(function(result){
// 				_this.saveModel();	//Validation complete, now save.
// 			}, function(error) {
// 				_this.set('isProcessing', false);
// 				_this.set('showErrors', true);
// 			}); 
// 		},

// 		//remove this product from Collection
// 		delete: function() {
// 			this.set('isProcessingDelete', true);
// 			var _this = this;
			
// 			this.deleteModel();
		
// 		},
// 	}
// });