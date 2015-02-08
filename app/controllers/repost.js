import Ember from 'ember';
export default Ember.ObjectController.extend({ 


	currentUserBinding: "session.currentUser",
	editorialForQuill: " ",
	postBinding:'post',
	showModal: false,
	store: false,
	repost:false,
	postComplete:false,

	start: function() {
		this.set('store', this.container.lookup("store:main"));
		this.set('repost', this.get('store').createRecord('collection-product'));
	}.on('init'),

	setUpQuill: function() {
		if( this.get('repost').get('editorial') ){
			this.set('editorialForQuill', this.get('repost').get('editorial'));
		}
	}.observes('post'),

	savePost: function() {
		var _this = this;
		var user = this.get('currentUser');
		var product = this.get('post');
		var model = this.get('repost');

		//Create?
		if(!model.id){
			var id = user.get('collection').get('id') + "-" + product.get('id');
			model.set('id', id);
			model.set('product', product);
			model.set('collection', user.get('collection'));
		}
		
		model.save()
		.then(function(){
			_this.set('isProcessing', false);
			_this.set('postComplete', true);
		}, function(error){
			return error;
		});
	},

	actions: {

		close: function() {
			console.log("CLOSE MODAL")
			return this.send('closeModal');
		},

		quillChange: function(text) {
			this.get('repost').set('editorial', text);
		},
 

		savePost: function() { 
			
			this.set('isProcessing', true);

			var _this = this;
			var model = this.get('repost');

			//Trim
			if( model.get('editorial') ) {
				model.set('editorial', model.get('editorial').trim());
			}

			if(Ember.isEmpty(model.get('editorial'))){
				model.set('editorial', " ");
			}

	 		//Model Validations:
			model.validate().then(function(){
				_this.savePost();	
			}, function() {
				_this.set('isProcessing', false);
				_this.set('showErrors', true);
			});
		},
	}
});