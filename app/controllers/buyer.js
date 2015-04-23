import DS from "ember-data";
export default DS.Model.extend({ 
	user_id: DS.attr('string'),
	firstname: DS.attr('string'),
	lastname: DS.attr('string'),
	email: DS.attr('string'),
	phone: DS.attr('string'),
});