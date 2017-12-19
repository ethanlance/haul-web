import DS from 'ember-data';
export default DS.Model.extend({
	//Keep these as helpers.
	post_id: DS.attr('string'),	
	user_id: DS.attr('string'),	
	created_at: DS.attr('string'),
	
	post: DS.belongsTo('post', {async:true}),
	user: DS.belongsTo('user', {async:true}) 
});