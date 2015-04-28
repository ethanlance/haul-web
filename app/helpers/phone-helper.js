import Ember from 'ember';


export default Ember.Handlebars.makeBoundHelper(function(text) {
    if( Ember.isEmpty(text) ){
    	return text;
    }
console.log("TEXT", text)
    text = $.inputmask.format(text, {  mask:"999-999-9999"});
console.log("TEXT", text)
    return new Ember.Handlebars.SafeString(text);
});