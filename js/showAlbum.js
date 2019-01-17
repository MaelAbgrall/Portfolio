function writeAlbum(jsonObject) {
    document.getElementById("title").innerHTML = jsonObject.album_name;
    document.getElementById("date").innerHTML = jsonObject.date;
    document.getElementById("description").innerHTML = jsonObject.description;

    var albumString = "";
    for(item in jsonObject){
        //only keep objects (aka pictures and their name)
        if(typeof(jsonObject[item]) != "string"){
            albumString += '<div class="card img-fluid">';
            albumString += '    <img class="card-img-top" src="' + jsonObject[item][1] + '" alt="Card image" style="width:100%">';
            albumString += '</div>';
        }
    }
    document.getElementById("album").innerHTML = albumString;    
}



function init() {
    //from https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
    var params = {},
        albumid,
        parts,
        i,
        partslen,
        loadedJSON;

    //look in url variables an parse them
    if (location.search) {

        parts = location.search.substring(1).split('&');
        partslen = parts.length;

        for (i = 0; i < partslen; i++) {
            var nv = parts[i].split('=');
            if (!nv[0]) continue;
            params[nv[0]] = nv[1] || true;
        }
    }
    albumid = params.id;

    var jsonUrl = "/database/albums/" + albumid + ".json"

    //from https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
    var loadedJSON;

    getData(dataURI = jsonUrl, function (response) {
        // Parse JSON string into object
        loadedJSON = JSON.parse(response);
        writeAlbum(loadedJSON);
    });
}

init();