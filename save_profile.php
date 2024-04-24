<?php
// Connect to your MySQL database
$servername = "your_database_server";
$username = "your_database_username";
$password = "your_database_password";
$dbname = "your_database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve data from the POST request
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$profileImagePath = $_POST['profileImagePath'];

// Insert data into the profiles table
$sql = "INSERT INTO profiles (name, email, phone, address, profile_image_path) VALUES ('$name', '$email', '$phone', '$address', '$profileImagePath')";

if ($conn->query($sql) === TRUE) {
    echo "Profile saved successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

