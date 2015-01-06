import Ember from "ember";
import DS from "ember-data"; 


//Models
var Collection = DS.Model.extend(Ember.Validations.Mixin, {

	name: DS.attr( 'string' ),
	description: DS.attr( 'string' ),
	user_id: DS.attr( 'string' ), 
	user: DS.belongsTo('user', {async:true}),
	slug: DS.attr( 'string' ),
	
	getFollowedByCount: DS.belongsTo('collection-is-followed-by-count', {async:true}), 
	getFollowers: DS.belongsTo('collection-followers-list', {async:true}), 

	
	image: DS.belongsTo('image', {async:true}), 
	
	iconBinding: Ember.computed.oneWay('image.thumb'), 

	image_id: DS.attr('string'), 
	//imageIdChanged is fired when a new image_id is assigned to the model.
	//this happens when a user uploads a new user icon for their collection.
	imageIdChanged: function() {
		this.getIconImage();
	}.observes('image_id'),

	//getIconImage asks the API for the collection image.
	//If the size thumb is not retured it asks the API for the image again for "retryTimes" times.
	//When a user uploads a new collection profile image it takes time for the image resizer to crunch
	//all the image sizes.
	getIconImage: function() {

		return;

		var _this = this;
		var image_id = this.get('image_id');
		if( !image_id ){
			 return;	
		}
		
		var i = 0;
		var retryTimes = 10;
		var retryWait = 2000;

		//If no thumb returns, then try again.
		//This happens when icons are uploaded, the image
		//takes time to crunch.
		function waitingForResponse() {
			i++;
			_this.store.find('image', image_id)
			.then(function(image){
				return image.reload();	
			}).then(function(image) { 
				if( !image.get('thumb') && i < retryTimes ) { 
				} else { 
					window.clearInterval(_this.getThumbInterval);
					_this.set('image', image);
				} 
			});
		} 

		//Get the thumb
		_this.store.find('image', image_id)
		.then(function(image){ 
			return image; 
		}).then(function(image) { 
			if( !image.get('thumb') && i < retryTimes ) { 
				_this.getThumbInterval = setInterval(function () { 
					waitingForResponse();
				}, retryWait); 
			} else {
				_this.set('image', image);
			}
		});
	},

	validations: { 
		name: {
		 	presence: true,
		 	length: { minimum: 3, maximum: 50 }
		},
		description: {
		 	// presence: true,
		 	length: { maximum: 2000 }
		}
	}
});	
export default Collection;



 




