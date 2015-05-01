import DS from "ember-data";
import EmberValidations from 'ember-validations';
export default DS.Model.extend(EmberValidations.Mixin, {
	
	user_id: DS.attr('string'),
	name: DS.attr('string'),
	number: DS.attr('string'),
	expiration: DS.attr('string'),
	cvv: DS.attr('string'),
	postal_code: DS.attr('string'),

	card_image_url: DS.attr('string'),
	card_type: DS.attr('string'),
	label: DS.attr('string'),
	

	validations: { 
		name: {
		 	presence: true
		},
		number: {
		 	presence: true
		},
		expiration: {
		 	presence: true
		},
		cvv: {
		 	presence: true
		},
		postal_code: {
		 	presence: true
		},

	}
});




