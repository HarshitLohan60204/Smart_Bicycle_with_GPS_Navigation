

let marker, circle,zoomed;
function success(pos){

    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    const accuracy = pos.coords.accuracy;

    if(marker) {
        map.removeLayer(marker);
        map.removeLayer(circle);
    }

     marker = L.marker([lat, lng]).addTo(map);
     circle = L.circle([lat, lng], {radius: accuracy/32 }).addTo(map);

     if (!zoomed) {
        zoomed=map.fitBounds(circle.getBounds());
     }

     map.setView([lat, lng]);

}

function error(err) {
    if(err.code==1){
        alert("Please Allow Geolocation Access:");
    }else{
        alert("Cannot Get the Location");
    }
}