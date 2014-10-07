comment.jsHaul.Comment = DS.Model.extend({
	product: DS.belongsTo('product'),
	user: DS.belongsTo('user'),
	body: DS.attr('string')
});