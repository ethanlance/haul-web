import Ember from 'ember';
export default Ember.Component.extend({

	didInsertElement: function(){
		this.processMessage();
	},
	
	processMessage: function(key) {

		var el = $("#processLog");
console.log("EL", el);
		var string = this.get('messages')[key];
console.log("STRING", string);
		var p = document.createElement('p');
		
		p = $(p);
console.log("P", p);
		el.append(p)

		for( var i=0;  i<string.length; i++) {

			var character = string[i];
			
			//Ember.run.next(function(){

				var text = p.text() + character;
			console.log("Test", character);
				p.text(text);

			//}, 300);
		}
	},
});