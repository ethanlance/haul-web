import DS from "ember-data";
export default DS.Model.extend({
	firstname: DS.attr('string'),
	lastname: DS.attr('string'),
	address: DS.attr('string'),
	city: DS.attr('string'),
	state: DS.attr('string'),
	postal_code: DS.attr('string'),
	label: DS.attr('string'),
	company: DS.attr('string'),
	user_id: DS.attr('string'),
});




