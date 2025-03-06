<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    // Database connection settings
    $servername = "localhost";
    $username = "root";        // Change to your database username
    $password = "";            // Change to your database password
    $dbname = "demo";       // Change to your database name

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare the SQL statement to insert data
    $sql = "INSERT INTO form1 (Full_Name , Email , Mob) VALUES ('$name', '$email', '$phone')";

    // Execute the query
    if ($conn->query($sql) === TRUE) {
        header("Location: form2.html");
        exit(); // Stop further execution

    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    

    // Close the connection
    $conn->close();

}
?>
