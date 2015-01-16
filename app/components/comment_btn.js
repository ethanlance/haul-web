import Ember from 'ember';
import ScrolltoMixin from '../mixins/scrollto';

export default Ember.Component.extend(ScrolltoMixin, {
	totalBinding: "itemObject.commentCount.total",


	// isProcessing:false,

	// itemObjectBinding: "itemObject",
	// itemType: "products",
	// itemIdBinding: "itemObject.id",

	// contextObject: null,
	// contextType: null,
	// contextIdBinding: "contextObject.id",

 
	// userIdBinding: "session.currentUser.id",
	

	// type_map: {
	// 	"collections": "stores",
	// 	"products": "products",
	// 	"users": "users",
	// },

	// reverse_type_map: {
	// 	"stores": "collections",
	// 	"products": "products",
	// 	"users": "users"
	// },

	// key: function() {
	// 	return this.type_map[this.contextType] + ':' + this.contextId + ":" + this.itemType + ":" + this.itemId;
	// }.property('contextType', 'contextId', 'itemType', 'itemId'),


	// //Normally a Product
	// itemChanged: function() {
	// 	//Get Ref Type: 
	// 	// var model = String(this.itemObject.constructor);
	// 	// var name = model.split(':');
 //  //       var itemType = Ember.String.pluralize(Ember.String.camelize(name[1])); 
 //  //       this.set('itemType', itemType);
	// }.observes('itemObject'),


	// //Normally a Collection or User
	// contextChanged: function() {
	// 	//Get Ref Type: 
	// 	var model = String(this.get('contextObject').get('constructor'));
	// 	var name = model.split(':');
	// 	var contextType = Ember.String.pluralize(Ember.String.camelize(name[1]));
 //        this.set('contextType', contextType);
	// }.observes('contextObject'),


	// start: function() {

	// 	this.itemChanged();
	// 	this.contextChanged();

	// 	var store = this.container.lookup('store:main');
	// 	var key = this.get('key');
	// 	//this.set('promiseCount', store.find('product-comment-count', key ));

	// }.on('init'),


	actions: {
		scrollTo: function() { 
            this.scrollTo('#leaveComment', 200);
		}
	}
});