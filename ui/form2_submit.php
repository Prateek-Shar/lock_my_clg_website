<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get the values of the radio buttons
    $option1 = isset($_POST['options1']) ? $_POST['options1'] : NULL; // Value of the "Yes" button
    $option2 = isset($_POST['options2']) ? $_POST['options2'] : NULL; // Value of the "No" button

    // Database connection settings
    $servername = "localhost";
    $username = "root";        // Change to your database username
    $password = "";            // Change to your database password
    $dbname = "demo";          // Change to your database name

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare the SQL statement to insert data
    $sql = "INSERT INTO form2(Is_Yes, Is_No) VALUES (?, ?)";
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        // Bind the parameters and execute the statement
        $stmt->bind_param("ss", $option1, $option2);
        if ($stmt->execute()) {
            header("Location: form3.html");
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
