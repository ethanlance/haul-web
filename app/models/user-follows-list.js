import DS from 'ember-data';

export default DS.Model.extend({
	follows: DS.hasMany('collection', {async:true}),
});