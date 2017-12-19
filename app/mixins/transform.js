import Ember from 'ember';
export default Ember.Mixin.create({
 

	htmlToMarkup: function( html ) {
		
		if(Ember.isEmpty(html)){
			return "";
		}
 
		var dom = $(document.createElement('div')).html(html);
 
		if(dom){

			var imgs = Ember.$(dom).find('img').toArray();
			var _this = this;
			
			imgs.forEach(function(img){
				
				var parser = document.createElement('a');
				
				parser.href = img.src;
				
				var pathParts = parser.pathname.split('/');

				var index = pathParts.length - 2;

				var image_id = pathParts[index];

				var code = "[img " + image_id + "]";

				$(img).replaceWith(code); 

			});
		}

		return $(dom).html();
	},

	markupToHTML: function( html ) {

		if(Ember.isEmpty(html)){
			return "";
		}

		var regex = /\[(.*?)\]/g;

		var match = html.match(regex);

		if( match) {

			for(var i=0; i<match.length; i++){
				var code = match[i];

				try{
		  			
		  			var image_id = code.split("img ")[1].replace("]","");
	 
		  			var src_large = this.ENV.Server.IMAGE_SERVER_HOST +"/images/" + image_id + "/large";
		  			var src_medium = this.ENV.Server.IMAGE_SERVER_HOST +"/images/" + image_id + "/medium";
		  			var src_small = this.ENV.Server.IMAGE_SERVER_HOST +"/images/" + image_id + "/small";
		  		
		  			var img = "<img lowsrc='"+src_small+"' src='"+src_medium+"' onError='this.onerror=null;this.src=\""+ src_small +"\";'>";

		  			html = html.replace(code, img);

	  			}catch(e){
	  				///donothing
	  			}
			}
		}
 		
 		return html;
	}
});