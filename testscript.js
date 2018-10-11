function loadJSON(fileid, callback) {

  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  filelocation = '/albums/' + fileid + '.json';
  xobj.open('GET', filelocation, true); // Replace 'my_data' with the path to your file
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
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

  loadJSON(fileid = albumid, function (response) {
    // Parse JSON string into object
    loadedJSON = JSON.parse(response);
    console.log(loadedJSON.name);
  });
}







init();



//var myjson = JSON.parse(xobj.responseText);
//console.log("hello, ", myjson.name)

/*
for (var i=0, item; item = list[i]; i++) {
  // Look no need to do list[i] in the body of the loop
  console.log("Looping: index ", i, "item " + item.a);
}*/