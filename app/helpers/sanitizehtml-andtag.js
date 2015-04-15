import { sanitize } from 'ember-sanitize/utils/sanitize';
import Ember from 'ember';
import TransformMixin from '../mixins/transform';

export default Ember.Handlebars.makeBoundHelper(function(html, configName, ENV, options) {



	

	if(Ember.isEmpty(html)){
		return new Ember.Handlebars.SafeString(html);
	}

	if (arguments.length === 2) {
		options    = configName;
		configName = null;
	}

	var config;
	if (configName) {
		var data      = options.data;
		var container = this.container || (data && data.view && data.view.container);
		var config    = container.lookup("sanitizer:"+configName);
	}

	html = html.replace(/<div>/g, "<p>");
	html = html.replace(/<\/div>/g, "</p>");
	html = html.replace(/\n/g, "<br>");

	var sanitized = sanitize(html, config);


	//Mentions @username
	var words = sanitized.split(" ");
	var match, username, hashtag;
	var wordHash = [];
	words.forEach(function(word){
		//console.log("WORD", word);
		//MENTIONS
		match = word.match(/^@.*[^\s]$|^[^@].*,$/);
		if( match) {
			username = word.split('@')[1];
	  		if( username !== 'undefined' && username !== undefined ){
			   word = "<a href='/"+username+"'>" + word + "</a> ";
	  		}
		}

		//HASHTAGS
		match = word.match(/^\#.*[^\s]$|^[^#].*,$/);
		if( match) {
			hashtag = word.split('#')[1];
	  		if( hashtag !== 'undefined' && hashtag !== undefined ){
			   word = "<a href='/search?q=tag_"+hashtag+"'>#" + hashtag + "</a> ";
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