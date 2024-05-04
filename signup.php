<?php
include("connection.php");
if(isset($_POST['submit'])) { 
    $username = $_POST['user'];
    $number = $_POST('number');
    $password = $_POST('password');
    $cpassword = $_POST('cpassword');


    $sql="select * from signup where username ='$username'";
    $result = mysqli_query($conn, $sql);
    $count_user = mysqli_num_rows($result);

    $sql="select * from signup where username ='$number'";
    $result = mysqli_query($conn, $sql);
    $count_number = mysqli_num_rows($result);

    if($count_user == 0 & $count_number == 0){
        if($password==$cpassword) {
            $hash = password_hash($password, PASSWORD_DEFAULT);
            $sql = "INSERT INTO signup(username, number, password) VALUES ('$username','$number', '$hash')";
            $result = mysqli_query($conn, $sql);
            if($result){
                header("Location: welcome.php");
            }
        }
    }
    else{
        if($count_user>0){
            echo'<script>
            window.location.href ="index.php";
            alert("Username already exists")
            </script>';
        }
        if($count_number>0){
            echo'<script>
            window.location.href ="index.php";
            alert("Phone number already exists")
            </script>';
        }
    }

}

?>