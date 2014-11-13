Haul.ProfileBtnComponent = Ember.Component.extend({
	itemIdBinding: "currentUser.id",
	actions: {
		clickProfile: function() {   
			this.sendAction("clickTransition", "seller", this.itemId);
		}
	}
});