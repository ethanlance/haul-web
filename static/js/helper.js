Ember.Handlebars.registerBoundHelper('format-date', function(timestamp) {
	console.log(timestamp)
  	var jsDate = new Date(timestamp*1000);;
  	return jsDate.toDateString();
});


Ember.Handlebars.registerBoundHelper('breaklines', function(text) {
    text = Handlebars.Utils.escapeExpression(text);
    text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
    return new Handlebars.SafeString(text);
});