var exercise = {};

// Adds markers to the map and into array
exercise.addMarkers = function(data){
    data.photos.photo.forEach(function(photo){
        exercise.addMarker(photo);
    });
};

exercise.addMarker = function(photo){
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(photo.latitude,photo.longitude),
        icon: {
            path:google.maps.SymbolPath.CIRCLE,
            fillColor: 'red',
            fillOpacity: 0.5,
            scale:7,
            strokeWeight:1
        },
        map: map,
        title: photo.title
    });
    markers.push(marker);
};

exercise.addPhotos = function(data){
    var html = exercise.buildHtmlForImages(data);
    document.getElementById('images').innerHTML = html;
};

exercise.buildHtmlForImages = function(data){

    // ------------------------------------------------
    //   YOUR CODE
    //     use forEach to construct html to
    //     display every image in flickr data
    // ------------------------------------------------

    //JM add:
    //console.log(data);
    //console.log(data.photos.photo[0].url_s);

    var wrapImgTag = function (element) {
        str = '<img src="' + element.url_s + '">';
        return str;
    };

    var imgstr = '';
    var pushArrayToStr = function (element){
        imgstr += '' + element;
        return imgstr
    };

    var imgSrcArray = data.photos.photo.map(wrapImgTag);
    imgSrcArray.forEach(pushArrayToStr);
    return imgstr;


};