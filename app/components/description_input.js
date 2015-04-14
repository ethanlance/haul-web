import Ember from 'ember';
export default Ember.Component.extend({

	key: '¶',

	inputs: [],

	currentInput: false,

	rollupValue: '',

	sendInputValues: function() {

		var key = this.get('key');
		var inputs = this.get('inputs');
		var str ='';
		var val;
		inputs.forEach(function(input){
			val = input.value;
			
			if(val) {
				val = val.trim();
			}

			if(val) {
				str += val + key
			}
		});
		
		this.sendAction('descriptionChange', str);
	},

	didInsertElement: function(){

		var str = this.get('rollupValue');

		var rows = str.split(this.get('key'));

		for(var i=0; i<rows.length; i++) {
			this.createNewInput(rows[i]);
		}

	},//.observes('rollupValue'),

	createNewInput: function(text) {

		if( text === undefined ){
			text='';
		}

		var input = document.createElement('input');

		$(input).addClass('form-control margin-bottom');

		$(this.get('element')).append(input);

		input.value = text;

		this.get('inputs').pushObject(input);

		if( this.get('currentInput')) { 
			Ember.$(this.get('currentInput')).off('keydown');
		} 

		this.set('currentInput', input)

		Ember.$(this.get('currentInput')).on('keydown', Ember.run.bind(this, this.inputEntered));

		Ember.$(this.get('currentInput')).on('keyup', Ember.run.bind(this, this.sendInputValues));
	},

	inputEntered: function(e) {
		var s = e.currentTarget.value;
		if( s.length >= 1 ) {
			this.createNewInput();
		}
	}
});