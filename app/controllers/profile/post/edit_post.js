import Ember from 'ember';
import ErrorMixin from '../../../mixins/server_error';
export default Ember.ObjectController.extend(ErrorMixin, {
 
 	needs: ['profile'],

 	requestEditorContents: false,

 	currentPageBinding: 'controllers.profile.currentPage',
	
	productImagesBinding: "model.product_images",

	currentUserBinding: 'session.currentUser',
	
	isProcessing: false,

	isProcessingDelete: false,

	showDeleteModal: false,

	animateDeleteModal: false,

	selectedImages: [],

	deletedImages: [],

	editorialForBody: "",

	prevModelId: false,

	currentModelId: false,

	currentModelIdChanged: function() {
		if( this.get('prevModelId') && this.get('prevModelId') !== this.get('currentModelId')  ){
			this.reset();
		}

		this.set('prevModelId', this.get('currentModelId'));
	}.observes('currentModelId'),

	reset: function() {
		this.setProperties({
			imageUploadError: "",
			selectedImages: [],
			showDeleteModal: false,
			isProcessing: false,
			isProcessingDelete: false,
			requestEditorContents: false,
		})
	},

	setup: function() {
		
		if(Ember.isEmpty(this.get('model')) || Ember.isEmpty(this.get('currentUser')) ){
			return
		} 

		this.set('currentModelId', this.get('model.id'));

	}.observes('model', 'currentUser'),




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


	deletePost: function() {
		var _this = this;		
		var model = this.get('model');
		var id = this.get('model.id');

		model.deleteRecord();
		model.save()
		.then(function(){
			return _this.store.find('post-list', {user_id:_this.get('currentUser').get('id')});
		})
		.then(function() {

			//Find this post in the list.
			var record = _this.store.getById('post-list', id);
			
			if(!Ember.isEmpty(record) && record !== undefined && !record.get('isDirty') ){
				_this.store.unloadRecord(record);	
			}

			

		})
		.then(function(record){

			_this.set('isProcessingDelete', false);
			
			_this.transitionToRoute('profile', _this.get('currentUser'));

		}, function(error){
			console.log("Error", error);
			_this.set('isProcessingDelete', false);
		});
	},

	savePost: function() {
		var _this = this;		
		var model = this.get('model');
 
		var body = this.get('editorialForBody').trim();

		if(Ember.isEmpty(body)){
			body = " ";
		}
		model.set('body', body);

 		//Model Validations:
		model.validate()
		.then(
			function validateSuccess(){
				return model.save();
			}
		)
		.then(
			function reloadModel(record){		
				return record.reload();
			}
		)
		.then(
			function serverSuccess(record){
				
				_this.set('isProcessing', false);
				
				var user = _this.get('currentUser'); 
				
				_this.set('animateClose', true);
				
				_this.reset();

				_this.transitionToRoute('profile.post', user, record);

		}, function serverError(error){
				console.log("Error", error);
				_this.set('isProcessing', false);
				//Mixin:
				_this.handleServerError(error)
				_this.set('showErrors', true);
				_this.set('openDrawer', true);
		});
	},



	actions: {

		close: function() {
			this.set('animateClose', true);
		},

		cancel: function() {
			this.set('animateClose', true);
			//this.transitionToRoute('profile', this.get('currentUser'));
		},

		closeModal: function() { 
			var _this = this;
			var model = this.get('model'); 
			this.set('animateClose', true);
			this.transitionToRoute('profile.post', model.get('user.username'), model); 
		}, 

		deletePost: function() {
			this.deletePost();
		},

		showDeleteModal: function(){
			var _this = this;
			this.set('showDeleteModal', true);
		
			$('#editModal').parent().scrollTop(0);
	
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


		savePost: function() { 
			this.set('isProcessing', true);
			this.set('requestEditorContents', true);
		},

		quillChange: function(text) { 
			this.set('editorialForBody', text); 
			this.savePost();
		},

	}
});