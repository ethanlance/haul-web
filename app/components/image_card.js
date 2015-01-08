import Ember from 'ember';

/**
	ImageCardComponent is one image.  
	The image in the ImageCardComponent sends an onclick event 'imageClick'
**/
var ImageCardComponent = Ember.Component.extend({

	//Bound property.  When isSelected is true, then class="selected" 
	//is appendend to the parent div wrapping the image.
	classNameBindings: ['isSelected:selected'],
	isSelected: false,

	deleteModalStyle: "display:none",
	
	didInsertElement: function() {
		if(this.image.get('isSelected')){
			this.set('isSelected', true);
		}else{
			this.set('isSelected', false);
		}
	},

	observe: function() { 
		if( this.image.get('isSelected')){
			this.set('isSelected', true);
		} else {
			this.set('isSelected', false);
		}
	}.observes('image.isSelected'),

	actions: {
		imageClick: function() { 
			this.sendAction('imageClick', this);	
		},
		imageDelete: function() {
			this.set('deleteModalStyle', 'display:block'); 
		},

		imageDeleteCancel: function() {
			this.set('deleteModalStyle', 'display:none');
		},

		imageDeleteProceed: function() {			
			this.sendAction('imageDeleteProceed', this);	
		}
	}
});
export default ImageCardComponent;