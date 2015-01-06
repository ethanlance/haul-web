import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	slug: DS.attr('string'),
	email: DS.attr('string'),
	accessToken: DS.attr('string'),
	refreshToken: DS.attr('string'),	
	current: DS.attr('boolean'), 
	user_id: DS.attr('string'),	
	user: DS.belongsTo('user', {async:true}),

	//iconBinding: 'user.icon',
});

