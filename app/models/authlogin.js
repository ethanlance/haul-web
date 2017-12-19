import Ember from 'ember';
import DS from 'ember-data';
import EmberValidations from 'ember-validations';
export default DS.Model.extend(EmberValidations.Mixin, {

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