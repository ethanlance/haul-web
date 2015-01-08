import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(timestamp, options) {
	var jsDate = new Date(timestamp*1000);
	//return jsDate;
  	return moment(jsDate).fromNow();
});