var map = L.map('map').setView([51.505, -0.09], 13);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Define the start coordinates
    var start = L.latLng(51.5, -0.09);

    // Create routing control with start waypoint
    var control = L.Routing.control({
      waypoints: [
        start,
        // We leave the second waypoint empty for now
      ]
    }).addTo(map);

    // Get the user's current location and update the second waypoint with it
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;

      // Update the second waypoint with the live location
      control.setWaypoints([
        start,
        L.latLng(lat, lng)
      ]);
    }, function(error) {
      console.error('Error getting user location:', error);
    });