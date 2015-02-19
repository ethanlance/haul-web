import Ember from 'ember';
import DS from 'ember-data';
export default DS.Model.extend(Ember.Validations.Mixin, {

	password: DS.attr('string'),
	firstname: DS.attr('string'),
	lastname: DS.attr('string'),

	validations: { 
		password: {
		 	presence: true,
		 	format: {with: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d$@$!%*?&]{6,}$/, allowBlank:false, message: 'password must contain at least 6 characters, 1 number, 1 upper and 1 lowercase.'}
		},
		firstname: {
		 	presence: true
		},
		lastname: {
		 	presence: true
		}
	}
});