import Ember from 'ember';


export default Ember.Handlebars.makeBoundHelper(function(text) {
    if( Ember.isEmpty(text) ){
    	return text;
    }

    text = moment.unix(text).format('MM-DD-YYYY');

    return new Ember.Handlebars.SafeString(text);
});