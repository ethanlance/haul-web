import Ember from "ember";
import DS from "ember-data";
import EmberValidations from 'ember-validations';
export default DS.Model.extend(EmberValidations.Mixin, {
	
	comment: DS.attr('string'),

	post_id: DS.attr('string'),
	post: DS.belongsTo('post', {async: true}),

	user_id: DS.attr('string'),
	user: DS.belongsTo('user', {async: true}),
	
	created_at: DS.attr('string'),
	marker_id: DS.attr('string'),
	
	validations: { 
		// comment: {
		//  	presence: true,
		//  	length: { minimum: 2, maximum: 2000 }
		// }
	}
});