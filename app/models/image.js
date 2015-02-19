import DS from "ember-data";

export default DS.Model.extend({
	original: DS.attr('string'),
	medium: DS.attr('string'),
	large: DS.attr('string'),
	small: DS.attr('string'),
	thumb: DS.attr('string'),
	caption: DS.attr('string'),
	user_id: DS.attr('string'),
	created_at: DS.attr('number')
}); 



