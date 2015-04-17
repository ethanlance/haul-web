import Ember from 'ember';

export default Ember.Component.extend({
	
	tagName: 'div',

	classNames: 'fb-share-button',

	FB: null,
	
	url: null,

	layout: 'button_count',

	attributeBindings: [
		'data-href', 
		'data-layout'
	],



	didInsertElement: function() {

		this.set('url', this.get('data-href'));
		
	
		var _this = this;
 		this.socialApiClient.load().then(function(FB) {
 			_this.set('FB', FB);
 		
			
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


	// actions: {

	// 	btnClick: function() {
			
	// 		console.log("CLICK", this.socialApiClient);

	// 		// this.socialApiClient.clicked({
	// 	 //  		url: this.get('url'),
	// 	 //  		componentName: 'facebook-share'
	// 		// });
		
	// 		console.log("SHARE THIS " , this.get('url'));

	// 		var self = this;
	// 		function showDialog(FB) {
	// 			console.log("SHOW FB DIALOG");
	// 		  	FB.ui({
	// 			  		method: 'share_open_graph',
	//   					action_type: 'og.likes',
	// 			  		action_properties: JSON.stringify({
 //      						object:'https://alpha.haul.io/tim/6954075769798656_9365941812985856/penny-skateboard-arrowhead-mini-croozer',//self.get('url'),
 //      						image: "https://image.haul.io/images/4b281770-e476-11e4-93e4-d137d464a23d/medium",
 //      						title: "Test this out...."
 //  						})
	// 				},
	// 				function(response) {
	// 			  		if (response && !response.error_code) {
	// 						Ember.Logger.debug('Posting completed.');
	// 			  		} else {
	// 						Ember.Logger.error('Error while posting.');
	// 			  		}
	// 				}
	// 		  	);
	// 		}
			
	// 		if (this.FB) {
	// 		  	showDialog(this.FB);
	// 		} else {
	// 		  	this.socialApiClient.load().then(function(FB) {
	// 				showDialog(FB);
	// 		  	});
	// 		}
	// 		e.preventDefault();
	// 	}
	// },
});