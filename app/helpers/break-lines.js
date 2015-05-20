import Ember from 'ember';

/*global Sanitize*/

//export default Ember.Handlebars.registerBoundHelper('breaklines', function(text) {
export default Ember.Handlebars.makeBoundHelper(function(text) {
    text = new Ember.Handlebars.SafeString(text);
    text = Ember.Handlebars.Utils.escapeExpression(text);
    text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
    return new Ember.Handlebars.SafeString(text);
});
