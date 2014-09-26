/*global Products, Ember */
(function () {
    'use strict';

    //Models
	Haul.Products = DS.Model.extend({
	  title: DS.attr( 'string' ),
	  description: DS.attr( 'string' ),
	  price: DS.attr( 'string' )
	});

	//Fixture
	Haul.Products.FIXTURES = [
		{
			title: "Puma Contendors",
			id: "78978789",
			price: "100",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mauris libero, viverra vitae ornare non, malesuada a diam. Cras convallis turpis id enim iaculis mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec venenatis nisl justo. In dolor arcu, malesuada ac arcu laoreet, auctor vestibulum enim. Nulla facilisi. Nullam vitae erat elementum, rutrum neque ut, fermentum lacus."
		},
		{
			title: "New Balance Classics",
			id: "321324342343",
			price: "200",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mauris libero, viverra vitae ornare non, malesuada a diam. Cras convallis turpis id enim iaculis mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec venenatis nisl justo. In dolor arcu, malesuada ac arcu laoreet, auctor vestibulum enim. Nulla facilisi. Nullam vitae erat elementum, rutrum neque ut, fermentum lacus."
		},
		{
			title: "Superga High Top",
			id: "098031231",
			price: "150",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mauris libero, viverra vitae ornare non, malesuada a diam. Cras convallis turpis id enim iaculis mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec venenatis nisl justo. In dolor arcu, malesuada ac arcu laoreet, auctor vestibulum enim. Nulla facilisi. Nullam vitae erat elementum, rutrum neque ut, fermentum lacus."
		},
		{
			title: "Adidas Kicks",
			id: "7897589",
			price: "100",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mauris libero, viverra vitae ornare non, malesuada a diam. Cras convallis turpis id enim iaculis mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec venenatis nisl justo. In dolor arcu, malesuada ac arcu laoreet, auctor vestibulum enim. Nulla facilisi. Nullam vitae erat elementum, rutrum neque ut, fermentum lacus."
		},
		{
			title: "Nike Pro Jump Circuit",
			id: "325342343",
			price: "200",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mauris libero, viverra vitae ornare non, malesuada a diam. Cras convallis turpis id enim iaculis mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec venenatis nisl justo. In dolor arcu, malesuada ac arcu laoreet, auctor vestibulum enim. Nulla facilisi. Nullam vitae erat elementum, rutrum neque ut, fermentum lacus."
		},
		{
			title: "Asics Tiger Autumn",
			id: "2231",
			price: "150",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mauris libero, viverra vitae ornare non, malesuada a diam. Cras convallis turpis id enim iaculis mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec venenatis nisl justo. In dolor arcu, malesuada ac arcu laoreet, auctor vestibulum enim. Nulla facilisi. Nullam vitae erat elementum, rutrum neque ut, fermentum lacus."
		}
	];




})();