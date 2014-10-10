Ember.Handlebars.registerBoundHelper('format-date', function(timestamp) {
	console.log(timestamp)
  	var jsDate = new Date(timestamp*1000);;
  	return jsDate.toDateString();
});