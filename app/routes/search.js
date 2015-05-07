import Ember from 'ember';
import ResetScrollMixin from '../mixins/resetscroll';
export default Ember.Route.extend(ResetScrollMixin,{
	// model: function(params) { 
	// 	if( params.type === "tag" ){
	// 		console.log("BOOM", params)
	// 		return this.store.find('search-tag', {q:params.q});	
	// 	}else if( params.type === "post" ){
	// 		return this.store.find('search-post', {q:params.q});	
	// 	}else if( params.type === "user" ){
	// 		return this.store.find('search-user', {q:params.q});	
	// 	}else{
	// 		return ;
	// 	}
	// }
	renderTemplate: function() {
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
		this.render('search');
	},
});