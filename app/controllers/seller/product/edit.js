import Ember from 'ember';
var $ = Ember.$; 
//import auth from './../../auth';

//EDIT or CREATE product.
export default Ember.ObjectController.extend({
	currentUserIdBinding: 'session.currentUser.id',

	model: [],
	uploads: [],

	//This array controller sorts it's images
	sortProperties: ['created_at'],
	sortAscending: false,

	//Properties for UI display state
	showImagePicker: true,
	imagesAreSelected: false,
	productExists: false,
	isProcessing:false,

	//Error
	errorShow: false,
	errorMessage: null,

	//This product's image_ids 
	imageIds:[],
	selectedImages:[],


	//Blow away all property values
	reset: function(){ 
		this.set('showImagePicker',true);
		this.set('imagesAreSelected',false);
		this.set('productExists',false);
		this.set('imageIds',[]); 
		this.set('model', []);
		if(this.get('uploads')){
			this.get('uploads').forEach(function(img) {
				img.set('isSelected', false);
			});	
		} 
	},

	modelChanged: function() {

		var _this = this;
		var user_id = this.get('currentUser').get('id');
		this.store.find('user-image', {user_id: user_id } ).then(function(results){

				_this.set('uploads', results);
				_this.imageMunge();

			})
	
	}.on('init'),//.observes('model.id'),

	imageMunge: function() {
		var _this =this;
		console.log("CLUSTER " , this.get('model') )

		if( this.get('model').get('id') ){

			this.set('showImagePicker', false);
			

			//What images does this product have?
			this.get('model').get('images').then(function(images){

				//hilight upload images
				var uploads = _this.get('uploads');

				if( uploads ) {

					var selectedImages = _this.get('selectedImages');
					selectedImages.beginPropertyChanges();
					selectedImages = [];

					uploads.forEach(function(img) {
						images.forEach(function(simg){
							//Set this image isSelected.
							if(simg.get('id') === img.get('id')) {
								
								img.set('isSelected', true);
								selectedImages.pushObject(simg);
							}
						});
					});

					selectedImages.endPropertyChanges();
					_this.set('selectedImages', selectedImages);
				}

			});
			
		}else{
			_this.set('showImagePicker', true);
		}
	}.observes('model.id'),


	//Observer: anytime our array of selected images changes, update
	// our list of image_ids.
	imagesIdsChanged: function() {
		
		
		var selectedImages = this.get('selectedImages');
		var imageIds = this.get('imageIds');

		var ids = selectedImages.map(function(image) {
			return image.get('id');
		});
		this.set('imageIds', ids); 

		//Highlight the image:
		if( this.get('imageIds').length === 0 ) {
			this.set('imagesAreSelected', false);
		}else{
			this.set('imagesAreSelected', true);
		}
 
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

	saveProduct: function() {
		var _this = this;
		var model = this.get('model');
		
		model.set('image_ids', this.get('imageIds'));

		//Refresh the image models. Get data from api.
		this.get('image_ids').forEach(function(id){
			var img = _this.store.find('image', id );
			img.then(function(i) {
				i.reload();
			});
		});

		model.save().then(
			function() { 
				_this.set('isProcessing', false);

				//reload product_list model too.
				_this.store.find('product-list', {user_id: _this.get('currentUser').id});

				var user = _this.get('currentUser');
				
				_this.transitionToRoute('seller.product', user, model.reload());
			},
			function(error){
				_this.set('isProcessing', false);	
				_this.set('errorShow', true);
				_this.set('errorMessage', Haul.errorMessages.get(error.status));
				console.log("Error" , error);
			}
		);
	},

	//UI ACTIONS
	actions: { 

		submit: function() {
			this.set('isProcessing', true);

			var _this = this;
			var model = this.get('model');

			//Trim
			if( model.get('description') ){
				model.set('description', model.get('description').trim());
			}
			if( model.get('name') ){
				model.set('name', model.get('name').trim());
			}


	 		//Model Validations:
			model.validate().then(function(){
				_this.saveProduct();	
			}, function() {
				_this.set('isProcessing', false);
				_this.set('showErrors', true);
			});
		},

		


		//Image Picker Component has deleted/destroyed this image.
		//Update our selectedImages.
		//Should an observer do this?
		imageDeleted: function(image_id) {
			var image = false;
			var selectedImages = this.get('selectedImages'); 

			selectedImages.forEach(function(result){
				if(result.get('id') === image_id){
					image = result;
				}
			});	
			
			if( image ) {
				// selectedImages.splice($.inArray(image, selectedImages),1); // remove image
				// selectedImages.splice(0,0,image); // add image to top of array
				// selectedImages.shiftObject(); // use ember's KVO shiftObject to remove image from top. 
				var collection = [];
				selectedImages.forEach(function(result){
					if( result.get('id') !== image.get('id')){
						collection.push(result);
					}
				});
				this.set('selectedImages', collection);
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
			if( selectedImages.length === 5 && !found ) {

				//Show our modal.
				$('#imagePickerModal').modal('show');
				return;
			
			//Remove
			}else if( found ) { 

				//selectedImages.splice($.inArray(image, selectedImages),1); // remove image
				//selectedImages.splice(0,0,image); // add image to top of array
				//selectedImages.popObject(); // use ember's KVO shiftObject to remove image from top.

				var collection = [];
				selectedImages.forEach(function(result){
					if( result.get('id') !== image.get('id')){
						collection.push(result);
					}
				});
				this.set('selectedImages', collection);

				event.set('isSelected',false); 

			//Add
			}else{
				selectedImages.pushObject(image);
				event.set('isSelected',true);
			}
		},


		clickNext: function() {
			this.set('showImagePicker', false);
		},

		clickPrev: function() {
			this.set('showImagePicker', true);
		},

			//Image has been uploaded.
			//Push it into the store.
			//The images computed property in this controller will update the view.
		refresh: function(response) {
			var user_id  = this.get('currentUserId');
			var store = this.store; 
			var _this = this;

			response.data.forEach( function(image){ 
				var record = store.push('user-image', {
					original: image.locations.original,
					small: image.locations.small,
					thumb: image.locations.thumb,
					caption: image.caption,
					locations: image.locations,
					user_id: user_id,
					id: image.image_id,
					created_at: image.created_at
				});  
				_this.get('uploads').unshiftObject(record);
			});				
		},

	}
});

