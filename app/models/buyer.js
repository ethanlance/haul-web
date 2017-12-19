import DS from "ember-data";
import EmberValidations from 'ember-validations';
export default DS.Model.extend(EmberValidations.Mixin, {
	firstname: DS.attr('string'),
	lastname: DS.attr('string'),
	email: DS.attr('string'),
	phone: DS.attr('string'),
	user_id: DS.attr('string'),
	company: DS.attr('string'),

	validations: { 
		firstname: {
		 	presence: true
		},
		lastname: {
		 	presence: true
		},
		email: {
		 	presence: true
		},
		phone: {
		 	presence: true
		},
	}
});