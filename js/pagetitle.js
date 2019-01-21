function changeTitle(jsonObject) {
    //name as referenced in your_info.json
    var titleString = jsonObject.name;

    //url parsing
    var urlpath;
    urlpath = window.location.pathname;
    urlparsed = urlpath.split("/");
    page = urlparsed.slice(-1)[0];

    if (page.indexOf("lbum") != -1) {
        titleString += " - Album";
    }

    if (page.indexOf("ndex") != -1) {
        titleString += " - Home";
    }

    if (page.indexOf("allery") != -1) {
        titleString += " - Gallery";
    }

    if (page.indexOf("ontact") != -1) {
        titleString += " - Contact";
    }

    document.title = titleString;
}



function init() {
    var jsonUrl = "/database/your_info.json"

    //from https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
    var loadedJSON;

    getData(dataURI = jsonUrl, function (response) {
        // Parse JSON string into object
        loadedJSON = JSON.parse(response);
        changeTitle(loadedJSON);
    });
}

init();