let marker, circle,zoomed;

var locations1 = [{ lat: 30.739775, lng: 76.775266, available:10}];
 var locations2 = [ { lat: 30.752935, lng: 76.797310, available:10}]; 
 var locations3 = [{lat: 30.756726,lng: 76.786329,  available:10}];
 var locations4 = [{ lat: 30.731775,lng: 76.731383, available:10}];
 var locations5 = [ {lat:30.690297,lng: 76.766545, available:10}];
 var locations6 = [ {lat: 30.723506,lng: 76.807726,available:10}];
 var locations7 = [ {lat: 30.725169,lng: 76.751189, available:10}];

    // Create markers for each location and add them to the map
    locations1.forEach(function(location) {
      var marker = L.marker([location.lat, location.lng]).addTo(map);
      var popupContent = `
    <div style="padding: 5px; background-color: #fff;">
        <h2 style="color: #333;">Sector 17</h2>
        <p style="font-size: 12px;">Our stand offers organized parking for cyclists, ensuring easy access and maneuverability.</p>
        <img src="stand1.avif" alt="Image" style="width: 200px; height: auto;"><br>
        
        <button onclick="redirecToHTMLFile1()" style="background-color: #007bff; color: #fff; padding: 5px 15px; border: none; cursor: pointer;border-radius: 4px; margin-left:65px">Rent</button>
       
<
      
    </div>
`;
  
  var popupOptions = {
      maxWidth: 200,
      minWidth: 100,
      closebutton: false

  };
  
  marker.bindPopup(popupContent, popupOptions).closePopup();
  
  
    });

    function redirectToHTMLFile1() {
      // Redirect to the desired HTML file
      window.location.href = "new1.html";
  }

    locations2.forEach(function(location) {
      var marker = L.marker([location.lat, location.lng]).addTo(map);
      var popupContent = `
    <div style="padding: 5px; background-color: #fff;">
        <h2 style="color: #333;">Sector 4</h2>
        <p style="font-size: 12px;">Our stand offers organized parking for cyclists, ensuring easy access and maneuverability.</p>
        <img src="stand1.avif" alt="Image" style="width: 200px; height: auto;"><br>
        <p >Available Cycles:20</p><br>
        <button onclick="redirectToHTMLFile2()" style="background-color: #007bff; color: #fff; padding: 5px 10px; border: none; cursor: pointer;border-radius: 4px; margin-left:70px">Rent</button>
        
    </div>
`;
  
  var popupOptions = {
      maxWidth: 200,
      minWidth: 100,
      closebutton: false

  };
  
  marker.bindPopup(popupContent, popupOptions).closePopup();
  
  
    });

    function redirectToHTMLFile2() {
      // Redirect to the desired HTML file
      window.location.href = "new2.html";
  }

    locations3.forEach(function(location) {
      var marker = L.marker([location.lat, location.lng]).addTo(map);
      var popupContent = `
    <div style="padding: 5px; background-color: #fff;">
        <h2 style="color: #333;">Sector 11</h2>
        <p style="font-size: 12px;">Our stand offers organized parking for cyclists, ensuring easy access and maneuverability.</p>
        <img src="stand1.avif" alt="Image" style="width: 200px; height: auto;"><br>
        <p >Available Cycles:20</p><br>
        <button onclick="redirectToHTMLFile3()" style="background-color: #007bff; color: #fff; padding: 5px 10px; border: none; cursor: pointer;border-radius: 4px; margin-left:65px">Rent</button>
    </div>
`;
  
  var popupOptions = {
      maxWidth: 200,
      minWidth: 100,
      closebutton: false

  };
  
  marker.bindPopup(popupContent, popupOptions).closePopup();
  
  
    });

    function redirectToHTMLFile3() {
      // Redirect to the desired HTML file
      window.location.href = "new3.html";
  }

    locations4.forEach(function(location) {
      var marker = L.marker([location.lat, location.lng]).addTo(map);
      var popupContent = `
    <div style="padding: 5px; background-color: #fff;">
        <h2 style="color: #333;">Sector 41</h2>
        <p style="font-size: 12px;">Our stand offers organized parking for cyclists, ensuring easy access and maneuverability.</p>
        <img src="stand1.avif" alt="Image" style="width: 200px; height: auto;"><br>
        <p >Available Cycles:20</p><br>
        <button onclick="redirectToHTMLFile4()" style="background-color: #007bff; color: #fff; padding: 5px 10px; border: none; cursor: pointer;border-radius: 4px; margin-left:65px">Rent</button>
    </div>
`;
  
  var popupOptions = {
      maxWidth: 200,
      minWidth: 100,
      closebutton: false

  };
  
  marker.bindPopup(popupContent, popupOptions).closePopup();
  
  
    });

    function redirectToHTMLFile4() {
      // Redirect to the desired HTML file
      window.location.href = "new.html";
  }

    locations5.forEach(function(location) {
      var marker = L.marker([location.lat, location.lng]).addTo(map);
      var popupContent = `
    <div style="padding: 5px; background-color: #fff;">
        <h2 style="color: #333;">Sector 46</h2>
        <p style="font-size: 12px;">Our stand offers organized parking for cyclists, ensuring easy access and maneuverability.</p>
        <img src="stand1.avif" alt="Image" style="width: 200px; height: auto;"><br>
        <p >Available Cycles:20</p><br>
        <button onclick="redirectToHTMLFile5()" style="background-color: #007bff; color: #fff; padding: 5px 10px; border: none; cursor: pointer;border-radius: 4px; margin-left:65px">Rent</button>
    </div>
`;
  
  var popupOptions = {
      maxWidth: 200,
      minWidth: 100,
      closebutton: false

  };
  
  marker.bindPopup(popupContent, popupOptions).closePopup();
  
  
    });

    function redirectToHTMLFile5() {
      // Redirect to the desired HTML file
      window.location.href = "new4.html";
  }

    locations6.forEach(function(location) {
      var marker = L.marker([location.lat, location.lng]).addTo(map);
      var popupContent = `
    <div style="padding: 5px; background-color: #fff;">
        <h2 style="color: #333;">Sector 26E</h2>
        <p style="font-size: 12px;">Our stand offers organized parking for cyclists, ensuring easy access and maneuverability.</p>
        <img src="stand1.avif" alt="Image" style="width: 200px; height: auto;"><br>
        <p >Available Cycles:20</p><br>
        <button onclick="redirectToHTMLFile6()" style="background-color: #007bff; color: #fff; padding: 5px 10px; border: none; cursor: pointer;border-radius: 4px; margin-left:65px">Rent</button>
    </div>
`;
  
  var popupOptions = {
      maxWidth: 200,
      minWidth: 100,
      closebutton: false

  };
  
  marker.bindPopup(popupContent, popupOptions).closePopup();
  
  
    });

    function redirectToHTMLFile6() {
      // Redirect to the desired HTML file
      window.location.href = "new5.html";
  }


    locations7.forEach(function(location) {
      var marker = L.marker([location.lat, location.lng]).addTo(map);
      var popupContent = `
    <div style="padding: 5px; background-color: #fff;">
        <h2 style="color: #333;">Sector 43</h2>
        <p style="font-size: 12px;">Our stand offers organized parking for cyclists, ensuring easy access and maneuverability.</p>
        <img src="stand1.avif" alt="Image" style="width: 200px; height: auto;"><br>
        <p >Available Cycles:20</p><br>
        <button onclick="redirectToHTMLFile7()" style="background-color: #007bff; color: #fff; padding: 5px 10px; border: none; cursor: pointer;border-radius: 4px; margin-left:65px">Rent</button>
    </div>
`;
  
  var popupOptions = {
      maxWidth: 200,
      minWidth: 100,
      closebutton: false

  };
  
  marker.bindPopup(popupContent, popupOptions).closePopup();
  
  
    });

    function redirectToHTMLFile7() {
      // Redirect to the desired HTML file
      window.location.href = "new6.html";
  }