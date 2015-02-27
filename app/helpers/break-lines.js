import Ember from 'ember';

/*global Sanitize*/

//export default Ember.Handlebars.registerBoundHelper('breaklines', function(text) {
export default Ember.Handlebars.makeBoundHelper(function(text) {
    text = new Ember.Handlebars.SafeString(text);
    text = Ember.Handlebars.Utils.escapeExpression(text);
    text = text.replace(/(\r\n|\n|\r)/gm, '<br>');

    //console.log("TEXT", text)


    //function urlX(url) { if(/^https?:\/\//.test(url)) { return url }}
    //function idX(id) { console.log("    Bleep", id); return id; }

    //text = html_sanitize( text, urlX, idX );

    //console.log("SANITIZED", text)

// if(!Sanitize.Config) {
//   Sanitize.Config = {}
// }

// Sanitize.Config.RESTRICTED = {
//   elements: ['b', 'em', 'i', 'strong', 'u']       
// }

// var s = new Sanitize(Sanitize.Config.RESTRICTED);

// text = s.clean_node(text);

// console.log("CLEAN ", text);

    return new Ember.Handlebars.SafeString(text);
});
