import Ember from 'ember';
var $ = Ember.$;
import Haul from "../app";

export default Ember.Component.extend({

	product:null,
	collection_id:null,
	productImage: null,
	productImageBinding: "product.first_image.small", 
	userCollectionsBinding: "session.currentUser.getCollections",
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
		}, function(){
			_this.set('isCollectionPicked', true);
		});
	}.observes('selectedCollection'),

	selectedCollectionIdChanged: function(){
	 	var _this = this;
	 	var collection_id = this.get('selectedCollectionId');
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
			function() { 
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
			
			var model = this.get('model');

			model.set('collection', this.get('selectedCollection.collection'));
 
	 		//Model Validations:
			model.validate().then(function(){
				_this.saveModel();	//Validation complete, now save.
			}, function(error) {
				_this.set('isProcessing', false);

				if( error.collection.length > 0 ) {
					_this.set('errorMessage', "Oops, please pick a collection.");
					_this.set('errorShow', true);
				}
				
			}); 
		},

		selectedCollectionId: function(collection_id) {
			this.set('selectedCollectionId', collection_id);
		},

		showCreateCollection: function() {

			this.set('isShowCreateCollection', true);
		}
	}, 
});