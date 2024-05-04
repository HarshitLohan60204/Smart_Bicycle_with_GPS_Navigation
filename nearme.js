function findNearestLocation() {
    // Initialize the map
    var map = L.map('map').setView([0, 0], 13);

    // Add a tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Get user's live location
    navigator.geolocation.getCurrentPosition(function(position) {
        var userLat = position.coords.latitude;
        var userLng = position.coords.longitude;

        // Add marker for user's live location
        var userMarker = L.marker([userLat, userLng]).addTo(map);

        // Example points of interest (replace with your own)
        var pointsOfInterest = [
            { name: "Point A", lat: 0.001, lng: 0.001 },
            { name: "Point B", lat: 0.002, lng: 0.002 },
            { name: "Point C", lat: 0.003, lng: 0.003 }
        ];

        // Calculate distances and find the nearest point of interest
        var nearestPoint = null;
        var minDistance = Infinity;
        pointsOfInterest.forEach(function(point) {
            var distance = Math.sqrt(Math.pow(userLat - point.lat, 2) + Math.pow(userLng - point.lng, 2));
            if (distance < minDistance) {
                minDistance = distance;
                nearestPoint = point;
            }
        });

        // Add marker for nearest point of interest
        var nearestMarker = L.marker([nearestPoint.lat, nearestPoint.lng]).addTo(map);
        nearestMarker.bindPopup(nearestPoint.name + "<br>Distance: " + minDistance.toFixed(2) + " units").openPopup();

        // Fit the map to show all markers
        var bounds = L.latLngBounds([userLat, userLng], [nearestPoint.lat, nearestPoint.lng]);
        map.fitBounds(bounds);
    });
}