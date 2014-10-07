
Haul.ImageCardComponent = Ember.Component.extend({
	classNameBindings: ['isSelected:selected'],
  	isSelected: false,

	actions: {
		clickImage: function(el) {
			console.log(el);
 

			console.log("FUOOOOK");

			this.$('.haul-grid-li').set('isSelected',true);
		}
	}

});


Haul.ImagePickerComponent = Ember.Component.extend({

	


});



Haul.FileUploadComponent = Ember.Component.extend({


    layout: Ember.Handlebars.compile("<form id='haul-dropzone' action='/target' class='dropzone'></form>"),
    didInsertElement: function(){
        new Dropzone("#haul-dropzone", { 

			url: "http://localhost:8081/users/1617320006909952/images",
			method: "post",
			headers: {"Authorization": "Bearer Tcg9w8FA-d1vJKlQpYn0YNzabtgmohefAiUCm0CCItc"},
			paramName: "attachment",
        	dictDefaultMessage: "Drop Files Here <br/> OR <br/> Click Here To Browse Your Files"
        });
    }
});















