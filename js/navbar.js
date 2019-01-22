function writeBar(jsonObject){
  var navstring = '';
  var footString = '';
  var currentTime = new Date();
  var year = currentTime.getFullYear();
  var urlpath;
  urlpath = window.location.pathname;
  urlparsed = urlpath.split("/");
  page = urlparsed.slice(-1)[0];

  



  navstring += '<nav class="navbar navbar-expand-lg py-1">';
  navstring += '  <a class="navbar-brand" href="/index.html">' + jsonObject.name + '</a>';
  navstring += '  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">';
  navstring += '    <i class="fas fa-bars"></i>';
  navstring += '  </button>';
  navstring += '  <div class="collapse navbar-collapse" id="collapsibleNavbar">';
  navstring += '    <ul class="navbar-nav">';


  navstring += '      <li class="nav-item py-0">';
  if (page.indexOf("dex") != -1) {
    navstring += '      <a class="nav-link active" href="../index.html">';
  } else {
    navstring += '      <a class="nav-link" href="../index.html">';
  }
  navstring += '          Main page</a>';
  navstring += '      </li>';


  navstring += '      <li class="nav-item py-0">';
  if (page.indexOf("allery") != -1) {
    navstring += '      <a class="nav-link active" href="../html/gallery.html">';
  } else {
    navstring += '      <a class="nav-link" href="../html/gallery.html">';
  }
  navstring += '          Gallery</a>';
  navstring += '      </li>';

  navstring += '      <li class="nav-item py-0">';
  if (page.indexOf("tact") != -1) {
    navstring += '      <a class="nav-link active" href="../html/contact.html">';
  } else {
    navstring += '      <a class="nav-link" href="../html/contact.html">';
  }
  navstring += '          Contact / Social media</a>';
  navstring += '      </li>';

  navstring += '  </div>';
  navstring += '</nav>';
  navstring += '<br>';


  document.getElementById("navstring").innerHTML = navstring;

  footString += '<hr>';
  footString += '<div class="footer d-flex justify-content-center mb-3">';
  footString += '  <div class="p-2">';
  footString += '    ' + jsonObject.name + ' <i class="far fa-copyright"></i> '+ jsonObject.start_date +'-' + year;
  footString += '  </div>';
  /*footString += '  <div class="p-2"></div>';
  footString += '  <div class="p-2">';
  footString += '    This website is an opensource project available';
  footString += '    <a href="https://github.com/MaelAbgrall/frontend-Portfolio" data-toggle="tooltip" title="github">';
  footString += '      here';
  footString += '    </a>';
  footString += '  </div>';*/
  footString += '</div>';

  document.getElementById("footer").innerHTML = footString;
}



function init() {
  var jsonUrl = "../database/your_info.json"

  //from https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
  var loadedJSON;

  getData(dataURI = jsonUrl, function (response) {
    // Parse JSON string into object
    loadedJSON = JSON.parse(response);
    writeBar(loadedJSON);
  });
}

init();