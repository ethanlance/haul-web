import AnonMixin from '../../mixins/anon';
export default Ember.Route.extend(AnonMixin, {
	model: function() {
		return this.store.createRecord('username');
	}
});