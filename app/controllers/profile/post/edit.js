import Ember from 'ember';
export default Ember.ObjectController.extend({
 
 	needs: ['profile'],

 	thisPage: "postEdit",
 	currentPageBinding: 'controllers.profile.currentPage',
 	showGridBtn:false,

 	showHeaderChange: function(){  
 		if( this.get('currentPage') === this.get('thisPage')){
 			this.set('controllers.profile.showGridBtn', this.get('showGridBtn'));
 			this.get('controllers.profile').set('showHeader', false);	
 		} 		
 	}.observes('currentPage'),
	
	productImagesBinding: "model.product_images",
	product_status_options: null,
	currentUserBinding: 'Haul.currentUser',
	isProcessing: false,
	isProcessingDelete: false,
	imagesAreSelected: false,
	showImageModal: false,
	animateImageModal: false,
	showDeleteModal: false,
	animateDeleteModal: false,
	
	selectedImages: [],
	editorialForQuill: "",
	canEditProduct: false,
	openDrawer: false, 

	setup: function() {
		this.set('canEditProduct', false);
		if(Ember.isEmpty(this.get('model')) || Ember.isEmpty(this.get('currentUser')) ){
			return
		} 

		if( this.get('model').get('product_user').get('id') === this.get('currentUser').get('id') ){
			this.set('canEditProduct', true);
		}

		var selectedStatus;
		var for_sale 		= {name: "for sale", id: 'FOR_SALE'};
		var sold 			= {name: "sold",    id: 'SOLD'};
		var not_for_sale 	= {name: "no longer for sale",    id: 'NOT_FOR_SALE'};
		var status = this.get('model').get('product_status');
		
		if(status == "NOT_FOR_SALE"){
			selectedStatus = not_for_sale;
		}else if(status === "SOLD"){
			selectedStatus = sold;
		}else{
			selectedStatus = for_sale;
		}

		var product_status_options = Ember.ArrayController.create({
		  selectedStatus: selectedStatus,
		  status: [for_sale, sold, not_for_sale],
		}); 
		this.set('product_status_options', product_status_options); 

	}.observes('model', 'currentUser'),

	setUpQuill: function() {
		if( this.get('model').get('body') ){
			this.set('editorialForQuill', this.get('model').get('body'));
		}
	}.observes('model.body'),


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
		//Set the images on the model.
		var model = this.get('model');
		model.set('product_image_ids', ids); 
		model.set('image_id', ids[0]); 

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

	deletePost: function() {
		var _this = this;		
		var model = this.get('model');

		model.deleteRecord();
		model.save()
		.then(function(){
			return _this.store.find('post-list', {user_id:_this.get('currentUser').get('id')});
		})
		.then(function(record){
			_this.set('isProcessingDelete', false);
			var user = _this.get('currentUser'); 
			_this.transitionToRoute('profile', user);
		}, function(error){
			console.log("Error", error);
			_this.set('isProcessingDelete', false);
		});
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

		//Get-Set the product status.
		model.set('product_status', this.get('product_status_options').get('selectedStatus').id);
			

					

 		//Model Validations:
		model.validate()
		.then(function(){
			_this.set('isProcessing', true);
			return model.save();
		})
		.then(function(record){
			return record.reload();
		})
		.then(function(record){
			_this.set('isProcessing', false);
			var user = _this.get('currentUser'); 
			_this.transitionToRoute('profile.post', user, record);
		}, function(error){
			console.log("Error", error);
			_this.set('isProcessing', false);
			_this.set('showErrors', true);
			_this.set('openDrawer', true);
		});
	},



	actions: {

		deletePost: function() {
			this.deletePost();
		},

		showDeleteModal: function(){
			var _this = this;
			this.set('showDeleteModal', true);
			Ember.run.later(function(){
				_this.set('animateDeleteModal', true);
			},100);
		},

		closeDeleteModal: function(){
			var _this = this;
			this.set('animateDeleteModal', false);
			Ember.run.later(function(){
				_this.set('showDeleteModal', false);
			},300);
		}, 


		showImageModal: function(){
			var _this = this;
			this.set('showImageModal', true);
			Ember.run.later(function(){
				_this.set('animateImageModal', true);
			},100);
		},

		closeImageModal: function(){
			var _this = this;
			this.set('animateImageModal', false);
			Ember.run.later(function(){
				_this.set('showImageModal', false);
			},300);
		}, 

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

		btnDrawer: function() {
			this.toggleProperty('openDrawer');
		},

		updateSortOrder: function(i) {
			this.updateSortOrder(i);
		}
	}
});