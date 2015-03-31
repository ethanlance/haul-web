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

				if(pathParts[1] !== path && parser.hostname !== hostname) {
				 	
				 	_this.errors.pushObject(_this.options.message);

				}
			});
		}
  	}
});