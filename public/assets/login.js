$(document).ready(function(){
    var location =function(){
        var pos;
        console.log("f");
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
          pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            $.ajax({
                type: 'POST',
                url: '/login',
                data: pos
              });
              return false;
         }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
        }
    };
    var myVar;
    $('#start').on('click',function(){
         myVar = setInterval(location,2000);
         console.log('e');
    });
    $('#stop').on('click',function(){
        console.log("d");
        clearInterval(myVar);
    });
});