import Ember from 'ember';

export default Ember.Component.extend({
	

	tagName: 'div', 
  
	// Defaults to current url
  	url: null, 
  
  	text: null, 
  
  	via: null, 
  
  	related: null, 
  
  	hashtags: null, 
  
  	count: 'none', 


	didInsertElement: function() {
		var _this = this;
		this.socialApiClient.load().then(function(twttr) {
	  	if (_this._state !== 'inDOM') { return; }
	  		_this.twttr = twttr;
	  		_this.trigger('twitterLoaded');
		});
  	},

  	createTwitterShareButton: Ember.on('twitterLoaded', function() {
	
		this.twttr.widgets.createShareButton(
			this.get('url'),
			this.get('element'), {
				count: this.get('count'),
				text: this.get('text')
	  		}).then(function (/*el*/) {
	  	});
  	})
});