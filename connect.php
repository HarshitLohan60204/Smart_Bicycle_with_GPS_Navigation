<?php
$host = "localhost"; // Your server name may differ
$username = "root";         // User name
$password = "";             // Password
$db = "login";     // Database name

$conn=new mysqli($host,$username,$password,$db);

if($conn->connect_error){
    echo "Failed to connect DB".$conn->connect_error;
}
?>
