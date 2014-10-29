Haul.ProfileUserComponent = Ember.Component.extend({
	actions: {
		clickProfile: function() {  
			this.sendAction("clickTransition", "seller", this.user.get('id'));
		}
	}
});