var js;
js = document.createElement('script');
$(js).attr({
	id: 'braintree',
	async: true,
		src: "//assets.pinterest.com/js/pinit.js"
	}
);
$('head').append(js);