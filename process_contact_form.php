<?php
// Database connection parameters
$db_host = "jn";
$db_user = "NAGA";
$db_pass = "jaganjn@123";
$db_name = "naga";

// Connect to the database
$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Insert data into the database
    $sql = "INSERT INTO contact_form (name, email, message) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    
    // Check if the prepared statement is successful
    if ($stmt) {
        $stmt->bind_param("sss", $name, $email, $message);

        if ($stmt->execute()) {
            echo "Message sent successfully!";
        } else {
            echo "Error: " . $stmt->error;
        }

        $stmt->close();
    } else {
        echo "Error in preparing the SQL statement.";
    }
}

// Close the database connection
$conn->close();
?>
