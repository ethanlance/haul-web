import DS from "ember-data";
import EmberValidations from 'ember-validations';
export default DS.Model.extend(EmberValidations.Mixin, {
	firstname: DS.attr('string'),
	lastname: DS.attr('string'),
	address: DS.attr('string'),
	city: DS.attr('string'),
	state: DS.attr('string'),
	postal_code: DS.attr('string'),
	label: DS.attr('string'),
	company: DS.attr('string'),
	user_id: DS.attr('string'),

	validations: { 
		firstname: {
		 	presence: true
		},
		lastname: {
		 	presence: true
		},
		address: {
		 	presence: true
		},
		city: {
		 	presence: true
		},
		state: {
		 	presence: true
		},
		postal_code: {
		 	presence: true
		},

	}
});




