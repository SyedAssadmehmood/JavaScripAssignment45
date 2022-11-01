function make_album(artist, title, track){
    if(track) {
        var obj = {
            artist_name: artist,
            music_title: title,
            track: track,
        };
    } else {
        var obj = {
            artist_name: artist,
            music_title: title,
        };
    }
    console.log(obj);
    return (obj)
}
var function1 = make_album('albert', 'thats my name', 'album-track');
var function2 = make_album('Ramees', 'song 2');
var function3 = make_album('artist', 'song 3');