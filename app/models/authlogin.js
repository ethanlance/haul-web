import Ember from 'ember';
import DS from 'ember-data';
export default DS.Model.extend(Ember.Validations.Mixin, {

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