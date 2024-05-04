<?php

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
	margin:0;
	padding:0;
}

.sidebar {
        height: 100%;
        width: 250px;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #051248;
        padding-top: 20px;
    }
    
    /* Style for links in the sidebar */
    .sidebar a {
        padding: 10px 15px;
        text-decoration: none;
        font-size: 18px;
        color: #818181;
        display: block;
    }
    

.website-container {
  display: grid;
 	grid-gap: 0rem;
	grid-template-columns: repeat(1fr ) ;
}
.website-container > * {
	display: flex;
	height: 100vh;
}
h1 {
	font-weight: 600;
	font-size: 4vw;
}
.header {
  display:flex;
  justify-content: center;
  align-items: center;
  text-align:center;
  flex-direction: column;
}
button {

	background-color: #ee6654;
	font: inherit;
	margin-top: 30px;
  padding: 10px 20px;
	color: #fff;
  border-color:  transparent;
	border-radius: 3px;
}

    </style>
</head>
<body>
  <div class="sidebar">
  </div>
    <div class="website-container content">
        <header class="header">
          <div class="container-fluid">
            <div class="space"></div>
            <div class="title">
              
              <h1>Welcome </h1>
              <h2>To</h2>
              <h1>Smart Bicycle Navigation</h1>
            </div>      
            <div class="calltoaction">
              <a href="Map.html"><button type="submit">Get Started</button></a>
              
            </div>
          </div>
        </header>
        </div>
</body>
</html>