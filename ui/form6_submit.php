<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the value of the selected radio button
    $option = isset($_POST['option2']) ? $_POST['option2'] : NULL;

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
    $sql = "INSERT INTO form6(Income) VALUES (?)";
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        // Bind the parameter and execute the statement
        $stmt->bind_param("s", $option);
        if ($stmt->execute()) {
            header("Location: form7.html");
            exit; // Make sure to exit after redirecting
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
