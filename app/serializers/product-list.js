import DS from 'ember-data';

var ProductListSerializer =  DS.RESTSerializer.extend({
	
	extractArray: function(store, primaryType, payload) {

		if( payload.data === "ok" ){
			return;
		}
		
		var data = payload.data.map(function(product){
			return {
				id: product.product_id,	
				name: product.name,
				description: product.description,
				price: product.price,
				quantity: product.quantity,
				image: product.image_id,
				user: product.user_id,
				user_id: product.user_id,
			};
		}); 
		payload = {'product-list': data}; 
		return this._super(store, primaryType, payload);
	}
});
export default ProductListSerializer;
