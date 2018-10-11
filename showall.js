var fullalbums, i, x = "";
fullalbums = {
  "album5":
    {
      "id": "5",
      "name": "drone",
      "picture3": {
        "name": "",
        "thumbnail": "hello",
        "link": ""
      },
      "picture2": {
        "name": "",
        "thumbnail": "",
        "link": ""
      },
      "picture1": {
        "name": "",
        "thumbnail": "",
        "link": ""
      }
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




//from https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
var params = {};

if (location.search) {
  var parts = location.search.substring(1).split('&');

  for (var i = 0; i < parts.length; i++) {
    var nv = parts[i].split('=');
    if (!nv[0]) continue;
    params[nv[0]] = nv[1] || true;
  }
}
var albumid = params.id;


for (i in fullalbums) {
  if (fullalbums[i].id == albumid) {
    document.getElementById("title").innerHTML = fullalbums[i].name;
    for (j in fullalbums[i].picture) {
      console.log(fullalbums[i].picture[j].thumbnail);
      document.getElementById("pictures").innerHTML = fullalbums[i].picture[j].thumbnail;
    }
    x += '<a href="/gallery/show?id=' + fullalbums[i].id + '" class="hover">';
    x += '<div class="card img-fluid bg-dark">';
    x += '<img class="card-img-top" src="' + fullalbums[i].cover + '" alt="Card image" style="width:100%">';
    x += '</div>';
    x += '</a>';
  }
}


//document.getElementById("pictures").innerHTML = x;