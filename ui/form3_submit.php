<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get the values of the radio buttons
    $exam = $_POST["selectedOptions"]; // Value of the "Yes" button

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
    $sql = "INSERT INTO form3(Exam_Name) VALUES (?)";
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        // Bind the parameters and execute the statement
        $stmt->bind_param("s", $exam);
        if ($stmt->execute()) {
            header("Location: form4.html");
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
