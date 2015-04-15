import Base from 'ember-validations/validators/base';

export default Base.extend({
	call: function() {
	
		var hostname = this.get('validateImageHost');
		var path = this.get('validateImagePath');

  		var body = this.model.get(this.property);
  		if(Ember.isEmpty(body)){return;}
	
		var dom = document.createElement('div').innerHTML = body;
		if(dom){

			var imgs = Ember.$(dom).find('img').toArray();
			var _this = this;
			
			imgs.forEach(function(img){
				
				var parser = document.createElement('a');
				
				parser.href = img.src;
				
				var pathParts = parser.pathname.split('/');

				//Only check if the src is not empty.
				//IMG with an empty src are already validated into our format of 
				//<img id="ba889760-e2fb-11e4-97cb-e9f9f11ac303">

				if(pathParts.length > 2 && pathParts[1] !== path && parser.hostname !== hostname) {
				 	
				 	_this.errors.pushObject(_this.options.message);

				}
			});
		}
  	}
});