import Ember from "ember";
import DS from "ember-data"; 

var ApiKey = DS.Model.extend({
	accessToken: DS.attr('string'),
	user: DS.belongsTo('user', {
		async: true
	})
});
export default ApiKey;







