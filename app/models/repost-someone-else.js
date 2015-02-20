import Ember from "ember";
import DS from "ember-data";
export default DS.Model.extend(Ember.Validations.Mixin, {
	
	user: DS.belongsTo('user', {async:true}),
	subject: DS.attr('string'),
	body: DS.attr('string'),
	image: DS.belongsTo('image', {async:true}),

	validations: { 
		body: {
		 	presence: true,
		 	length: { maximum: 2000, minimum: 0 }
		},
		subject: {
		 	presence: true,
		 	length: { minimum: 2 }
		}
	}
});	
