import Ember from 'ember';
/* global moment */
export default Ember.Handlebars.makeBoundHelper(function(timestamp) {
	var jsDate = new Date(timestamp*1000);
  	return moment(jsDate).format('l')
});