Ember.Handlebars.registerBoundHelper('format-date', function(timestamp) {
	var jsDate = new Date(timestamp*1000);
  	return moment(jsDate).fromNow();
});


Ember.Handlebars.registerBoundHelper('breaklines', function(text) {
    text = Handlebars.Utils.escapeExpression(text);
    text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
    return new Handlebars.SafeString(text);
});
