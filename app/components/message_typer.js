import Ember from 'ember';
export default Ember.Component.extend({

	

	messageQueue: [],


	isTyping: false,

	isTypingChanged: function() {
		if( !this.get('isTyping') ){
			
			//anything in the messageQueue?
			if( !Ember.isEmpty(this.get('messageQueue'))) {
			
				var message = this.get('messageQueue').shift();

				this.processMessage(message);
			}

		}
	}.observes('isTyping'),
	

	typeClear: false,

	typeClearChanged: function() {
		if( this.get('typeClear') ) {
			this.clear();
		}
	}.observes('typeClear'),

	clear: function(){
		
		var el = $("#processLog");

		el.html("");

		this.set('typeClear', false);

		this.set('messageQueue', []);
	},


	typeMessage: [],

	typeMessageChanged: function() {

		var arr = this.get('typeMessage');
		var _this = this;
		
		if( !Ember.isEmpty(arr) ) {

			arr.forEach(function(item, index){
				arr.splice(index,1);
				_this.processMessage(item);
			});

			//this.set('typeMessage', [] );

		}

	}.observes('typeMessage.@each'),


	
	
	processMessage: function(string) {

		var el = $("#processLog");

		var p = document.createElement('p');
		
		p = $(p);

		el.append(p)	

		if( this.get('isTyping') ){

			this.get('messageQueue').push(string);

		}else{
			
			this.set('isTyping', true);			
			this.processLine(p,0,string);
		}

	},

	processLine: function(p,i,s) {
		
		var _this = this;

		Ember.run.later(function(){

			var text = p.text().replace('_','') + s[i] + '_';
			
			p.text(text);

			//Next character:
			i++;
			if( i<s.length) {
				_this.processLine(p,i,s);
			}else{
				_this.set('isTyping', false);
			}

		}, 50);
	},
});