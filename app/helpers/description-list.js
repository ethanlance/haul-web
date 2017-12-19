import { sanitize } from 'ember-sanitize/utils/sanitize';
import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(html, configName, options) {

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


	//Special Case, Probably make new helper... 
	var str = "";
	var list = sanitized.split('¶');
	list.forEach(function(item){
		item = item.trim();
		if( item ) {
			str += "<li>" + item + "</li>";
		}
	});

	str = "<ul>" + str + "</ul>";

	return new Ember.Handlebars.SafeString(str);
 
});