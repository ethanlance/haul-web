import DS from 'ember-data';

export default DS.Model.extend({
	total: DS.attr('string'),
	product: DS.belongsTo('product')
});