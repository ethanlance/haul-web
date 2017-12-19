import DS from "ember-data";
export default DS.Model.extend({ 
	post_id: DS.attr('string'),
	user_id: DS.attr('string'),
});