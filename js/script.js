function initMap(){
    var home = { lat: 42.1216460249943, lng: -87.93092257308406 };
        var map = new google.maps.Map(document.getElementById("map"), {
          zoom: 10,
          center: home,
        });
        var marker1 = new google.maps.Marker({
          position: home,
          map: map,
        });
        var loc2 = {lat: 42.08033, lng: -87.75379};
        var marker2 = new google.maps.Marker({
            position: loc2,
            map: map,
          });
          var loc3 = {lat: 41.83501, lng:  -87.62697};
        var marker3 = new google.maps.Marker({
            position: loc3,
            map: map,
          });
          var loc4 = {lat: 41.83012, lng: -87.63383};
        var marker4 = new google.maps.Marker({
            position: loc4,
            map: map,
          })
  }
    google.maps.event.addDomListener(window, 'load', initMap);