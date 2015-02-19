import DS from 'ember-data';
export default DS.Model.extend({
	follows: DS.hasMany('user', {async:true}),
});