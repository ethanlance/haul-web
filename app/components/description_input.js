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

		var input = document.createElement('textarea');

		$(input).addClass('description-input');

		$(this.get('element')).append(input);

		input.value = text;

		this.get('inputs').pushObject(input);

		if( this.get('currentInput')) { 
			Ember.$(this.get('currentInput')).off('keyup');
		} 

		this.set('currentInput', input)
	
		Ember.$(this.get('currentInput')).on('paste', Ember.run.bind(this, this.examinePaste));

		Ember.$(this.get('currentInput')).on('keyup', Ember.run.bind(this, this.inputEntered));

		Ember.$(this.get('currentInput')).on('blur', Ember.run.bind(this, this.sendInputValues));

		Ember.$(this.get('currentInput')).on('keypress', function(event) {
    		if (event.keyCode == 13) {
        		event.preventDefault();
    		}
		});
	
	},

	examinePaste: function(e) {
        $(e.target).unbind('keyup');
		$(e.target).keyup( Ember.run.bind(this, this.getInput) );
	},

	getInput: function(e) {
		var inputText = $(e.target).val();

		if( inputText == undefined || inputText.trim() === "" ) {
			return;
		}

        var lines = inputText.split('\n');

        $(e.target).val( lines[0] );

        for(var i=1; i<lines.length; i++) {
        	var line = lines[i].trim();
        	if( line ) {
        		this.createNewInput(line);
        	}
        }

        //and an empty one at the end.
        this.createNewInput();
	},

	inputEntered: function(e) {
		var s = e.currentTarget.value;
		if( s.length >= 1 ) {
			this.createNewInput();
		}
	}
});