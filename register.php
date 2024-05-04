<?php
include 'connect.php';

if(isset($_POST['signUp'])){
    $username=$_POST['username'];
    $email=$_POST['email'];
    $password=$_POST['password'];
    $password=md5($password);

    $checkEmail="Select * From users where email='$email'";
    $result=$conn->query($con,$checkEmail);
    if($result->num_rows>0){
        echo "Email Address Already Exist !"
    }
    else{
        $insertQuery="INSERT INTO users (username,email,password) VALUES ('$username','$email','$password')";
        if($conn->query($insertQuery)){
            header("location:index.php");
        }
        else{
            echo "Error : ".$conn->error;
        }
    }
}

if(isset($_POST['signIn'])){
    $email=$_POST['email'];
    $password=$_POST['password'];
    $password=md5($password);


    $sql= "SELECT * FROM users WHERE email='$email' AND password='$password'";
    $result=$conn->query($sql);
    if($result->num_rows>0){
        session_start();
        $row=$result->fetch_assoc();
        $_SESSION['email']=$row['email'];
        header("location:welcome.php");
    }
    else{
        echo "Invalid Email or Password";
       
    }
}
?>