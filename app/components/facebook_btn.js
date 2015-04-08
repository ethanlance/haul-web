import Ember from 'ember';

export default Ember.Component.extend({
	
	tagName: 'div',

	classNames: 'fb-share-button',
	
	attributeBindings: [
		'data-href', 
		'data-layout'
	],

	didInsertElement: function() {
		
		var _this = this;
		
    	this.socialApiClient.load().then(function(FB) {
			
      		if (_this._state !== 'inDOM') {
      			return; 
      		}
			
      		var attrs = [];

			attrs.push('data-href="' + _this.get('data-href') + '"');

			attrs.push('data-layout="' + _this.get('data-layout') + '"');
			
      		_this.$().html('<div class="fb-share-button" ' + attrs.join(' ') +'></div>');

      		FB.XFBML.parse(_this.get('element'));

      		// Ember.run.later(function(){
      		// 	console.log("$('.fb-share-button span')", $('.fb-share-button').find('span'));
      		// 	$('.fb-share-button').find('span').css('margin-top', '-30px');
      		// }, 300);
    	});
		
	},


	showShareDialog: Ember.on('click', function(e){
		this.socialApiClient.clicked({
	  		url: this.get('url'),
	  		componentName: 'facebook-share'
		});
	

		var self = this;
		function showDialog(FB) {
		  	FB.ui({
			  		method: 'share',
			  		href: self.get('url'),
				},
				function(response) {
			  		if (response && !response.error_code) {
						Ember.Logger.debug('Posting completed.');
			  		} else {
						Ember.Logger.error('Error while posting.');
			  		}
				}
		  	);
		}
		
		if (this.FB) {
		  	showDialog(this.FB);
		} else {
		  	this.socialApiClient.load().then(function(FB) {
				showDialog(FB);
		  	});
		}
		e.preventDefault();

	})

});