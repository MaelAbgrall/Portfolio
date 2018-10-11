var albums, i, x = "";
albums = {
	"album5":
		{
			"id": "5",
			"name": "drone",
			"year": "2016",
			"month": "august",
			"cover": "https://i.imgur.com/bPBaO2P.jpg",
			"tags": ["france", "paris"]
		},
	"album4":
		{
			"id": "4",
			"name": "drone",
			"year": "2016",
			"month": "august",
			"cover": "https://i.imgur.com/MN9tce8.jpg",
			"tags": ["france", "drone"]
		},
	"album3":
		{
			"id": "3",
			"name": "fjord",
			"year": "2016",
			"month": "august",
			"cover": "https://www.w3schools.com/w3css/img_fjords.jpg",
			"tags": ["fjord", "sky"]
		},
	"album2":
		{
			"id": "2",
			"name": "lion",
			"year": "2016",
			"month": "august",
			"cover": "https://i.imgur.com/sXG9IHW.jpg",
			"tags": ["lion", "color"]
		},
	"album1":
		{
			"id": "1",
			"name": "train",
			"year": "2016",
			"month": "august",
			"cover": "https://www.50-best.com/images/phone_wallpapers_and_backgrounds/train_coming.jpg",
			"tags": ["smoke", "train"]
		}
};



for (i in albums) {
	x += '<a href="/gallery/show?id=' + albums[i].id + '" class="hover">';
	x += '<div class="card img-fluid">';
	x += '<img class="card-img-top" src="' + albums[i].cover + '" alt="Card image" style="width:100%">';
	x += '<div class="overlay">';
	x += '<h4 class="text">' + albums[i].name + '<br>(' + albums[i].month + ',' + albums[i].year + ')</h4>';
	x += '</div>';
	x += '</div>';
	x += '</a>';
}

document.getElementById("album").innerHTML = x;
