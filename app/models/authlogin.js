import Ember from 'ember';
import DS from 'ember-data';
var Authlogin = DS.Model.extend(Ember.Validations.Mixin, {

	email: DS.attr('string'),
	password: DS.attr('string'),

	validations: {
		email: {
			presence: true
		},
		password: {
		 	presence: true
		}
	}
});
export default Authlogin;