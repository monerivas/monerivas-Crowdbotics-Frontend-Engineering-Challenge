var lodingPage = function () {
    getingDataPromisses();
}


/*var getingData= function(){
    var url= "https://itunes.apple.com/search?term=taylor+swift&limit=200"
    $.getJSON(url, function(response){
        var generalData= response.results;
        generalData.forEach( function(item){
            var trackName= item.trackName;
            var collectionName= item.collectionName;
            var trackId= item.trackId;
            var img= item.artworkUrl60;
            
            console.log(trackName,collectionName, trackId, img );
            
            $("#musicContainer").text(trackName);
            $("#musicContainer").text(collectionName);
            $("#musicContainer").text(trackId);
            $("#musicContainer").text(img);
        })
    });
}*/

/*var getingDataPromisses = function () {
    $.get(url.results)
        .then(function (response) {
            var generalData = response.results;
            console.log(generalData);
        })
}*/


/*again*/
var url = "https://itunes.apple.com/search?term=taylor+swift&limit=1"

var getingDataPromisses = function (url) {
    return new Promise(function (resolve, reject) {
        var ajax = new XMLHttpRequest();
        ajax.open("GET", url);
        ajax.send();
        ajax.onreadystatechange = function (data) {
            if (ajax.readyState == 4) {
                resolve(JSON.parse(ajax.responseText));
            }
        }
    })
}

getingDataPromisses(url)
    .then(function (response) {
        var generalData = response.results;
        console.log(generalData);
        return generalData
    })
    .then(function (generalData) {
        generalData.forEach(function (item) {
            getingDataPromisses(generalData)
                .then(function (generalData) {
                    console.log(generalData + "second then")
                    printingData(generalData);
                })
        })
    })

var printingData = function (generalData) {
    console.log("entrando a printingData")

    var trackName = generalData.trackName;
    var collectionName = generalData.collectionName;
    var trackId = generalData.trackId;
    var img = generalData.artworkUrl60;
    
    
    var musicContainer= document.getElementById("musicContainer");
    var h5 = document.createElement('h5');
    h5.innerText = trackName;
    musicContainer.appendChild(h5);
}


$(document).ready(lodingPage);


/*
Examples of the jasons that i get from the API of two traks with the same name

{"wrapperType":"track", "kind":"song", "artistId":159260351, "collectionId":335627189, "trackId":335627698, "artistName":"Taylor Swift", "collectionName":"Fearless (Platinum Edition)", "trackName":"Love Story", "collectionCensoredName":"Fearless (Platinum Edition)", "trackCensoredName":"Love Story", "artistViewUrl":"https://itunes.apple.com/us/artist/taylor-swift/id159260351?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/album/love-story/id335627189?i=335627698&uo=4", "trackViewUrl":"https://itunes.apple.com/us/album/love-story/id335627189?i=335627698&uo=4", "previewUrl":"http://a408.phobos.apple.com/us/r30/Music/36/02/ea/mzm.lrnovvbj.aac.p.m4a", "artworkUrl30":"http://is5.mzstatic.com/image/thumb/Music/v4/46/46/cc/4646cc0d-e209-b82c-dff5-f9376647fb13/source/30x30bb.jpg", "artworkUrl60":"http://is5.mzstatic.com/image/thumb/Music/v4/46/46/cc/4646cc0d-e209-b82c-dff5-f9376647fb13/source/60x60bb.jpg", "artworkUrl100":"http://is5.mzstatic.com/image/thumb/Music/v4/46/46/cc/4646cc0d-e209-b82c-dff5-f9376647fb13/source/100x100bb.jpg", "collectionPrice":14.99, "trackPrice":1.29, "releaseDate":"2008-09-12T07:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":19, "trackNumber":9, "trackTimeMillis":235280, "country":"USA", "currency":"USD", "primaryGenreName":"Country", "isStreamable":true}, 
    
{"wrapperType":"track", "kind":"music-video", "artistId":159260351, "collectionId":335627189, "trackId":335628615, "artistName":"Taylor Swift", "collectionName":"Fearless (Platinum Edition)", "trackName":"Love Story", "collectionCensoredName":"Fearless (Platinum Edition)", "trackCensoredName":"Love Story", "artistViewUrl":"https://itunes.apple.com/us/artist/taylor-swift/id159260351?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/music-video/love-story/id335628615?uo=4", 
"trackViewUrl":"https://itunes.apple.com/us/music-video/love-story/id335628615?uo=4", 
"previewUrl":"https://video.itunes.apple.com/apple-assets-us-std-000001/Video/15/5a/90/mzm.ehjrwqvo..640x352.h264lc.u.p.m4v", "artworkUrl30":"http://is4.mzstatic.com/image/thumb/Video/v4/7f/71/7b/7f717bfd-63c5-922b-fc38-7cf28b959c17/source/30x30bb.jpg", "artworkUrl60":"http://is4.mzstatic.com/image/thumb/Video/v4/7f/71/7b/7f717bfd-63c5-922b-fc38-7cf28b959c17/source/60x60bb.jpg", "artworkUrl100":"http://is4.mzstatic.com/image/thumb/Video/v4/7f/71/7b/7f717bfd-63c5-922b-fc38-7cf28b959c17/source/100x100bb.jpg", "collectionPrice":14.99, "trackPrice":1.99, "releaseDate":"2009-01-01T08:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":30, "trackNumber":22, "trackTimeMillis":236485, "country":"USA", "currency":"USD", "primaryGenreName":"Country"}, */