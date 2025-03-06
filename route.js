import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import mysql from 'mysql2';

const app = express();

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set the correct views directory
app.set("views", path.join(__dirname, "colleges_mba", "IIM_Ahemdabad", "views"));
app.set("view engine", "ejs"); // Ensure EJS is the view engine

// Form Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 8080;


// Serve Login.html at the root path
app.get('/', (req, res) => {
    // Log all middleware to the console for debugging
    res.statusCode = 200;
    res.header('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname, 'login', 'Login.html'));

});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'ui')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname, 'login')));
app.use(express.static(path.join(__dirname, 'colleges_mba' , 'IIM_Ahemdabad')));
app.use(express.static(path.join(__dirname, 'colleges_mba' , 'IIM_Ahemdabad' , 'views')));



const db = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "Prateek@10",
    database: "demo"
});

// Test the connection pool (optional but highly recommended)
db.getConnection((err, connection) => {
    if (err) {
        console.error("Error getting connection from pool: " + err.message);
        return; // Or throw the error if you want to stop the application
    }
    console.log("Successfully connected to the MySQL server (via pool).");
    connection.release(); // Return the connection to the pool
});


app.get("/register" , (req , res) => {
    res.statusCode = 200
    res.sendFile(path.join(__dirname , "login" , "Register.html"))
});


app.get("/clg_guj", (req, res) => {
    res.status = 200;
    res.sendFile(path.join(__dirname, 'colleges_mba', 'G.html'));
});


app.get("/iim_Ahemdabad_info", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "colleges_mba", "IIM_Ahemdabad", "iim_ahemdabad.html"));
});

app.get("/iim_ahemdabad_course_fee" , (req , res) => {
    res.status = 200;
    res.sendFile(path.join(__dirname , "colleges_mba", "IIM_Ahemdabad" , "iim_ahemdabad_course_fee.html"))
})

app.post("/iim_ahemdabad_reviews", (req, res) => {
    // Fetch reviews from the database
    const sqlQuery = "SELECT Name, College_Name, Completion_Year, Branch_Name, Review FROM review WHERE College_Name = 'IIM Bangalore'";
    

    db.query(sqlQuery, (err, results) => {
        if (err) {
            console.error("Error fetching data from database:", err);
            return res.status(500).send("Internal Server Error");
        }

        else {
            console.log("✅ Raw Data from DB:", results);
        }

        res.render("reviews", { reviews: results }); // Pass results to EJS
    });
});


app.get("/iim_ahemdabad_write_review" , (req , res) => {
    const filepath2 = path.join(__dirname , "colleges_mba" , "IIM_Ahemdabad" , "write_review.html");

    res.sendFile(filepath2 , (err) => {
        if (err) {
            console.log(err);
            res.status(500).send("Internal Server Error");
        }

        else {
            console.log("File Sent Successfully");
        }
    });
})

app.get("/iim_ahemdabad_cutoff" , (req , res) => {
    res.status(200).sendFile(path.join(__dirname , "colleges_mba" , "IIM_Ahemdabad" , "iim_ahemdabad_cutOffs.html"));
})

app.get("/iim_ahemdabad_Hostel&Campus" , (req , res) => {
    res.status(200).sendFile(path.join(__dirname , "colleges_mba" , "IIM_Ahemdabad" , "iim_ahemdabad_Hostel&Campus.html"));
})

app.get("/render_all_reviews", (req, res) => {
    const db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Prateek@10",
        database: "demo",
    });

    db.connect((err) => {
        if (err) {
            console.error("❌ Database connection error:", err.message);
            return res.status(500).send("Database connection error");
        }

        console.log("✅ Connected to MySQL");

        // Query 1: Fetch all reviews
        const query1 = "SELECT * FROM review";

        db.query(query1, (err, result1) => {
            if (err) {
                console.error("❌ Error retrieving reviews:", err);
                return res.status(500).send("Error retrieving reviews");
            }

            console.log("✅ Fetched Reviews:", result1);
            const reviewCount = result1.length;

            // Query 2: Fetch average placement rating
            const query2 = "SELECT AVG(rating_value) AS avg_rating FROM placement_rating";

            db.query(query2, (err, results2) => {
                if (err) {
                    console.error("❌ Error retrieving placement rating:", err);
                    return res.status(500).send("Error retrieving placement rating");
                }

                const placement_rating = Number(results2[0]?.avg_rating) || 0;
                console.warn(`⭐ Average Placement Rating: ${placement_rating}`);

                // Query 3: Fetch average infrastructure rating
                const query3 = "SELECT AVG(rating_value) AS avg_rating FROM infrastructure_rating";

                db.query(query3, (err, results3) => {
                    if (err) {
                        console.error("❌ Error retrieving infrastructure rating:", err);
                        return res.status(500).send("Error retrieving infrastructure rating");
                    }

                    const infrastructure_rating = Number(results3[0]?.avg_rating) || 0;
                    console.warn(`⭐ Average Infrastructure Rating: ${infrastructure_rating}`);

                    // Query 4: Fetch average campus life rating
                    const query4 = "SELECT AVG(rating_value) AS avg_rating FROM campus_life_rating";

                    db.query(query4, (err, result4) => {
                        if (err) {
                            console.error("❌ Error retrieving campus life rating:", err);
                            return res.status(500).send("Error retrieving campus life rating");
                        }

                        const campus_life_rating = Number(result4[0]?.avg_rating) || 0;
                        console.warn(`⭐ Average Campus Life Rating: ${campus_life_rating}`);

                        // Query 5: Fetch average college curriculum rating
                        const query5 = "SELECT AVG(rating_value) AS avg_rating FROM college_curriculum_rating";

                        db.query(query5, (err, result5) => {
                            if (err) {
                                console.error("❌ Error retrieving college curriculum rating:", err);
                                return res.status(500).send("Error retrieving college curriculum rating");
                            }

                            const college_curriculum_rating = Number(result5[0]?.avg_rating) || 0;
                            console.warn(`⭐ Average College Curriculum Rating: ${college_curriculum_rating}`);

                            // Query 6: Fetch average faculty rating
                            const query6 = "SELECT AVG(rating_value) AS avg_rating FROM faculty_rating";

                            db.query(query6 , (err , result6 ) => {
                                if (err) {
                                    console.error("❌ Error retrieving faculty rating:", err);
                                    return res.status(500).send("Error retrieving faculty rating");
                                }
                                
                                const faculty_rating = Number(result6[0]?.avg_rating) || 0;
                                console.warn(`⭐ Average Faculty Rating: ${faculty_rating}`);

                                // ✅ Render EJS with all collected data
                                res.render("reviews", { 
                                    all_review: result1,    
                                    reviewCount, 
                                    placement_rating, 
                                    infrastructure_rating, 
                                    campus_life_rating,
                                    college_curriculum_rating,
                                    faculty_rating // ✅ Added missing variable
                                });

                                db.end(); // ✅ Close the database connection after responding
                            });
                        });
                    });
                });
            });
        });
    });
});




app.get("/get_placement_rating", (req, res) => {
    const sql2 = "SELECT AVG(rating_value) AS avg_rating FROM placement_rating";
    db.query(sql2 , (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            res.json({ rating: result[0].avg_rating }); // Use the correct alias
        }
    });
});

app.get("/get_campus_life_rating", (req, res) => {
    const sql2 = "SELECT AVG(rating_value) AS avg_rating FROM campus_life_rating";
    db.query(sql2 , (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            res.json({ rating: result[0].avg_rating }); // Use the correct alias
        }
    });
});

app.get("/get_infrastructure_rating", (req, res) => {
    const sql2 = "SELECT AVG(rating_value) AS avg_rating FROM infrastructure_rating";
    db.query(sql2 , (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            res.json({ rating: result[0].avg_rating }); // Use the correct alias
        }
    });
});


app.get("/get_college_curriculum_rating", (req, res) => {
    const sql2 = "SELECT AVG(rating_value) AS avg_rating FROM college_curriculum_rating";
    db.query(sql2 , (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            res.json({ rating: result[0].avg_rating }); // Use the correct alias
        }
    });
});

app.get("/get_faculty_rating", (req, res) => {
    const sql2 = "SELECT AVG(rating_value) AS avg_rating FROM faculty_rating ";
    db.query(sql2 , (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            res.json({ rating: result[0].avg_rating }); // Use the correct alias
        }
    });
});

app.get("/get_overall_rating", (req, res) => {
    const sql3 = ` 
        SELECT AVG(total_rating) AS overall_avg_rating 
        FROM (
            SELECT rating_value AS total_rating FROM placement_rating 
            UNION ALL 
            SELECT rating_value FROM college_curriculum_rating 
            UNION ALL 
            SELECT rating_value FROM faculty_rating 
            UNION ALL 
            SELECT rating_value FROM infrastructure_rating 
            UNION ALL 
            SELECT rating_value FROM campus_life_rating
        ) AS all_ratings;
    `;

    db.query(sql3, (err, overall_result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            res.json({ rating: overall_result[0].overall_avg_rating }); // ✅ Correct alias
            console.log(overall_result);
        }
    });
});




app.post('/search-dropdown', (req, res) => {
  // MySQL connection setup
  const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: 'Prateek@10', // Replace with your MySQL password
    database: 'demo',
  });

  // Connect to the database
  db.connect(err => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      process.exit(1);
    }
    console.log('Connected to MySQL');
  });

  const query = req.query.query;

  const sql = "select College_Name from colleges where College_Name LIKE ?";
  db.query(sql, [`%${query}%`], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json({ results });
  });
});
  

   
app.get('/college/:collegeName', (req, res) => {
  const collegeName = req.params.collegeName;
  // Your logic to render the appropriate college-specific page
  res.send(`You selected college: ${collegeName}`);
});


app.get('/form1' , (req , res) => {
    res.statusCode = 200
    res.sendFile(path.join(__dirname , 'ui' , 'form1.html'))
})

app.get("/guidance" , (req , res) => {
    res.statusCode = 200
    res.sendFile(path.join(__dirname , 'ui' , 'form1.html'));
})

app.post('/form1Process', (req, res) => {
    const createConnection = mysql.createConnection({
        host: "localhost",  
        user: "root",
        password: "Prateek@10",
        database: "demo"
    });
    
    // Connect to the database
    createConnection.connect((err) => {
        if (err) {
            console.error('Error connecting: ' + err.message);
            return res.status(500).send('Database connection error');
        }

        console.log('Connected to the MySQL server.');
    });

    const { name, phone, email } = req.body;
    const query = "INSERT INTO form1 (Full_Name, Mob, Email) VALUES (?, ?, ?)";

    // Perform the database query
    createConnection.query(query, [name, phone, email], (err) => {
        if (err) {
            console.error("Error inserting data: ", err.stack);
            return res.status(500).send('Error inserting data');
        } else {
            res.sendFile(path.join(__dirname, 'ui', 'form2.html'));
        }  
    });

});


app.post('/form2Process', (req, res) => {
    const createConnection = mysql.createConnection({
        host: "localhost",  
        user: "root",
        password: "Prateek@10",
        database: "demo"
    });
    
    // Connect to the database
    createConnection.connect((err) => {
        if (err) {
            console.error('Error connecting: ' + err.message);
            return res.status(500).send('Database connection error');
        }

        console.log('Connected to the MySQL server.');
    });

    const { options } = req.body;
    const query = "INSERT INTO form2 (Currently_Working) VALUES (?)";

    // Perform the database query
    createConnection.query(query, [options], (err) => {
        if (err) {
            console.error("Error inserting data: ", err.stack);
            return res.status(500).send('Error inserting data');
        } else {
            res.sendFile(path.join(__dirname, 'ui', 'form3.html'));
        }  
    });

});

app.post('/form3Process', (req, res) => {
    const createConnection = mysql.createConnection({
        host: "localhost",  
        user: "root",
        password: "Prateek@10",
        database: "demo"
    });
    
    // Connect to the database
    createConnection.connect((err) => {
        if (err) {
            console.error('Error connecting: ' + err.message);
            return res.status(500).send('Database connection error');
        }

        console.log('Connected to the MySQL server.');
    });

    const { selectedOptions } = req.body;
    const query = "INSERT INTO Course_Info(Course_Name) VALUES (?)";

    // Perform the database query
    createConnection.query(query, [selectedOptions], (err) => {
        if (err) {
            console.error("Error inserting data: ", err.stack);
            return res.status(500).send('Error inserting data');
        } else {
            res.sendFile(path.join(__dirname, 'ui', 'form4.html'));
        }  
    });

});


app.post('/form4Process', (req, res) => {
    const createConnection = mysql.createConnection({
        host: "localhost",  
        user: "root",
        password: "Prateek@10",
        database: "demo"
    });
    
    // Connect to the database
    createConnection.connect((err) => {
        if (err) {
            console.error('Error connecting: ' + err.message);
            return res.status(500).send('Database connection error');
        }

        console.log('Connected to the MySQL server.');
    });

    const { option2 } = req.body;
    const query = "INSERT INTO Course_fee_Info (Course_fee) VALUES (?)";

    // Perform the database query
    createConnection.query(query, [option2], (err) => {
        if (err) {
            console.error("Error inserting data: ", err.stack);
            return res.status(500).send('Error inserting data');
        } else {
            res.sendFile(path.join(__dirname, 'ui', 'form5.html'));
        }  
    });

});



app.post('/form5Process', (req, res) => {
    const createConnection = mysql.createConnection({
        host: "localhost",  
        user: "root",
        password: "Prateek@10",
        database: "demo"
    });
    
    // Connect to the database
    createConnection.connect((err) => {
        if (err) {
            console.error('Error connecting: ' + err.message);
            return res.status(500).send('Database connection error');
        }

        console.log('Connected to the MySQL server.');
    });

    const { option3 } = req.body;
    const query = "INSERT INTO Qualification(Highest_Qualification) VALUES (?)";

    // Perform the database query
    createConnection.query(query, [option3], (err) => {
        if (err) {
            console.error("Error inserting data: ", err.stack);
            return res.status(500).send('Error inserting data');
        } else {
            res.sendFile(path.join(__dirname, 'ui', 'form6.html'));
        }  
    });

});



app.post('/form6Process', (req, res) => {
    const createConnection = mysql.createConnection({
        host: "localhost",  
        user: "root",
        password: "Prateek@10",
        database: "demo"
    });
    
    // Connect to the database
    createConnection.connect((err) => {
        if (err) {
            console.error('Error connecting: ' + err.message);
            return res.status(500).send('Database connection error');
        }

        console.log('Connected to the MySQL server.');
    });

    const { option2 } = req.body;
    const query = "INSERT INTO Salary_Package_Info(Salary_Number) VALUES(?)";

    // Perform the database query
    createConnection.query(query, [option2], (err) => {
        if (err) {
            console.error("Error inserting data: ", err.stack);
            return res.status(500).send('Error inserting data');
        } else {
            res.sendFile(path.join(__dirname, 'ui', 'form7.html'));
        }  
    });

});


app.post('/form7Process', (req, res) => {
    const createConnection = mysql.createConnection({
        host: "localhost",  
        user: "root",
        password: "Prateek@10",
        database: "demo"
    });
    
    // Connect to the database
    createConnection.connect((err) => {
        if (err) {
            console.error('Error connecting: ' + err.message);
            return res.status(500).send('Database connection error');
        }

        console.log('Connected to the MySQL server.');
    });

    const { option2 } = req.body;
    const query = "INSERT INTO Percentage_Scored(Percentage) VALUES(?)";

    // Perform the database query
    createConnection.query(query, [option2], (err) => {
        if (err) {
            console.error("Error inserting data: ", err.stack);
            return res.status(500).send('Error inserting data');
        } else {
            res.sendFile(path.join(__dirname, 'ui', 'final.html'));
        }  
    });

});


app.post("/registerForm" , (req , res) => {
    const createConnection = mysql.createConnection({
        host: "localhost",  
        user: "root",
        password: "Prateek@10",
        database: "demo"
    });
    
    // Connect to the database
    createConnection.connect((err) => {
        if (err) {
            console.error('Error connecting: ' + err.message);
            return res.status(500).send('Database connection error');
        }

        console.log('Connected to the MySQL server.');
    });

    const { full_name , Gender , calender , mob , email , password , Course , State , City } = req.body;
    // console.log("{full_name , Gender , calender , mob , email , password , Course , State , City}");
    const query = "INSERT INTO register(Name , Gender , Date_of_birth , Mob , Email , Password , Course_Name , State , City) VALUES(? , ? , ? , ? , ? , ? , ? , ? , ?)";

    // Perform the database query
    createConnection.query(query, [ full_name , Gender , calender , mob , email , password , Course , State , City ] , (err) => {
        if (err) {
            console.error("Error inserting data: ", err.stack);
            return res.status(500).send('Error inserting data');
        } else {
            res.sendFile(path.join(__dirname, 'login', 'Login.html'));
        }  
    });
})

app.get("/render_review_db", (req, res) => {
    res.redirect("/render_all_reviews"); // Redirect to review page after submission
});

app.post("/review_db", (req, res) => {
    const createConnection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Prateek@10",
        database: "demo"
    });

    createConnection.connect((err) => {
        if (err) {
            console.error("Error connecting: " + err.message);
            return res.status(500).send("Database connection error");
        }
        console.log("Connected to the MySQL server.");
    });

    // Get form data
    const { name, mob, email, gender, clg_name, branch_name, completion_year, review } = req.body;
    console.log("Received Data:", req.body); // Debugging log

    // SQL query
    const query = "INSERT INTO review(Name, Mobile, Email, Gender, College_Name, Branch_Name, Completion_Year, Review) VALUES(?, ?, ?, ?, ?, ?, ?, ?)";

    createConnection.query(query, [name, mob, email, gender, clg_name, branch_name, completion_year, review], (err, results) => {
        if (err) {
            console.error("Error inserting data into database:", err);
            return res.status(500).send("Internal Server Error");
        }

        console.log("✅ Data Inserted Successfully!");

        res.redirect("/render_all_reviews"); // Redirect to review page after submission
        createConnection.end(); // Close the connection
    });

});

app.get("/render_index", (req, res) => {
    res.sendFile(path.join(__dirname , "public" , "index.html"))// Redirect to review page after submission
});

app.post("/signin" , (req , res) => {
    const createConnection = mysql.createConnection({
        host: "localhost",  
        user: "root",
        password: "Prateek@10",
        database: "demo"
    });
    
    // Connect to the database
    createConnection.connect((err) => {
        if (err) {
            console.error('Error connecting: ' + err.message);
            return res.status(500).send('Database connection error');
        }

        console.log('Connected to the MySQL server.');
    });


    const { UserName , pass} = req.body;

    const query = "select Name , Password from register where Name = ? AND Password = ?";

    // Perform the database query
    createConnection.query(query, [ UserName, pass ], (err , results) => {
        if (err) {
            console.error("Error inserting data: ", err.stack);
            return res.status(500).send('Error inserting data');
        }
        else if(results.length > 0) {
            res.sendFile(path.join(__dirname , "public" , "index.html"));
        } 
        else {
            res.status(401).send("Invalid Username or Password");
        }  
    });

})

// API Endpoint to Save Rating
app.post("/placement_rating", (req, res) => {
    const { rating } = req.body;

    if (!rating || rating < 0 || rating > 5) {
        return res.status(400).json({ success: false, message: "Invalid rating" });
    }

    const sql = "INSERT INTO placement_rating (rating_value) VALUES (?)";
    db.query(sql, [rating], (err, result) => {
        if (err) {
            console.error("Error inserting rating:", err);
            return res.status(500).json({ success: false, message: "Database error" });
        }
        // res.json({ success: true, message: "Rating saved successfully!" });
    });
});

app.post("/campus_life_rating" , (req , res) => {
    const { rating } = req.body;

    if (!rating || rating < 0 || rating > 5) {
        return res.status(400).json({ success: false, message: "Invalid rating" });
    }

    const sql = "INSERT INTO campus_life_rating (rating_value) VALUES (?)";
    db.query(sql, [rating], (err, result) => {
        if (err) {
            console.error("Error inserting rating:", err);
            return res.status(500).json({ success: false, message: "Database error" });
        }
        // res.json({ success: true, message: "Rating saved successfully!" });
    });
})

app.post("/college_curriculum_rating" , (req , res) => {
    const { rating } = req.body;

    if (!rating || rating < 0 || rating > 5) {
        return res.status(400).json({ success: false, message: "Invalid rating" });
    }

    const sql = "INSERT INTO college_curriculum_rating (rating_value) VALUES (?)";
    db.query(sql, [rating], (err, result) => {
        if (err) {
            console.error("Error inserting rating:", err);
            return res.status(500).json({ success: false, message: "Database error" });
        }
        // res.json({ success: true, message: "Rating saved successfully!" });
    });
})

// API Endpoint to Save Rating
app.post("/faculty_rating", (req, res) => {
    const { rating } = req.body;

    if (!rating || rating < 0 || rating > 5) {
        return res.status(400).json({ success: false, message: "Invalid rating" });
    }

    const sql = "INSERT INTO faculty_rating (rating_value) VALUES (?)";
    db.query(sql, [rating], (err, result) => {
        if (err) {
            console.error("Error inserting rating:", err);
            return res.status(500).json({ success: false, message: "Database error" });
        }
        // res.json({ success: true, message: "Rating saved successfully!" });
    });
});


app.post("/infrastructure_rating" , (req , res) => {
    const { rating } = req.body;

    if (!rating || rating < 0 || rating > 5) {
        return res.status(400).json({ success: false, message: "Invalid rating" });
    }

    const sql = "INSERT INTO infrastructure_rating (rating_value) VALUES (?)";
    db.query(sql, [rating], (err, result) => {
        if (err) {
            console.error("Error inserting rating:", err);
            return res.status(500).json({ success: false, message: "Database error" });
        }
        // res.json({ success: true, message: "Rating saved successfully!" });
    });
})


const server = app.listen(8080, () => {
    const { address, port } = server.address();
    const host = address === '::' ? 'localhost' : address;
    console.log(`Server is running at http://${host}:${port}`);
});