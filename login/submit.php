<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get the values of the radio buttons
    $name = $_POST["name"];
    $opt = $_POST["options"];
    $calender = $_POST["calender"];
    $mob = $_POST["mob"];
    $email = $_POST["email"];
    $pass = $_POST["password"];
    $Course = $_POST["Course"];
    $states = $_POST["states"];
    $city = $_POST["City"];


    // Database connection settings
    $servername = "localhost";
    $username = "root";        // Change to your database username
    $password = "";            // Change to your database password
    $dbname = "userdata";          // Change to your database name

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare the SQL statement to insert data
    $sql = "INSERT INTO details(name , Gender , DOB , Mob , Email , Password ,  Course_Name , State , City) VALUES (? , ? , ? , ? , ? , ? , ? , ? , ?)";
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        // Bind the parameters and execute the statement
        $stmt->bind_param("sssssssss", $name, $opt , $calender , $mob , $email , $pass , $Course , $states , $city );
        if ($stmt->execute()) {
            header("Location: login2.html");
        } else {
            echo "Error: " . $stmt->error;
        }
        $stmt->close();
    } else {
        echo "Error preparing statement: " . $conn->error;
    }

    // Close the connection
    $conn->close();
}
?>
