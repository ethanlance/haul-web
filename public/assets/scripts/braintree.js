var js;
js = document.createElement('script');
$(js).attr({
	id: 'braintree',
	async: true,
		src: "https://js.braintreegateway.com/v2/braintree.js"
	}
);
$('head').append(js);