import Ember from 'ember';

export default Ember.Component.extend({

	post: null,

	src: null,

	type: false, 

	shareUrl: false,

	urlBinding: 'post.url',

	titleBinding: 'post.subject',

	imageBinding: 'post.image.large',

	makeButton: function() {

		var type = this.get('type');

		var url;
		if( type === "facebook") {
			this.set("src", "/assets/images/social/facebook_square.png");
			url = "http://www.facebook.com/share.php?u="+ this.get('url') + "&title=" + this.get('title');
			this.set("shareUrl", url );
		}

		if( type === "twitter") {
			this.set("src", "/assets/images/social/twitter_square.png");
			url = "http://twitter.com/intent/tweet?status="+ this.get('title') +"+"+ this.get('url');
			this.set("shareUrl", url );
		}

		if( type === "pinterest" && this.get('image') ) {
			this.set("src", "/assets/images/social/pinterest_square.png");
			url = "http://pinterest.com/pin/create/bookmarklet/?media="+ this.get('image') +"&url="+ this.get('url') + "&is_video=false&description=" + this.get('title');
			this.set("shareUrl", url );
		}


	}.on('didInsertElement').observes('image'),

	actions: {
		btnClick: function() {
			var shareUrl = this.get('shareUrl');
			if(shareUrl) {

				var height = 400;
				var width = 500;

				var d = window.innerWidth / 2;
				var left = d - (width / 2);

				var d = window.innerHeight / 2;
				var top = d - (height / 2);



				var pos = "width="+width+" height="+height+" top="+top+" left=" +left;
				window.open(shareUrl, 'Share', pos);
			}
		}
	}
});