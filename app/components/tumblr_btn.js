import Ember from 'ember';

export default Ember.Component.extend({

	tagName: 'div',

	className: 'tumblr-share-button',

	notes: 'right',

	color: 'blue',


	didInsertElement: function() {

		var _this = this;

		var attrs = [];

		attrs.push('data-color="' + _this.get('color') + '"');

		attrs.push('data-notes="' + _this.get('notes') + '"');

		_this.$().html('<a class="tumblr-share-button" ' + attrs.join(' ') +' href="https://embed.tumblr.com/share"></a>');

		
		this.socialApiClient.load().then(function(tumblr) {


  
			//_this.$(_this.get('element')).html('<a class="tumblr-share-button" ' + attrs.join(' ') +' href="https://embed.tumblr.com/share"></a>');

			//tumblr.LikeButton.get_status_by_post_ids([$('#tumblrLike')]);

		});
	}
});