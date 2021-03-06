import Ember from 'ember';
import DS from 'ember-data';
import EmberValidations from 'ember-validations';
export default DS.Model.extend(EmberValidations.Mixin, {

	email: DS.attr('string'),

	validations: {
		email: {
			presence: true,
			format: {with: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, allowBlank:false, message: 'please enter a valid email address.'}
		} 
	}
});