import Ember from "ember";
import DS from "ember-data"; 
import EmberValidations from 'ember-validations';
export default DS.Model.extend(EmberValidations.Mixin, {
	
	username: DS.attr('string'),
	user_id: DS.attr('string'),

	validations: { 
		username: {
		 	presence: true,
		 	length: { minimum: 2 }
		},
		user_id: {
		 	presence: true,
		}
	}
});