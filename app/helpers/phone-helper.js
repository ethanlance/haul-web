import Ember from 'ember';


export default Ember.Handlebars.makeBoundHelper(function(text) {
    if( Ember.isEmpty(text) ){
    	return text;
    }

    text = $.inputmask.format(text, {  mask:"999-999-9999"});

    return new Ember.Handlebars.SafeString(text);
});