import Ember from 'ember';
var $ = Ember.$; 
import auth from './../auth';


export default  Ember.ObjectController.extend({ 
	needs: ["auth"], 
	currentUser: Ember.computed.alias('controllers.auth.currentUser')
}); 



