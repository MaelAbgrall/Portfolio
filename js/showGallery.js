function writeCards(jsonObject) {
    var cardString = "";

    for (item in jsonObject) {        
        cardString += '<a href="../html/album.html?id=' + jsonObject[item].id + '" class="hover">';
        cardString += '    <div class="card img-fluid">';
        cardString += '        <img class="card-img-top" src="' + jsonObject[item].cover + '" alt="Card image">';
        cardString += '        <div class="overlay">';

        //check if the year and the month are specified, if not, the overlay won't print empty informations
        if(jsonObject[item].year){
            if(jsonObject[item].month){
                cardString += '<h4 class="text">' + jsonObject[item].name + '<br>(' + jsonObject[item].month + ', ' + jsonObject[item].year + ')</h4>';
            }

            if(jsonObject[item].month === ""){ //if month is empty
                cardString += '<h4 class="text">' + jsonObject[item].name + '<br>(' + jsonObject[item].year + ')</h4>';
            }
        }

        if(jsonObject[item].year === ""){ //if year is empty
            cardString += '<h4 class="text">' + jsonObject[item].name + '</h4>';
        }

        cardString += '        </div>';
        cardString += '    </div>';
        cardString += '</a>';
    }

    //document.getElementById('spinner').style.display = "none";
    
    document.getElementById("gallery").innerHTML = cardString;
}



function init() {
    var jsonUrl = "../database/album_reference.json"

    //from https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
    var loadedJSON;

    getData(dataURI = jsonUrl, function (response) {
        // Parse JSON string into object
        loadedJSON = JSON.parse(response);
        writeCards(loadedJSON);
    });
}

init();