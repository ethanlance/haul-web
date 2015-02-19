import Ember from 'ember';
export default Ember.ObjectController.extend({
 
 	needs: ['profile'],
	
	productImages: null,
	
	currentUserBinding: 'Haul.currentUser',
	currentUserIdBinding: 'Haul.currentUser.id',
	isProcessing: false,
	
	showPost: false,
	showProduct: false,
	showUpload: false,
	imagesAreSelected: false,

	imageId: null,
	productImageIds: [],
	selectedImages: [],

	editorialForQuill: "",


	state: null,
	states:{
		0:'showUpload', 
		1:'showProduct', 
		2:'showPost'
	},

	findState: function() {

		var _this = this;
		var state = this.get('newState'); 

		var states = this.get('states');

		var newKey = null;
		for(var key  in states) {
			if(states[key]===state){
				newKey = key;
			}
		}

		for(key  in states) {
			var s = states[key];
			
			if(s===state){
				_this.set(s, true);
				_this.set(s+'OutRight', false);
				_this.set(s+'OutLeft', false);
			}else{
				if(key < newKey ){
					_this.set(s+'OutRight', false);
					_this.set(s+'OutLeft', true);
				}else{
					_this.set(s+'OutRight', true);
					_this.set(s+'OurLeft', false);
				}
				_this.set(s, false);
			}

			window.scrollTo(0,0);
		}

	}.observes('newState'),


	setup: function() {  
		this.set('newState', 'showUpload');
	}.observes('model'),


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
		var user = this.get('currentUser'); 
		var model = this.get('model');

		this.set('isProcessing', true);

		model.set('user', user);

		model.set('product_image_ids', this.get('productImageIds')); 
		model.set('image_id', this.get('productImageIds')[0]); 

		//Trim
		if( model.get('body') ) {
			model.set('body', model.get('body').trim());
		}
		if(Ember.isEmpty(model.get('body'))){
			model.set('body', " ");
		}

 		//Model Validations:
		model.validate()
		.then(function(){
			return model.save();
		})
		.then(function(record){
			console.log("RECORD?", record);
			return record.reload();
		})
		.then(function(record){
			_this.set('isProcessing', false);
			_this.transitionToRoute('profile.post', user, record.get('id'), record.get('post_slug'));
		}, function(error){
			console.log("Error", error);
			_this.set('isProcessing', false);
			_this.set('showErrors', true);
		});
	},

	actions: {

		showPost: function() {
			this.set('newState', 'showPost');
		},

		showProduct: function() {
			this.set('newState', 'showProduct');
		},

		showUpload: function() {
			this.set('newState', 'showUpload');
		},

		cancel: function() {
			this.transitionToRoute('profile', this.get('currentUser'));
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
		}
	}
});