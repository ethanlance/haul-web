import Ember from 'ember';
export default Ember.ObjectController.extend({
 
 	needs: ['profile'],

 	thisPage: "postEdit",
 	
 	currentPageBinding: Ember.computed.alias('controllers.profile.currentPage'),
 	showHeaderChange: function(){  
 		if( this.get('currentPage') === this.get('thisPage')){
 			this.get('controllers.profile').set('showHeader', false);	
 		} 		
 	}.observes('currentPage'),
	
	productImagesBinding: "model.product_images",
	product_status_options: null,
	currentUserBinding: 'Haul.currentUser',
	isProcessing: false,
	imagesAreSelected: false,
	showImageModal: false,

	productImageIds: [],
	selectedImages: [],
	editorialForQuill: "",
	canEditProduct: false,

	start: function() {
		
		var for_sale 		= {name: "for sale", id: 'FOR_SALE'};
		var sale 			= {name: "sold",    id: 'SOLD'};
		var not_for_sale 	= {name: "no longer for sale",    id: 'NOT_FOR_SALE'};
		var product_status_options = Ember.ArrayController.create({
		  selectedStatus: for_sale,
		  status: [for_sale, sale, not_for_sale],
		}); 
		this.set('product_status_options', product_status_options); 

	}.on('init'),

	setup: function() {
		this.set('canEditProduct', false);
		if(Ember.isEmpty(this.get('model')) || Ember.isEmpty(this.get('currentUser')) ){
			return
		} 

		if( this.get('model').get('product_user').get('id') === this.get('currentUser').get('id') ){
			this.set('canEditProduct', true);
		}

	}.observes('model', 'currentUser'),

	setUpQuill: function() {
		if( this.get('model').get('body') ){
			this.set('editorialForQuill', this.get('model').get('body'));
		}
	}.observes('model'),


	/* Get and set the products images. */
	setSelectedImages: function() {
		if( Ember.isEmpty(this.get('productImages')) ){
			this.set('selectedImages', []);
			return;
		}

		var obj = [];
		this.get('productImages').forEach(function(image){
			obj.push(image);
		});
		this.set('selectedImages', obj);

	}.observes('productImages.@each', 'model'),


	//Observer: anytime our array of selected images changes, update
	// our list of image_ids.
	imagesIdsChanged: function() {
		var ids = this.get('selectedImages').map(function(image) {
			return image.get('id');
		});
		this.set('productImageIds', ids); 

		//Highlight the image:
		if( this.get('productImageIds').length === 0 ) {
			this.set('imagesAreSelected', false);
		}else{
			this.set('imagesAreSelected', true);
		}
 
		//Set the images on the model.
		var model = this.get('model');
		model.set('product_image_ids', this.get('productImageIds')); 
		model.set('image_id', this.get('productImageIds')[0]); 

	}.observes('selectedImages.@each'),

	//Preserves the drag sort order of the images.
	updateSortOrder: function(indexes) { 
		var selectedImages = this.get('selectedImages');
	    selectedImages.beginPropertyChanges();

	    selectedImages.forEach(function(item) {
	      var index = indexes[item.get('id')];
	      item.set('idx', index);
	    }, selectedImages);
	    selectedImages = selectedImages.sortBy('idx');
	    
	    selectedImages.endPropertyChanges();
	    this.set('selectedImages', selectedImages);
	},


	selectImage: function(image) {
		var selectedImages = this.get('selectedImages'); 
		var found = false;

		selectedImages.forEach(function(result){
			if(result.get('id') === image.get('id')){
				found = true;
				return;
			}
		});

		if( found ) { 
			var objects = [];
			selectedImages.forEach(function(result){
				if( result.get('id') !== image.get('id')){
					objects.push(result);
				}
			});
			this.set('selectedImages', objects);
		//Add
		} else {
			selectedImages.pushObject(image);
		}
	},

	savePost: function() {
		var _this = this;		
		var model = this.get('model');

		//Trim
		var body = model.get('body').trim();
		if(Ember.isEmpty(body)){
			body = " ";
		}
		model.set('body', body);

 		//Model Validations:
		model.validate()
		.then(function(){
			_this.set('isProcessing', true);
			return model.save();
		})
		.then(function(record){
			_this.set('isProcessing', false);
			var user = _this.get('currentUser'); 
			_this.transitionToRoute('profile.post', user, record.get('post_id'), record.get('post_slug'));
		}, function(error){
			console.log("Error", error);
			_this.set('isProcessing', false);
			_this.set('showErrors', true);
		});
	},



	actions: {

		cancel: function() {
			var model = this.get('model');
			if( model.get('id')){
				this.transitionToRoute('profile.post', model.get('user'), model);
			}else{
				this.transitionToRoute('profile', model.get('user'));
			}
		},

		savePost: function() { 
			this.savePost();
		},

		//Click "imageClick" in UI
		imageClick: function(event) {
			var image = event.get('image');
			this.selectImage(image);
		},

		refresh: function(image) {
			this.selectImage(image);			
		},

		quillChange: function(text) {
			var model = this.get('model');
			model.set('body', text);
		},

		showImageModal: function(){
			this.set('showImageModal', true);
		},

		closeImageModal: function(){
			this.set('showImageModal', false);
		}, 
	}
});