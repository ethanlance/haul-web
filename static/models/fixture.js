Haul.ProductFixture = DS.Model.extend({
	title: DS.attr('string'),
	image: DS.attr('string')
})

Haul.ProductFixtureAdapter = DS.FixtureAdapter.extend({});


//Fixture
	Haul.ProductFixture.FIXTURES = [
		{
			id: 1,
			title: "Vans Contendors",
			image: "http://s3.amazonaws.com/static.haul.io/images/local/62873430-5ffd-11e4-90fa-ffc94a9ba289/thumb",
			
		},
		{	
			id: 2,
			title: "New Balance Classics",
			image: "http://s3.amazonaws.com/static.haul.io/images/local/6033f561-5ffd-11e4-90fa-ffc94a9ba289/thumb",
			
		},
		{	
			id: 3,
			title: "Converse High Top",
			image: "http://s3.amazonaws.com/static.haul.io/images/local/6033f560-5ffd-11e4-90fa-ffc94a9ba289/thumb",
			
		},
		{
			id: 4,
			title: "Adidas Kicks",
			image: "http://s3.amazonaws.com/static.haul.io/images/local/3b049c40-5ffd-11e4-90fa-ffc94a9ba289/thumb",
			
		},
		{
			id: 5,
			title: "Nike Pro Jump Circuit",
			image: "http://s3.amazonaws.com/static.haul.io/images/local/ae287890-5ffd-11e4-90fa-ffc94a9ba289/thumb",

		}
	];