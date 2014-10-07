//FIXTURE TEST DATA:
	Haul.User.FIXTURES = [
	  {
	    id: 1,
	    name: 'Jon Snow',
	    slug: 'jonsnow',
	    picture: 'http://www.top-ten.tv/wp-content/uploads/2013/01/image4.jpeg',
	    products: [1,2,3,4,5,],
	    images: [1,2,3,4,5,6,7,8,9,10]
	  }, {
	    id: 2,
	    name: 'Jaime Lannister',
	    slug: 'thekingslayer',
	    picture: 'http://www.cosplayisland.co.uk/files/costumes/358/53464/jaime-lannister-1024.jpg',
	    products: [6],
	    images: [11,12]
	  }, {
	    id: 3,
	    name: 'Tyrion Lannister',
	    slug: 'tyrionl',
	    picture: 'http://4.bp.blogspot.com/-XuFyPnIQKnA/UBKlhJi1-KI/AAAAAAAAAQo/SrtvhFElX0A/s1600/Game-of-Thrones-Tyrion-Lannister.png',
	    products: [],
	    images: []
	  }, {
	    id: 4,
	    name: 'Cersei Lannister',
	    slug: 'cerseil',
	    picture: 'https://lh5.googleusercontent.com/-R_3u3oMiJZ0/AAAAAAAAAAI/AAAAAAAAAAA/-jl9VTR28bc/photo.jpg',
	    products: [],
	    images: []
	  }, {
	    id: 1617320006909952,
	    name: 'Iron Man',
	    slug: 'ironman',
	    picture: '',
	    products: [],
	    images: [16,17,18]
	  }
	];


	Haul.Comment.FIXTURES = [
		{id:1, product:1, user:3, body:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."},
		{id:2, product:1, user:4, body:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."},
		{id:3, product:1, user:3, body:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."},
		{id:4, product:1, user:4, body:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."},
		{id:5, product:1, user:2, body:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."},
	];

	Haul.Image.FIXTURES = [
		{id:2, src: "http://nk_wp_media.s3.amazonaws.com/files/2014/09/Concepts-x-Vans-Syndicate-Old-Skool-Rat-Hunter-2-e1412099665792.jpg"},
		{id:3, src: "http://nk_wp_media.s3.amazonaws.com/files/2014/09/Concepts-x-Vans-Syndicate-Old-Skool-Rat-Hunter-3-e1412099680312.jpg"},
		{id:4, src: "http://nk_wp_media.s3.amazonaws.com/files/2014/09/Concepts-x-Vans-Syndicate-Old-Skool-Rat-Hunter-5-e1412099715812.jpg"},
		{id:5, src: "http://nk_wp_media.s3.amazonaws.com/files/2014/09/Concepts-x-Vans-Syndicate-Old-Skool-Rat-Hunter-7-e1412099748712.jpg"},
		
		{id:6, src: "http://nk_wp_media.s3.amazonaws.com/files/2013/11/adidas-originals-superstar-80s-snakeskin-1.jpg"},
		{id:7, src: "http://nk_wp_media.s3.amazonaws.com/files/2013/11/adidas-originals-superstar-80s-snakeskin-2.jpg"},

		{id:8, src: "http://nk_wp_media.s3.amazonaws.com/files/2014/09/a-closer-look-at-the-nike-lebron-12-nsrl-2-700x357.jpg"},
		{id:9, src: "http://nk_wp_media.s3.amazonaws.com/files/2014/09/a-closer-look-at-the-nike-lebron-12-nsrl-1.jpg"},
		{id:10, src: "http://nk_wp_media.s3.amazonaws.com/files/2014/09/a-closer-look-at-the-nike-lebron-12-nsrl-3.jpg"},

		{id:11, src: "http://nk_wp_media.s3.amazonaws.com/files/2014/09/asics-chrismas-pack-lead-700x357.jpg"},
		{id:12, src: "http://nk_wp_media.s3.amazonaws.com/files/2014/09/ASICS-Christmas-Pack-1.jpg"},

		{id:13, src: "http://nk_wp_media.s3.amazonaws.com/files/2014/09/Converse-Chuck-Taylor-All-Star-Color-Weave-Collection-1-700x357.jpg"},
		{id:14, src: "http://nk_wp_media.s3.amazonaws.com/files/2014/09/Converse-Chuck-Taylor-All-Star-Color-Weave-Collection-2-e1411665415840.jpg"},
		

		{id:15, src: "http://nk_wp_media.s3.amazonaws.com/files/2014/09/starcow-new-balance-1500-pack-1-700x357.jpg"},

		{id:16, src: "http://www.journeys.com/images/products/1_325584_FS.JPG"},
		{id:17, src: "http://www.journeys.com/images/products/1_325584_FS_ALT2.JPG"},
		{id:18, src: "http://www.journeys.com/images/products/1_325584_FS_ALT3.JPG"},

	];

	//Fixture
	Haul.Product.FIXTURES = [
		{
			user: 1,
			title: "Vans Contendors",
			slug: "vanscontendors",
			id: 1,
			comments:[1,2,3,4,5],
			images:[2,3,4,5],
			price: "100",
			sold: false,
			description: "Hello ipsum dolor sit amet, consectetur adipiscing elit. Praesent mauris libero, viverra vitae ornare non, malesuada a diam. Cras convallis turpis id enim iaculis mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec venenatis nisl justo. In dolor arcu, malesuada ac arcu laoreet, auctor vestibulum enim. Nulla facilisi.\n\n Nullam vitae erat elementum, rutrum neque ut, fermentum lacus."
		},
		{	
			user: 1,
			title: "New Balance Classics",
			slug: "newbalanceclassics",
			id: 2,
			images:[15],
			price: "200",
			sold: false,
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mauris libero, viverra vitae ornare non, malesuada a diam. Cras convallis turpis id enim iaculis mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec venenatis nisl justo. In dolor arcu, malesuada ac arcu laoreet, auctor vestibulum enim. Nulla facilisi. Nullam vitae erat elementum, rutrum neque ut, fermentum lacus."
		},
		{	
			user: 1,
			title: "Converse High Top",
			slug: "conversehightops",
			id: 3,
			images:[13,14],
			price: "150",
			sold: false,
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mauris libero, viverra vitae ornare non, malesuada a diam. Cras convallis turpis id enim iaculis mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec venenatis nisl justo. In dolor arcu, malesuada ac arcu laoreet, auctor vestibulum enim. Nulla facilisi. Nullam vitae erat elementum, rutrum neque ut, fermentum lacus."
		},
		{
			user: 1,
			title: "Adidas Kicks",
			slug: "adidaskicks",
			id: 4,
			images:[6,7],
			price: "100",
			sold: false,
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mauris libero, viverra vitae ornare non, malesuada a diam. Cras convallis turpis id enim iaculis mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec venenatis nisl justo. In dolor arcu, malesuada ac arcu laoreet, auctor vestibulum enim. Nulla facilisi. Nullam vitae erat elementum, rutrum neque ut, fermentum lacus."
		},
		{
			user: 1,
			title: "Nike Pro Jump Circuit",
			slug: "nikeprojumpcirc",
			id: 5,
			images:[8,9,10],
			price: "200",
			sold: false,
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mauris libero, viverra vitae ornare non, malesuada a diam. Cras convallis turpis id enim iaculis mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec venenatis nisl justo. In dolor arcu, malesuada ac arcu laoreet, auctor vestibulum enim. Nulla facilisi. Nullam vitae erat elementum, rutrum neque ut, fermentum lacus."
		},
		{
			user: 1,
			title: "Asics Tiger Autumn",
			slug: "asicstigerautum",
			id: 6,
			images:[11,12],
			price: "150",
			sold: true,
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mauris libero, viverra vitae ornare non, malesuada a diam. Cras convallis turpis id enim iaculis mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec venenatis nisl justo. In dolor arcu, malesuada ac arcu laoreet, auctor vestibulum enim. Nulla facilisi. Nullam vitae erat elementum, rutrum neque ut, fermentum lacus."
		}
	];


