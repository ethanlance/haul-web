
import DS from 'ember-data';
/**
  Total count of how many things a user has liked.
 **/
var UserLikesCount = DS.Model.extend({
	total: DS.attr('string'),
	user: DS.belongsTo('user')
});
export default UserLikesCount;