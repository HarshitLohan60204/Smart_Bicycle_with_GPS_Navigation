var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var totalItems = 5; // Total number of items
var popupContent = "<p>Total Items: " + totalItems + "</p><button id='consumeButton'>Consume</button>";

var popup = L.popup({
    className: 'custom-popup', // Adding a custom class to style the popup
    closeButton: false // Optionally, to hide the close button
})
    .setLatLng([51.5, -0.09])
    .setContent(popupContent)
    .openOn(map);

// Event listener for the consume button
document.getElementById('consumeButton').addEventListener('click', function() {
    if (totalItems > 0) {
        totalItems--;
        popup.setContent("<p>Total Items: " + totalItems + "</p><button id='consumeButton'>Consume</button>");
        // Optionally, perform other actions when an item is consumed
    } else {
        alert("No items left to consume!");
    }
});
