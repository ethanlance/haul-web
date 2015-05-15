import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import ResetScrollMixin from '../mixins/resetscroll';
export default Ember.Route.extend(AuthenticatedRouteMixin,{

	metaTitle: function() {
		return "Import a link";
	}.property(),

  	metaDescription: function() {
		return "Curate anything for sale on the internet.  Just paste in a link to import it.  Then write your own blog post for it.";
	}.property(),
});