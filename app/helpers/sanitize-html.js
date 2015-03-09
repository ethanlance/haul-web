import { sanitize } from 'ember-sanitize/utils/sanitize';
import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(html, configName, options) {

  if(Ember.isEmpty(html)){
    return new Ember.Handlebars.SafeString(html);
  }

  //console.log("HTML", html);
  html = html.replace(/<div>/g, "<p>");
  html = html.replace(/<\/div>/g, "</p>");
  html = html.replace(/\n/g, "<br>");
// console.log("HTML", html);
  if (arguments.length === 2) {
    options    = configName;
    configName = null;
  }

  var config;
  if (configName) {
    var data      = options.data;
    var container = this.container || (data && data.view && data.view.container);
    var config    = container.lookup("sanitizer:"+configName);
  }

  var sanitized = sanitize(html, config);

  //console.log("HTML CLEANED", sanitized);

  return new Ember.Handlebars.SafeString(sanitized);
});
