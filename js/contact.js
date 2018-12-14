function writeData(jsonObject) {
    var baseString = '<div class="d-flex justify-content-center">';
    var endString = '</div>';

    // image
    var imageString = '<img src="' + jsonObject.profile_pic + '" class="img-thumbnail">';
    document.getElementById("picture").innerHTML = baseString + imageString + endString;

    // name / brand
    var nameString = '<h2>' + jsonObject.name + '</h2>';
    document.getElementById("name").innerHTML = baseString + nameString + endString;

    // phone
    var phoneString = '<p>' + jsonObject.phone + '</p>';
    document.getElementById("phone").innerHTML = baseString + phoneString + endString;

    // mail
    var mailString = '<p class="contact">' + jsonObject.mail + '</p>';
    document.getElementById("mail").innerHTML = baseString + mailString + endString;

    // instagram
    var instaString = '<a href="' + jsonObject.instagram + '" class="logo-btn">instagram <i class="fab fa-instagram"></i></a>';
    document.getElementById("instagram").innerHTML = baseString + instaString + endString;

}



function init() {
    var jsonUrl = "/database/your_info.json"

    //from https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
    var loadedJSON;

    getData(dataURI = jsonUrl, function (response) {
        // Parse JSON string into object
        loadedJSON = JSON.parse(response);
        writeData(loadedJSON);
    });
}

init();