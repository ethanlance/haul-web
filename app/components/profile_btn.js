import Ember from 'ember';

var ProfileBtnComponent = Ember.Component.extend({
	itemIdBinding: "session.currentUser.id",
	actions: {
		clickProfile: function() {   
			this.sendAction("clickTransition", "seller", this.itemId);
		}
	}
});
export default ProfileBtnComponent;