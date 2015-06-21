import { sanitize } from 'ember-sanitize/utils/sanitize';
import Ember from 'ember';
import TransformMixin from '../mixins/transform';

export default Ember.Handlebars.makeBoundHelper(function(html, ENV, options) {

	
	if(Ember.isEmpty(html) || html == undefined){
		return new Ember.Handlebars.SafeString('');
	}

	//Find the first paragraph without an image.
	var div = $(document.createElement('div')).html(html);
	var html = "";
	div.children('div').each(function(i, div){

		var text = $(div).text();
		text = text.replace(/\[(.*?)\]/g, " ");//.trim();
		text = text.trim();
		var len = 499;
		if( text ){
			
			html = text.substring(0,len);

			html = html.trim();
			if(html && html.substring(html.length-1) !== "." && html.substring(html.length-1) !== "!" && html.substring(html.length-1) !== "?") {
				html = html + "...";
			}
			return false;
		}		
	});

	if(Ember.isEmpty(html) || html == undefined){
		return new Ember.Handlebars.SafeString('');
	}	
	
	
	html = html.replace(/<div>/g, "<p>");
	html = html.replace(/<\/div>/g, "</p>");
	html = html.replace(/\n/g, " <br> ");

	
    var config    = this.container.lookup("sanitizer:editorial");
	var sanitized = sanitize(html, config);


	//Mentions @username
	var words = sanitized.split(" ");
	var match, username, hashtag;
	var wordHash = [];
	words.forEach(function(word){
		
		//MENTIONS
		match = word.match(/^@.*[^\s]$/);
		if( match) {
			username = word.split('@')[1];
	  		if( username !== 'undefined' && username !== undefined ){
			   word = "<a href='/"+username+"'>" + word + "</a> ";
	  		}
		}

		//HASHTAGS
		match = word.match(/^#/ig);
		if( match) {
			hashtag = word.split('#')[1];
	  		if( hashtag !== 'undefined' && hashtag !== undefined ){
	  		
			   word = "<a class='tag-cloud' href='/search?q=tag_"+hashtag+"'>#" + hashtag + "</a> ";
	  		}
		}

		wordHash.push(word);
	});



	var sanitized = wordHash.join(" ");	

	//Transform our Haul [code] into elements.
	TransformMixin.mixins[0].properties.ENV = ENV;
	sanitized = TransformMixin.mixins[0].properties.markupToHTML(sanitized);


	return new Ember.Handlebars.SafeString(sanitized);
});