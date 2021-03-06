import DS from 'ember-data';
export default DS.Model.extend({
	//Keep these as helpers.
	user_id: DS.attr('string'),	
	created_at: DS.attr('string'),

	user: DS.belongsTo('user', {async:true}),
});