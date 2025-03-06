<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get user inputs
    $username = $_POST["UserName"];
    $password = $_POST["password"];

    // Database connection settings
    $servername = "localhost";
    $db_username = "root"; // Replace with your DB username
    $db_password = "";     // Replace with your DB password
    $dbname = "userdata";      // Replace with your DB name

    // Create a connection
    $conn = new mysqli($servername, $db_username, $db_password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare SQL to validate user
    $sql = "SELECT password FROM details WHERE Name = ?";
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        // Bind the parameter and execute
        $stmt->bind_param("s", $username);
        $stmt->execute();

        // Fetch the result
        $stmt->bind_result($db_password);
        if ($stmt->fetch()) {
            // Compare the plaintext password directly
            if ($password === $db_password) {
                echo "Login successful!";
                // You can redirect to a dashboard or another page
                header("Location: login3.html");
                exit();
            } else {
                echo "Invalid username or password.";
            }
        } else {
            echo "Invalid username or password.";
        }

        $stmt->close();
    } else {
        echo "Error preparing statement: " . $conn->error;
    }

    // Close the connection
    $conn->close();
}
?>
