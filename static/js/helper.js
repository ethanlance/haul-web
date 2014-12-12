Ember.Handlebars.registerBoundHelper('format-date', function(timestamp) {
	var jsDate = new Date(timestamp*1000);
  	return moment(jsDate).fromNow();
});


Ember.Handlebars.registerBoundHelper('breaklines', function(text) {
    text =new Handlebars.SafeString(text);
    text = Handlebars.Utils.escapeExpression(text);
    text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
    return new Handlebars.SafeString(text);
});



function convertToSlug(text){
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g,'')
    .replace(/ +/g,'-');
}