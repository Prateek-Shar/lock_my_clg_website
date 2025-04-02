import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import mysql from 'mysql2';
import { Console } from 'console';

const app = express();

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set("views", [
    path.join(__dirname, "colleges_mba", "IIM_Ahemdabad", "views"),
    path.join(__dirname, "colleges_mba", "IIM_Lucknow", "views"),
    path.join(__dirname, "colleges_mba", "IIM_Bangalore", "views"),
    path.join(__dirname, "colleges_mba", "XLRI", "views"),
    path.join(__dirname, "colleges_mba", "IIM_Kolkata", "views"),
    path.join(__dirname, "colleges_mba", "IIM_Kozhikode", "views"),
    path.join(__dirname, "colleges_bba", "SSCBS", "views"),
    path.join(__dirname, "colleges_bba", "Christ", "views"),
    path.join(__dirname, "colleges_bba", "Nmims", "views"),
    path.join(__dirname, "colleges_bba", "SCMS", "views"),
    path.join(__dirname, "colleges_bba", "Mount_Caramel", "views")
]);

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
app.use(express.static(path.join(__dirname, 'colleges_mba' , 'IIM_Lucknow')));
app.use(express.static(path.join(__dirname, 'colleges_mba' , 'IIM_Bangalore')));
app.use(express.static(path.join(__dirname, 'colleges_mba' , 'XLRI')));
app.use(express.static(path.join(__dirname, 'colleges_mba' , 'IIM_Kolkata')));
app.use(express.static(path.join(__dirname, 'colleges_mba' , 'IIM_Kozhikode')));
app.use(express.static(path.join(__dirname, 'colleges_bba' , 'Christ')));
app.use(express.static(path.join(__dirname, 'colleges_bba' , 'Nmims')));
app.use(express.static(path.join(__dirname, 'colleges_bba' , 'SSCBS')));
app.use(express.static(path.join(__dirname, 'colleges_bba' , 'SCMS')));
app.use(express.static(path.join(__dirname, 'colleges_bba' , 'Mount_Caramel')));

app.use(express.static(path.join(__dirname, 'colleges_mba' , 'IIM_Ahemdabad' , 'views')));
app.use(express.static(path.join(__dirname, 'colleges_mba' , 'IIM_Lucknow' , 'views')));
app.use(express.static(path.join(__dirname, 'colleges_mba' , 'IIM_Bangalore' , 'views')));
app.use(express.static(path.join(__dirname, 'colleges_mba' , 'XLRI' , 'views')));
app.use(express.static(path.join(__dirname, 'colleges_mba' , 'IIM_Kolkata' , 'views')));
app.use(express.static(path.join(__dirname, 'colleges_mba' , 'IIM_Kozhikode' , 'views')));
app.use(express.static(path.join(__dirname, 'colleges_bba' , 'SSCBS' , 'views')));
app.use(express.static(path.join(__dirname, 'colleges_bba' , 'Christ' , 'views')));
app.use(express.static(path.join(__dirname, 'colleges_bba' , 'Nmims' , 'views')));
app.use(express.static(path.join(__dirname, 'colleges_bba' , 'SCMS' , 'views')));
app.use(express.static(path.join(__dirname, 'colleges_bba' , 'Mount_Caramel' , 'views')));

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




app.get("/iim_Ahemdabad_info", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "colleges_mba", "IIM_Ahemdabad", "iim_ahemdabad.html"));
});

app.get("/iim_ahemdabad_course_fee" , (req , res) => {
    res.status = 200;
    res.sendFile(path.join(__dirname , "colleges_mba", "IIM_Ahemdabad" , "iim_ahemdabad_course_fee.html"))
})

app.get("/iim_ahemdabad_cutoff" , (req , res) => {
    res.status(200).sendFile(path.join(__dirname , "colleges_mba" , "IIM_Ahemdabad" , "iim_ahemdabad_cutOffs.html"));
})

app.get("/iim_ahemdabad_Hostel&Campus" , (req , res) => {
    res.status(200).sendFile(path.join(__dirname , "colleges_mba" , "IIM_Ahemdabad" , "iim_ahemdabad_Hostel&Campus.html"));
})

// app.get("/iim_ahhemdabad_reviews" , (req , res) => {
//     res.render("iim_ahemdabad_reviews");
// })

// app.post("/iim_ahemdabad_reviews", (req, res) => {
//     // Fetch reviews from the database
//     const sqlQuery = "SELECT Name, College_Name, Completion_Year, Branch_Name, Review FROM review WHERE College_Name = 'IIM Bangalore'";
    

//     db.query(sqlQuery, (err, results) => {
//         if (err) {
//             console.error("Error fetching data from database:", err);
//             return res.status(500).send("Internal Server Error");
//         }

//         else {
//             console.log("✅ Raw Data from DB:", results);
//         }

//         res.render("iim_ahemdabad_reviews", { reviews: results }); // Pass results to EJS
//     });
// });

// app.post("/iim_Lucknow_reviews", (req, res) => {
//     // Fetch reviews from the database
//     const sqlQuery = "SELECT Name, College_Name, Completion_Year, Branch_Name, Review FROM review WHERE College_Name = 'IIM Lucknow'";
    

//     db.query(sqlQuery, (err, results) => {
//         if (err) {
//             console.error("Error fetching data from database:", err);
//             return res.status(500).send("Internal Server Error");
//         }

//         else {
//             console.log("✅ Raw Data from DB:", results);
//         }

//         res.render("reviews", { reviews: results }); // Pass results to EJS
//     });
// });


// app.get("/clg_guj", (req, res) => {
//     res.status = 200;
//     res.sendFile(path.join(__dirname, 'colleges_mba', 'G.html'));
// });

app.post("/review_db_christ", (req, res) => {
    // Get form data
    const { nm, clg_name, branch_name, completion_year, review, placement_rating, campus_life_rating, faculty_rating, college_curriculum_rating, infrastructure_rating } = req.body;
    console.log("Received Data:", req.body); // Debugging log

    // Convert ratings to decimal values
    const placementRating = parseFloat(placement_rating);
    const campusLifeRating = parseFloat(campus_life_rating);
    const facultyRating = parseFloat(faculty_rating);
    const curriculumRating = parseFloat(college_curriculum_rating);
    const infrastructureRating = parseFloat(infrastructure_rating);

    const query = `
       INSERT INTO christ_overall_rating 
       (Name, College_Name, Course_Name, Completion_Year, Review, 
        placement_rating, campus_life_rating, faculty_rating, curriculum_rating, infrastructure_rating) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    db.query(query, [
        nm, 
        clg_name, 
        branch_name, 
        completion_year, 
        review, 
        placementRating,
        campusLifeRating,
        facultyRating,
        curriculumRating,
        infrastructureRating
    ], (err, results) => {
        if (err) {
            console.error("Error inserting review:", err.message);
            return res.status(500).json({ status: false, message: "Database error", error: err.message });
        }

        console.log({ success: true, message: "Review updated successfully!" });

        setTimeout(() => {
            res.redirect("/christ_render_all_reviews");
        }, 1000);
    });
});




app.post("/review_db_mount_caramel", (req, res) => {
    // Get form data
    const { nm, clg_name, branch_name, completion_year, review, placement_rating, campus_life_rating, faculty_rating, college_curriculum_rating, infrastructure_rating } = req.body;
    console.log("Received Data:", req.body); // Debugging log

    // Convert ratings to decimal values
    const placementRating = parseFloat(placement_rating);
    const campusLifeRating = parseFloat(campus_life_rating);
    const facultyRating = parseFloat(faculty_rating);
    const curriculumRating = parseFloat(college_curriculum_rating);
    const infrastructureRating = parseFloat(infrastructure_rating);

    const query = `
       INSERT INTO mount_caramel_overall_rating 
       (Name, College_Name, Course_Name, Completion_Year, Review, 
        placement_rating, campus_life_rating, faculty_rating, curriculum_rating, infrastructure_rating) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    db.query(query, [
        nm, 
        clg_name, 
        branch_name, 
        completion_year, 
        review, 
        placementRating,
        campusLifeRating,
        facultyRating,
        curriculumRating,
        infrastructureRating
    ], (err, results) => {
        if (err) {
            console.error("Error inserting review:", err.message);
            return res.status(500).json({ status: false, message: "Database error", error: err.message });
        }

        console.log({ success: true, message: "Review updated successfully!" });

        setTimeout(() => {
            res.redirect("/mount_caramel_render_all_reviews");
        }, 1000);
    });
});




app.get("/mount_caramel_render_all_reviews", (req, res) => {
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
        const query1 = "SELECT * FROM mount_caramel_overall_rating";

        db.query(query1, (err, result1) => {
            if (err) {
                console.error("❌ Error retrieving reviews:", err);
                return res.status(500).send("Error retrieving reviews");
            }

            console.log("✅ Fetched Reviews:", result1);
            const reviewCount = result1.length;
            console.log("✅ Review Count:", reviewCount);


            console.log("Showing the results --------------------------------------")
            console.log(result1[0]);

            // Query 2: Fetch average placement rating
            const query2 = "SELECT placement_Rating AS avg_rating FROM mount_caramel_overall_rating where Review_id = 1";

            db.query(query2, (err, results2) => {
                if (err) {
                    console.error("❌ Error retrieving placement rating:", err);
                    return res.status(500).send("Error retrieving placement rating");
                }

                const placement_rating = Number(results2[0]?.avg_rating) || 0;
                console.warn(`⭐ Average Placement Rating: ${placement_rating}`);

                // Query 3: Fetch average infrastructure rating
                const query3 = "SELECT infrastructure_rating AS avg_rating FROM mount_caramel_overall_rating where Review_id = 1";

                db.query(query3, (err, results3) => {
                    if (err) {
                        console.error("❌ Error retrieving infrastructure rating:", err);
                        return res.status(500).send("Error retrieving infrastructure rating");
                    }

                    const infrastructure_rating = Number(results3[0]?.avg_rating) || 0;
                    console.warn(`⭐ Average Infrastructure Rating: ${infrastructure_rating}`);

                    // Query 4: Fetch average campus life rating
                    const query4 = "SELECT campus_life_rating AS avg_rating FROM mount_caramel_overall_rating where Review_id = 1";

                    db.query(query4, (err, result4) => {
                        if (err) {
                            console.error("❌ Error retrieving campus life rating:", err);
                            return res.status(500).send("Error retrieving campus life rating");
                        }

                        const campus_life_rating = Number(result4[0]?.avg_rating) || 0;
                        console.warn(`⭐ Average Campus Life Rating: ${campus_life_rating}`);

                        // Query 5: Fetch average college curriculum rating
                        const query5 = "SELECT curriculum_rating AS avg_rating FROM mount_caramel_overall_rating where Review_id = 1";

                        db.query(query5, (err, result5) => {
                            if (err) {
                                console.error("❌ Error retrieving college curriculum rating:", err);
                                return res.status(500).send("Error retrieving college curriculum rating");
                            }

                            const college_curriculum_rating = Number(result5[0]?.avg_rating) || 0;
                            console.warn(`⭐ Average College Curriculum Rating: ${college_curriculum_rating}`);

                            // Query 6: Fetch average faculty rating
                            const query6 = "SELECT faculty_rating AS avg_rating from mount_caramel_overall_rating where Review_id = 1";

                            db.query(query6 , (err , result6 ) => {
                                if (err) {
                                    console.error("❌ Error retrieving faculty rating:", err);
                                    return res.status(500).send("Error retrieving faculty rating");
                                }
                                
                                const faculty_rating = Number(result6[0]?.avg_rating) || 0;
                                console.warn(`⭐ Average Faculty Rating: ${faculty_rating}`);

                                // ✅ Render EJS with all collected data
                                res.render("mount_caramel_reviews", { 
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



app.post("/review_db_scms", (req, res) => {
    // Get form data
    const { nm, clg_name, branch_name, completion_year, review, placement_rating, campus_life_rating, faculty_rating, college_curriculum_rating, infrastructure_rating } = req.body;
    console.log("Received Data:", req.body); // Debugging log

    // Convert ratings to decimal values
    const placementRating = parseFloat(placement_rating);
    const campusLifeRating = parseFloat(campus_life_rating);
    const facultyRating = parseFloat(faculty_rating);
    const curriculumRating = parseFloat(college_curriculum_rating);
    const infrastructureRating = parseFloat(infrastructure_rating);

    const query = `
       INSERT INTO scms_overall_rating 
       (Name, College_Name, Course_Name, Completion_Year, Review, 
        placement_rating, campus_life_rating, faculty_rating, curriculum_rating, infrastructure_rating) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    db.query(query, [
        nm, 
        clg_name, 
        branch_name, 
        completion_year, 
        review, 
        placementRating,
        campusLifeRating,
        facultyRating,
        curriculumRating,
        infrastructureRating
    ], (err, results) => {
        if (err) {
            console.error("Error inserting review:", err.message);
            return res.status(500).json({ status: false, message: "Database error", error: err.message });
        }

        console.log({ success: true, message: "Review updated successfully!" });

        setTimeout(() => {
            res.redirect("/scms_render_all_reviews");
        }, 1000);
    });
});



app.get("/scms_render_all_reviews", (req, res) => {
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
        const query1 = "SELECT * FROM scms_overall_rating";

        db.query(query1, (err, result1) => {
            if (err) {
                console.error("❌ Error retrieving reviews:", err);
                return res.status(500).send("Error retrieving reviews");
            }

            console.log("✅ Fetched Reviews:", result1);
            const reviewCount = result1.length;
            console.log("✅ Review Count:", reviewCount);


            console.log("Showing the results --------------------------------------")
            console.log(result1[0]);

            // Query 2: Fetch average placement rating
            const query2 = "SELECT placement_Rating AS avg_rating FROM scms_overall_rating where Review_id = 1";

            db.query(query2, (err, results2) => {
                if (err) {
                    console.error("❌ Error retrieving placement rating:", err);
                    return res.status(500).send("Error retrieving placement rating");
                }

                const placement_rating = Number(results2[0]?.avg_rating) || 0;
                console.warn(`⭐ Average Placement Rating: ${placement_rating}`);

                // Query 3: Fetch average infrastructure rating
                const query3 = "SELECT infrastructure_rating AS avg_rating FROM scms_overall_rating where Review_id = 1";

                db.query(query3, (err, results3) => {
                    if (err) {
                        console.error("❌ Error retrieving infrastructure rating:", err);
                        return res.status(500).send("Error retrieving infrastructure rating");
                    }

                    const infrastructure_rating = Number(results3[0]?.avg_rating) || 0;
                    console.warn(`⭐ Average Infrastructure Rating: ${infrastructure_rating}`);

                    // Query 4: Fetch average campus life rating
                    const query4 = "SELECT campus_life_rating AS avg_rating FROM scms_overall_rating where Review_id = 1";

                    db.query(query4, (err, result4) => {
                        if (err) {
                            console.error("❌ Error retrieving campus life rating:", err);
                            return res.status(500).send("Error retrieving campus life rating");
                        }

                        const campus_life_rating = Number(result4[0]?.avg_rating) || 0;
                        console.warn(`⭐ Average Campus Life Rating: ${campus_life_rating}`);

                        // Query 5: Fetch average college curriculum rating
                        const query5 = "SELECT curriculum_rating AS avg_rating FROM scms_overall_rating where Review_id = 1";

                        db.query(query5, (err, result5) => {
                            if (err) {
                                console.error("❌ Error retrieving college curriculum rating:", err);
                                return res.status(500).send("Error retrieving college curriculum rating");
                            }

                            const college_curriculum_rating = Number(result5[0]?.avg_rating) || 0;
                            console.warn(`⭐ Average College Curriculum Rating: ${college_curriculum_rating}`);

                            // Query 6: Fetch average faculty rating
                            const query6 = "SELECT faculty_rating AS avg_rating from scms_overall_rating where Review_id = 1";

                            db.query(query6 , (err , result6 ) => {
                                if (err) {
                                    console.error("❌ Error retrieving faculty rating:", err);
                                    return res.status(500).send("Error retrieving faculty rating");
                                }
                                
                                const faculty_rating = Number(result6[0]?.avg_rating) || 0;
                                console.warn(`⭐ Average Faculty Rating: ${faculty_rating}`);

                                // ✅ Render EJS with all collected data
                                res.render("scms_reviews", { 
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




app.post("/review_db_nmims", (req, res) => {
    // Get form data
    const { nm, clg_name, branch_name, completion_year, review, placement_rating, campus_life_rating, faculty_rating, college_curriculum_rating, infrastructure_rating } = req.body;
    console.log("Received Data:", req.body); // Debugging log

    // Convert ratings to decimal values
    const placementRating = parseFloat(placement_rating);
    const campusLifeRating = parseFloat(campus_life_rating);
    const facultyRating = parseFloat(faculty_rating);
    const curriculumRating = parseFloat(college_curriculum_rating);
    const infrastructureRating = parseFloat(infrastructure_rating);

    const query = `
        INSERT INTO nmims_overall_rating 
       (Name, College_Name, Course_Name, Completion_Year, Review, 
        placement_rating, campus_life_rating, faculty_rating, curriculum_rating, infrastructure_rating) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    db.query(query, [
        nm, 
        clg_name, 
        branch_name, 
        completion_year, 
        review, 
        placementRating,
        campusLifeRating,
        facultyRating,
        curriculumRating,
        infrastructureRating
    ], (err, results) => {
        if (err) {
            console.error("Error inserting review:", err.message);
            return res.status(500).json({ status: false, message: "Database error", error: err.message });
        }

        console.log({ success: true, message: "Review updated successfully!" });

        setTimeout(() => {
            res.redirect("/nmims_render_all_reviews");
        }, 1000);
    });
});



app.post("/review_db_iim_ahemdabad", (req, res) => {
    // Get form data
    const { nm, clg_name, branch_name, completion_year, review, placement_rating, campus_life_rating, faculty_rating, college_curriculum_rating, infrastructure_rating } = req.body;
    console.log("Received Data:", req.body); // Debugging log

    // Convert ratings to decimal values
    const placementRating = parseFloat(placement_rating);
    const campusLifeRating = parseFloat(campus_life_rating);
    const facultyRating = parseFloat(faculty_rating);
    const curriculumRating = parseFloat(college_curriculum_rating);
    const infrastructureRating = parseFloat(infrastructure_rating);

    const query = `
       INSERT INTO iim_ahemdabad_overall_rating 
       (Name, College_Name, Course_Name, Completion_Year, Review, 
        placement_rating, campus_life_rating, faculty_rating, curriculum_rating, infrastructure_rating) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    db.query(query, [
        nm, 
        clg_name, 
        branch_name, 
        completion_year, 
        review, 
        placementRating,
        campusLifeRating,
        facultyRating,
        curriculumRating,
        infrastructureRating
    ], (err, results) => {
        if (err) {
            console.error("Error inserting review:", err.message);
            return res.status(500).json({ status: false, message: "Database error", error: err.message });
        }

        console.log({ success: true, message: "Review updated successfully!" });

        setTimeout(() => {
            res.redirect("/iim_ahemdabad_render_all_reviews");
        }, 1000);
    });
});




app.post("/review_db_sscbs", (req, res) => {
    // Get form data
    const { nm, clg_name, branch_name, completion_year, review, placement_rating, campus_life_rating, faculty_rating, college_curriculum_rating, infrastructure_rating } = req.body;
    console.log("Received Data:", req.body); // Debugging log

    // Convert ratings to decimal values
    const placementRating = parseFloat(placement_rating);
    const campusLifeRating = parseFloat(campus_life_rating);
    const facultyRating = parseFloat(faculty_rating);
    const curriculumRating = parseFloat(college_curriculum_rating);
    const infrastructureRating = parseFloat(infrastructure_rating);

    const query = `
        INSERT INTO sscbs_overall_rating 
       (Name, College_Name, Course_Name, Completion_Year, Review, 
        placement_rating, campus_life_rating, faculty_rating, curriculum_rating, infrastructure_rating) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    db.query(query, [
        nm, 
        clg_name, 
        branch_name, 
        completion_year, 
        review, 
        placementRating,
        campusLifeRating,
        facultyRating,
        curriculumRating,
        infrastructureRating
    ], (err, results) => {
        if (err) {
            console.error("Error inserting review:", err.message);
            return res.status(500).json({ status: false, message: "Database error", error: err.message });
        }

        console.log({ success: true, message: "Review updated successfully!" });

        setTimeout(() => {
            res.redirect("/sscbs_render_all_reviews");
        }, 1000);
    });
});




app.get("/sscbs_render_all_reviews", (req, res) => {
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
        const query1 = "SELECT * FROM sscbs_overall_rating";

        db.query(query1, (err, result1) => {
            if (err) {
                console.error("❌ Error retrieving reviews:", err);
                return res.status(500).send("Error retrieving reviews");
            }

            console.log("✅ Fetched Reviews:", result1);
            const reviewCount = result1.length;
            console.log("✅ Review Count:", reviewCount);


            console.log("Showing the results --------------------------------------")
            console.log(result1[0]);

            // Query 2: Fetch average placement rating
            const query2 = "SELECT placement_Rating AS avg_rating FROM sscbs_overall_rating where Review_id = 1";

            db.query(query2, (err, results2) => {
                if (err) {
                    console.error("❌ Error retrieving placement rating:", err);
                    return res.status(500).send("Error retrieving placement rating");
                }

                const placement_rating = Number(results2[0]?.avg_rating) || 0;
                console.warn(`⭐ Average Placement Rating: ${placement_rating}`);

                // Query 3: Fetch average infrastructure rating
                const query3 = "SELECT infrastructure_rating AS avg_rating FROM sscbs_overall_rating where Review_id = 1";

                db.query(query3, (err, results3) => {
                    if (err) {
                        console.error("❌ Error retrieving infrastructure rating:", err);
                        return res.status(500).send("Error retrieving infrastructure rating");
                    }

                    const infrastructure_rating = Number(results3[0]?.avg_rating) || 0;
                    console.warn(`⭐ Average Infrastructure Rating: ${infrastructure_rating}`);

                    // Query 4: Fetch average campus life rating
                    const query4 = "SELECT campus_life_rating AS avg_rating FROM sscbs_overall_rating where Review_id = 1";

                    db.query(query4, (err, result4) => {
                        if (err) {
                            console.error("❌ Error retrieving campus life rating:", err);
                            return res.status(500).send("Error retrieving campus life rating");
                        }

                        const campus_life_rating = Number(result4[0]?.avg_rating) || 0;
                        console.warn(`⭐ Average Campus Life Rating: ${campus_life_rating}`);

                        // Query 5: Fetch average college curriculum rating
                        const query5 = "SELECT curriculum_rating AS avg_rating FROM sscbs_overall_rating where Review_id = 1";

                        db.query(query5, (err, result5) => {
                            if (err) {
                                console.error("❌ Error retrieving college curriculum rating:", err);
                                return res.status(500).send("Error retrieving college curriculum rating");
                            }

                            const college_curriculum_rating = Number(result5[0]?.avg_rating) || 0;
                            console.warn(`⭐ Average College Curriculum Rating: ${college_curriculum_rating}`);

                            // Query 6: Fetch average faculty rating
                            const query6 = "SELECT faculty_rating AS avg_rating from sscbs_overall_rating where Review_id = 1";

                            db.query(query6 , (err , result6 ) => {
                                if (err) {
                                    console.error("❌ Error retrieving faculty rating:", err);
                                    return res.status(500).send("Error retrieving faculty rating");
                                }
                                
                                const faculty_rating = Number(result6[0]?.avg_rating) || 0;
                                console.warn(`⭐ Average Faculty Rating: ${faculty_rating}`);

                                // ✅ Render EJS with all collected data
                                res.render("sscbs_reviews", { 
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



app.get("/nmims_render_all_reviews", (req, res) => {
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
        const query1 = "SELECT * FROM nmims_overall_rating";

        db.query(query1, (err, result1) => {
            if (err) {
                console.error("❌ Error retrieving reviews:", err);
                return res.status(500).send("Error retrieving reviews");
            }

            console.log("✅ Fetched Reviews:", result1);
            const reviewCount = result1.length;
            console.log("✅ Review Count:", reviewCount);


            console.log("Showing the results --------------------------------------")
            console.log(result1[0]);

            // Query 2: Fetch average placement rating
            const query2 = "SELECT placement_Rating AS avg_rating FROM nmims_overall_rating where Review_id = 1";

            db.query(query2, (err, results2) => {
                if (err) {
                    console.error("❌ Error retrieving placement rating:", err);
                    return res.status(500).send("Error retrieving placement rating");
                }

                const placement_rating = Number(results2[0]?.avg_rating) || 0;
                console.warn(`⭐ Average Placement Rating: ${placement_rating}`);

                // Query 3: Fetch average infrastructure rating
                const query3 = "SELECT infrastructure_rating AS avg_rating FROM nmims_overall_rating where Review_id = 1";

                db.query(query3, (err, results3) => {
                    if (err) {
                        console.error("❌ Error retrieving infrastructure rating:", err);
                        return res.status(500).send("Error retrieving infrastructure rating");
                    }

                    const infrastructure_rating = Number(results3[0]?.avg_rating) || 0;
                    console.warn(`⭐ Average Infrastructure Rating: ${infrastructure_rating}`);

                    // Query 4: Fetch average campus life rating
                    const query4 = "SELECT campus_life_rating AS avg_rating FROM nmims_overall_rating where Review_id = 1";

                    db.query(query4, (err, result4) => {
                        if (err) {
                            console.error("❌ Error retrieving campus life rating:", err);
                            return res.status(500).send("Error retrieving campus life rating");
                        }

                        const campus_life_rating = Number(result4[0]?.avg_rating) || 0;
                        console.warn(`⭐ Average Campus Life Rating: ${campus_life_rating}`);

                        // Query 5: Fetch average college curriculum rating
                        const query5 = "SELECT curriculum_rating AS avg_rating FROM nmims_overall_rating where Review_id = 1";

                        db.query(query5, (err, result5) => {
                            if (err) {
                                console.error("❌ Error retrieving college curriculum rating:", err);
                                return res.status(500).send("Error retrieving college curriculum rating");
                            }

                            const college_curriculum_rating = Number(result5[0]?.avg_rating) || 0;
                            console.warn(`⭐ Average College Curriculum Rating: ${college_curriculum_rating}`);

                            // Query 6: Fetch average faculty rating
                            const query6 = "SELECT faculty_rating AS avg_rating from nmims_overall_rating where Review_id = 1";

                            db.query(query6 , (err , result6 ) => {
                                if (err) {
                                    console.error("❌ Error retrieving faculty rating:", err);
                                    return res.status(500).send("Error retrieving faculty rating");
                                }
                                
                                const faculty_rating = Number(result6[0]?.avg_rating) || 0;
                                console.warn(`⭐ Average Faculty Rating: ${faculty_rating}`);

                                // ✅ Render EJS with all collected data
                                res.render("nmims_reviews", { 
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


app.get("/christ_render_all_reviews", (req, res) => {
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
        const query1 = "SELECT * FROM christ_overall_rating";

        db.query(query1, (err, result1) => {
            if (err) {
                console.error("❌ Error retrieving reviews:", err);
                return res.status(500).send("Error retrieving reviews");
            }

            console.log("✅ Fetched Reviews:", result1);
            const reviewCount = result1.length;
            console.log("✅ Review Count:", reviewCount);


            console.log("Showing the results --------------------------------------")
            console.log(result1[0]);

            // Query 2: Fetch average placement rating
            const query2 = "SELECT placement_Rating AS avg_rating FROM christ_overall_rating where Review_id = 1";

            db.query(query2, (err, results2) => {
                if (err) {
                    console.error("❌ Error retrieving placement rating:", err);
                    return res.status(500).send("Error retrieving placement rating");
                }

                const placement_rating = Number(results2[0]?.avg_rating) || 0;
                console.warn(`⭐ Average Placement Rating: ${placement_rating}`);

                // Query 3: Fetch average infrastructure rating
                const query3 = "SELECT infrastructure_rating AS avg_rating FROM christ_overall_rating where Review_id = 1";

                db.query(query3, (err, results3) => {
                    if (err) {
                        console.error("❌ Error retrieving infrastructure rating:", err);
                        return res.status(500).send("Error retrieving infrastructure rating");
                    }

                    const infrastructure_rating = Number(results3[0]?.avg_rating) || 0;
                    console.warn(`⭐ Average Infrastructure Rating: ${infrastructure_rating}`);

                    // Query 4: Fetch average campus life rating
                    const query4 = "SELECT campus_life_rating AS avg_rating FROM christ_overall_rating where Review_id = 1";

                    db.query(query4, (err, result4) => {
                        if (err) {
                            console.error("❌ Error retrieving campus life rating:", err);
                            return res.status(500).send("Error retrieving campus life rating");
                        }

                        const campus_life_rating = Number(result4[0]?.avg_rating) || 0;
                        console.warn(`⭐ Average Campus Life Rating: ${campus_life_rating}`);

                        // Query 5: Fetch average college curriculum rating
                        const query5 = "SELECT curriculum_rating AS avg_rating FROM christ_overall_rating where Review_id = 1";

                        db.query(query5, (err, result5) => {
                            if (err) {
                                console.error("❌ Error retrieving college curriculum rating:", err);
                                return res.status(500).send("Error retrieving college curriculum rating");
                            }

                            const college_curriculum_rating = Number(result5[0]?.avg_rating) || 0;
                            console.warn(`⭐ Average College Curriculum Rating: ${college_curriculum_rating}`);

                            // Query 6: Fetch average faculty rating
                            const query6 = "SELECT faculty_rating AS avg_rating from christ_overall_rating where Review_id = 1";

                            db.query(query6 , (err , result6 ) => {
                                if (err) {
                                    console.error("❌ Error retrieving faculty rating:", err);
                                    return res.status(500).send("Error retrieving faculty rating");
                                }
                                
                                const faculty_rating = Number(result6[0]?.avg_rating) || 0;
                                console.warn(`⭐ Average Faculty Rating: ${faculty_rating}`);

                                // ✅ Render EJS with all collected data
                                res.render("christ_reviews", { 
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



app.get("/iim_ahemdabad_render_all_reviews", (req, res) => {
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
        const query1 = "SELECT * FROM iim_ahemdabad_overall_rating";

        db.query(query1, (err, result1) => {
            if (err) {
                console.error("❌ Error retrieving reviews:", err);
                return res.status(500).send("Error retrieving reviews");
            }

            console.log("✅ Fetched Reviews:", result1);
            const reviewCount = result1.length;
            console.log("✅ Review Count:", reviewCount);


            console.log("Showing the results --------------------------------------")
            console.log(result1[0]);

            // Query 2: Fetch average placement rating
            const query2 = "SELECT placement_Rating AS avg_rating FROM iim_bangalore_overall_rating where Review_id = 1";

            db.query(query2, (err, results2) => {
                if (err) {
                    console.error("❌ Error retrieving placement rating:", err);
                    return res.status(500).send("Error retrieving placement rating");
                }

                const placement_rating = Number(results2[0]?.avg_rating) || 0;
                console.warn(`⭐ Average Placement Rating: ${placement_rating}`);

                // Query 3: Fetch average infrastructure rating
                const query3 = "SELECT infrastructure_rating AS avg_rating FROM iim_bangalore_overall_rating where Review_id = 1";

                db.query(query3, (err, results3) => {
                    if (err) {
                        console.error("❌ Error retrieving infrastructure rating:", err);
                        return res.status(500).send("Error retrieving infrastructure rating");
                    }

                    const infrastructure_rating = Number(results3[0]?.avg_rating) || 0;
                    console.warn(`⭐ Average Infrastructure Rating: ${infrastructure_rating}`);

                    // Query 4: Fetch average campus life rating
                    const query4 = "SELECT campus_life_rating AS avg_rating FROM iim_bangalore_overall_rating where Review_id = 1";

                    db.query(query4, (err, result4) => {
                        if (err) {
                            console.error("❌ Error retrieving campus life rating:", err);
                            return res.status(500).send("Error retrieving campus life rating");
                        }

                        const campus_life_rating = Number(result4[0]?.avg_rating) || 0;
                        console.warn(`⭐ Average Campus Life Rating: ${campus_life_rating}`);

                        // Query 5: Fetch average college curriculum rating
                        const query5 = "SELECT curriculum_rating AS avg_rating FROM iim_bangalore_overall_rating where Review_id = 1";

                        db.query(query5, (err, result5) => {
                            if (err) {
                                console.error("❌ Error retrieving college curriculum rating:", err);
                                return res.status(500).send("Error retrieving college curriculum rating");
                            }

                            const college_curriculum_rating = Number(result5[0]?.avg_rating) || 0;
                            console.warn(`⭐ Average College Curriculum Rating: ${college_curriculum_rating}`);

                            // Query 6: Fetch average faculty rating
                            const query6 = "SELECT faculty_rating AS avg_rating from iim_bangalore_overall_rating where Review_id = 1";

                            db.query(query6 , (err , result6 ) => {
                                if (err) {
                                    console.error("❌ Error retrieving faculty rating:", err);
                                    return res.status(500).send("Error retrieving faculty rating");
                                }
                                
                                const faculty_rating = Number(result6[0]?.avg_rating) || 0;
                                console.warn(`⭐ Average Faculty Rating: ${faculty_rating}`);

                                // ✅ Render EJS with all collected data
                                res.render("iim_ahemdabad_reviews", { 
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




app.get("/iim_kozhikode_render_all_reviews", (req, res) => {
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
        const query1 = "SELECT * FROM iim_kozhikode_overall_rating";

        db.query(query1, (err, result1) => {
            if (err) {
                console.error("❌ Error retrieving reviews:", err);
                return res.status(500).send("Error retrieving reviews");
            }

            console.log("✅ Fetched Reviews:", result1);
            const reviewCount = result1.length;
            console.log("✅ Review Count:", reviewCount);


            console.log("Showing the results --------------------------------------")
            console.log(result1[0]);

            // Query 2: Fetch average placement rating
            const query2 = "SELECT placement_Rating AS avg_rating FROM iim_kozhikode_overall_rating where Review_id = 1";

            db.query(query2, (err, results2) => {
                if (err) {
                    console.error("❌ Error retrieving placement rating:", err);
                    return res.status(500).send("Error retrieving placement rating");
                }

                const placement_rating = Number(results2[0]?.avg_rating) || 0;
                console.warn(`⭐ Average Placement Rating: ${placement_rating}`);

                // Query 3: Fetch average infrastructure rating
                const query3 = "SELECT infrastructure_rating AS avg_rating FROM iim_kozhikode_overall_rating where Review_id = 1";

                db.query(query3, (err, results3) => {
                    if (err) {
                        console.error("❌ Error retrieving infrastructure rating:", err);
                        return res.status(500).send("Error retrieving infrastructure rating");
                    }

                    const infrastructure_rating = Number(results3[0]?.avg_rating) || 0;
                    console.warn(`⭐ Average Infrastructure Rating: ${infrastructure_rating}`);

                    // Query 4: Fetch average campus life rating
                    const query4 = "SELECT campus_life_rating AS avg_rating FROM iim_kozhikode_overall_rating where Review_id = 1";

                    db.query(query4, (err, result4) => {
                        if (err) {
                            console.error("❌ Error retrieving campus life rating:", err);
                            return res.status(500).send("Error retrieving campus life rating");
                        }

                        const campus_life_rating = Number(result4[0]?.avg_rating) || 0;
                        console.warn(`⭐ Average Campus Life Rating: ${campus_life_rating}`);

                        // Query 5: Fetch average college curriculum rating
                        const query5 = "SELECT curriculum_rating AS avg_rating FROM iim_kozhikode_overall_rating where Review_id = 1";

                        db.query(query5, (err, result5) => {
                            if (err) {
                                console.error("❌ Error retrieving college curriculum rating:", err);
                                return res.status(500).send("Error retrieving college curriculum rating");
                            }

                            const college_curriculum_rating = Number(result5[0]?.avg_rating) || 0;
                            console.warn(`⭐ Average College Curriculum Rating: ${college_curriculum_rating}`);

                            // Query 6: Fetch average faculty rating
                            const query6 = "SELECT faculty_rating AS avg_rating from iim_kozhikode_overall_rating where Review_id = 1";

                            db.query(query6 , (err , result6 ) => {
                                if (err) {
                                    console.error("❌ Error retrieving faculty rating:", err);
                                    return res.status(500).send("Error retrieving faculty rating");
                                }
                                
                                const faculty_rating = Number(result6[0]?.avg_rating) || 0;
                                console.warn(`⭐ Average Faculty Rating: ${faculty_rating}`);

                                // ✅ Render EJS with all collected data
                                res.render("iim_kozhikode_reviews", { 
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








// app.post("/review_db_iim_ahemdabad", (req, res) => {
//     const { clg_name, branch_name, completion_year, review, rating } = req.body;
//     console.log("Received Data:", req.body); // Debugging log

//     // ✅ Ensure rating is converted to a float
//     const ratingValue = parseFloat(rating);

//     // ✅ Correct SQL query
//     const query = `
//         INSERT INTO iim_ahemdabad_overall_rating (College_Name, Course_Name, Completion_Year, Review, placement_rating) 
//         VALUES (?, ?, ?, ?, ?);
//     `;

//     db.query(query, [clg_name, branch_name, completion_year, review, ratingValue], (err, results) => {
//         if (err) {
//             console.error("Error inserting review:", err.message);
//             return res.status(500).json({ success: false, message: "Database error", error: err.message });
//         }

//         res.json({ success: true, message: "Review and rating saved successfully!" });

//         setTimeout(() => {
//             res.redirect("/iim_ahemdabad_render_all_reviews");
//         }, 1000);
//     });
// });


app.post("/review_db_iim_lucknow", (req, res) => {
    // Get form data
    const { nm, clg_name, branch_name, completion_year, review, placement_rating, campus_life_rating, faculty_rating, college_curriculum_rating, infrastructure_rating } = req.body;
    console.log("Received Data:", req.body); // Debugging log

    // Convert ratings to decimal values with validation
    const placementRating = parseFloat(placement_rating) || 0;
    const campusLifeRating = parseFloat(campus_life_rating) || 0;
    const facultyRating = parseFloat(faculty_rating) || 0;
    const curriculumRating = parseFloat(college_curriculum_rating) || 0;
    const infrastructureRating = parseFloat(infrastructure_rating) || 0;

    // Validate all required fields
    if (!nm || !clg_name || !branch_name || !completion_year || !review) {
        return res.status(400).json({ 
            status: false, 
            message: "Missing required fields",
            error: "Please fill in all required fields" 
        });
    }

    // Validate rating values are between 0 and 5
    const ratings = [placementRating, campusLifeRating, facultyRating, curriculumRating, infrastructureRating];
    if (ratings.some(rating => rating < 0 || rating > 5)) {
        return res.status(400).json({
            status: false,
            message: "Invalid rating value",
            error: "Ratings must be between 0 and 5"
        });
    }

    const query = `
       INSERT INTO iim_lucknow_overall_rating 
       (Name, College_Name, Course_Name, Completion_Year, Review, 
        placement_rating, campus_life_rating, faculty_rating, curriculum_rating, infrastructure_rating) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    db.query(query, [
        nm, 
        clg_name, 
        branch_name, 
        completion_year, 
        review, 
        placementRating,
        campusLifeRating,
        facultyRating,
        curriculumRating,
        infrastructureRating
    ], (err, results) => {
        if (err) {
            console.error("Error inserting review:", err.message);
            return res.status(500).json({ status: false, message: "Database error", error: err.message });
        }

        console.log({ success: true, message: "Review updated successfully!" });

        setTimeout(() => {
            res.redirect("/iim_lucknow_render_all_reviews");
        }, 1000);
    });
});



app.post("/review_db_iim_bangalore", (req, res) => {
    // Get form data
    const { nm, clg_name, branch_name, completion_year, review, placement_rating, campus_life_rating, faculty_rating, college_curriculum_rating, infrastructure_rating } = req.body;
    console.log("Received Data:", req.body); // Debugging log

    // Convert ratings to decimal values with validation
    const placementRating = parseFloat(placement_rating) || 0;
    const campusLifeRating = parseFloat(campus_life_rating) || 0;
    const facultyRating = parseFloat(faculty_rating) || 0;
    const curriculumRating = parseFloat(college_curriculum_rating) || 0;
    const infrastructureRating = parseFloat(infrastructure_rating) || 0;

    // Validate all required fields
    if (!nm || !clg_name || !branch_name || !completion_year || !review) {
        return res.status(400).json({ 
            status: false, 
            message: "Missing required fields",
            error: "Please fill in all required fields" 
        });
    }

    // Validate rating values are between 0 and 5
    const ratings = [placementRating, campusLifeRating, facultyRating, curriculumRating, infrastructureRating];
    if (ratings.some(rating => rating < 0 || rating > 5)) {
        return res.status(400).json({
            status: false,
            message: "Invalid rating value",
            error: "Ratings must be between 0 and 5"
        });
    }

    const query = `
       INSERT INTO iim_bangalore_overall_rating 
       (Name, College_Name, Course_Name, Completion_Year, Review, 
        placement_rating, campus_life_rating, faculty_rating, curriculum_rating, infrastructure_rating) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    db.query(query, [
        nm, 
        clg_name, 
        branch_name, 
        completion_year, 
        review, 
        placementRating,
        campusLifeRating,
        facultyRating,
        curriculumRating,
        infrastructureRating
    ], (err, results) => {
        if (err) {
            console.error("Error inserting review:", err.message);
            return res.status(500).json({ status: false, message: "Database error", error: err.message });
        }

        console.log({ success: true, message: "Review updated successfully!" });

        setTimeout(() => {
            res.redirect("/iim_bangalore_render_all_reviews");
        }, 1000);
    });
});



app.post("/review_db_iim_kolkata", (req, res) => {
    const { nm, clg_name, branch_name, completion_year, review, placement_rating, campus_life_rating, faculty_rating, college_curriculum_rating, infrastructure_rating } = req.body;
    console.log("Received Data:", req.body); // Debugging log

    // Convert ratings to decimal values with validation
    const placementRating = parseFloat(placement_rating) || 0;
    const campusLifeRating = parseFloat(campus_life_rating) || 0;
    const facultyRating = parseFloat(faculty_rating) || 0;
    const curriculumRating = parseFloat(college_curriculum_rating) || 0;
    const infrastructureRating = parseFloat(infrastructure_rating) || 0;

    // Validate all required fields
    if (!nm || !clg_name || !branch_name || !completion_year || !review) {
        return res.status(400).json({ 
            status: false, 
            message: "Missing required fields",
            error: "Please fill in all required fields" 
        });
    }

    // Validate rating values are between 0 and 5
    const ratings = [placementRating, campusLifeRating, facultyRating, curriculumRating, infrastructureRating];
    if (ratings.some(rating => rating < 0 || rating > 5)) {
        return res.status(400).json({
            status: false,
            message: "Invalid rating value",
            error: "Ratings must be between 0 and 5"
        });
    }

    const query = `
       INSERT INTO iim_kolkata_overall_rating 
       (Name, College_Name, Course_Name, Completion_Year, Review, 
        placement_rating, campus_life_rating, faculty_rating, curriculum_rating, infrastructure_rating) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    db.query(query, [
        nm, 
        clg_name, 
        branch_name, 
        completion_year, 
        review, 
        placementRating,
        campusLifeRating,
        facultyRating,
        curriculumRating,
        infrastructureRating
    ], (err, results) => {
        if (err) {
            console.error("Error inserting review:", err.message);
            return res.status(500).json({ status: false, message: "Database error", error: err.message });
        }

        console.log({ success: true, message: "Review updated successfully!" });

        setTimeout(() => {
            res.redirect("iim_kolkata_render_all_reviews");
        }, 1000);
    });
});


app.post("/review_db_iim_kozhikode", (req, res) => {
    const { nm, clg_name, branch_name, completion_year, review, placement_rating, campus_life_rating, faculty_rating, college_curriculum_rating, infrastructure_rating } = req.body;
    console.log("Received Data:", req.body); // Debugging log

    // Convert ratings to decimal values with validation
    const placementRating = parseFloat(placement_rating) || 0;
    const campusLifeRating = parseFloat(campus_life_rating) || 0;
    const facultyRating = parseFloat(faculty_rating) || 0;
    const curriculumRating = parseFloat(college_curriculum_rating) || 0;
    const infrastructureRating = parseFloat(infrastructure_rating) || 0;

    // Validate all required fields
    if (!nm || !clg_name || !branch_name || !completion_year || !review) {
        return res.status(400).json({ 
            status: false, 
            message: "Missing required fields",
            error: "Please fill in all required fields" 
        });
    }

    // Validate rating values are between 0 and 5
    const ratings = [placementRating, campusLifeRating, facultyRating, curriculumRating, infrastructureRating];
    if (ratings.some(rating => rating < 0 || rating > 5)) {
        return res.status(400).json({
            status: false,
            message: "Invalid rating value",
            error: "Ratings must be between 0 and 5"
        });
    }

    const query = `
       INSERT INTO iim_kozhikode_overall_rating 
       (Name, College_Name, Course_Name, Completion_Year, Review, 
        placement_rating, campus_life_rating, faculty_rating, curriculum_rating, infrastructure_rating) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    db.query(query, [
        nm, 
        clg_name, 
        branch_name, 
        completion_year, 
        review, 
        placementRating,
        campusLifeRating,
        facultyRating,
        curriculumRating,
        infrastructureRating
    ], (err, results) => {
        if (err) {
            console.error("Error inserting review:", err.message);
            return res.status(500).json({ status: false, message: "Database error", error: err.message });
        }

        console.log({ success: true, message: "Review updated successfully!" });

        setTimeout(() => {
            res.redirect("iim_kozhikode_render_all_reviews");
        }, 1000);
    });
});




app.post("/review_db_XLRI", (req, res) => {
    // Get form data
    const { nm, clg_name, branch_name, completion_year, review, placement_rating, campus_life_rating, faculty_rating, college_curriculum_rating, infrastructure_rating } = req.body;
    console.log("Received Data:", req.body); // Debugging log

    // Convert ratings to decimal values with validation
    const placementRating = parseFloat(placement_rating) || 0;
    const campusLifeRating = parseFloat(campus_life_rating) || 0;
    const facultyRating = parseFloat(faculty_rating) || 0;
    const curriculumRating = parseFloat(college_curriculum_rating) || 0;
    const infrastructureRating = parseFloat(infrastructure_rating) || 0;

    // Validate all required fields
    if (!nm || !clg_name || !branch_name || !completion_year || !review) {
        return res.status(400).json({ 
            status: false, 
            message: "Missing required fields",
            error: "Please fill in all required fields" 
        });
    }

    // Validate rating values are between 0 and 5
    const ratings = [placementRating, campusLifeRating, facultyRating, curriculumRating, infrastructureRating];
    if (ratings.some(rating => rating < 0 || rating > 5)) {
        return res.status(400).json({
            status: false,
            message: "Invalid rating value",
            error: "Ratings must be between 0 and 5"
        });
    }

    const query = `
       INSERT INTO XLRI_overall_rating 
       (Name, College_Name, Course_Name, Completion_Year, Review, 
        placement_rating, campus_life_rating, faculty_rating, curriculum_rating, infrastructure_rating) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    db.query(query, [
        nm, 
        clg_name, 
        branch_name, 
        completion_year, 
        review, 
        placementRating,
        campusLifeRating,
        facultyRating,
        curriculumRating,
        infrastructureRating
    ], (err, results) => {
        if (err) {
            console.error("Error inserting review:", err.message);
            return res.status(500).json({ status: false, message: "Database error", error: err.message });
        }

        console.log({ success: true, message: "Review updated successfully!" });

        setTimeout(() => {
            res.redirect("XLRI_render_all_reviews");
        }, 1000);
    });
});



app.get("/XLRI_render_all_reviews", (req, res) => {
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
        const query1 = "SELECT * FROM XLRI_overall_rating";

        db.query(query1, (err, result1) => {
            if (err) {
                console.error("❌ Error retrieving reviews:", err);
                return res.status(500).send("Error retrieving reviews");
            }

            console.log("✅ Fetched Reviews:", result1);
            const reviewCount = result1.length;
            console.log("✅ Review Count:", reviewCount);


            console.log("Showing the results --------------------------------------")
            console.log(result1[0]);

            // Query 2: Fetch average placement rating
            const query2 = "SELECT placement_Rating AS avg_rating FROM XLRI_overall_rating where Review_id = 1";

            db.query(query2, (err, results2) => {
                if (err) {
                    console.error("❌ Error retrieving placement rating:", err);
                    return res.status(500).send("Error retrieving placement rating");
                }

                const placement_rating = Number(results2[0]?.avg_rating) || 0;
                console.warn(`⭐ Average Placement Rating: ${placement_rating}`);

                // Query 3: Fetch average infrastructure rating
                const query3 = "SELECT infrastructure_rating AS avg_rating FROM XLRI_overall_rating where Review_id = 1";

                db.query(query3, (err, results3) => {
                    if (err) {
                        console.error("❌ Error retrieving infrastructure rating:", err);
                        return res.status(500).send("Error retrieving infrastructure rating");
                    }

                    const infrastructure_rating = Number(results3[0]?.avg_rating) || 0;
                    console.warn(`⭐ Average Infrastructure Rating: ${infrastructure_rating}`);

                    // Query 4: Fetch average campus life rating
                    const query4 = "SELECT campus_life_rating AS avg_rating FROM XLRI_overall_rating where Review_id = 1";

                    db.query(query4, (err, result4) => {
                        if (err) {
                            console.error("❌ Error retrieving campus life rating:", err);
                            return res.status(500).send("Error retrieving campus life rating");
                        }

                        const campus_life_rating = Number(result4[0]?.avg_rating) || 0;
                        console.warn(`⭐ Average Campus Life Rating: ${campus_life_rating}`);

                        // Query 5: Fetch average college curriculum rating
                        const query5 = "SELECT curriculum_rating AS avg_rating FROM XLRI_overall_rating where Review_id = 1";

                        db.query(query5, (err, result5) => {
                            if (err) {
                                console.error("❌ Error retrieving college curriculum rating:", err);
                                return res.status(500).send("Error retrieving college curriculum rating");
                            }

                            const college_curriculum_rating = Number(result5[0]?.avg_rating) || 0;
                            console.warn(`⭐ Average College Curriculum Rating: ${college_curriculum_rating}`);

                            // Query 6: Fetch average faculty rating
                            const query6 = "SELECT faculty_rating AS avg_rating from XLRI_overall_rating where Review_id = 1";

                            db.query(query6 , (err , result6 ) => {
                                if (err) {
                                    console.error("❌ Error retrieving faculty rating:", err);
                                    return res.status(500).send("Error retrieving faculty rating");
                                }
                                
                                const faculty_rating = Number(result6[0]?.avg_rating) || 0;
                                console.warn(`⭐ Average Faculty Rating: ${faculty_rating}`);

                                // ✅ Render EJS with all collected data
                                res.render("XLRI_reviews", { 
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




app.get("/iim_kolkata_render_all_reviews", (req, res) => {
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
        const query1 = "SELECT * FROM iim_kolkata_overall_rating";

        db.query(query1, (err, result1) => {
            if (err) {
                console.error("❌ Error retrieving reviews:", err);
                return res.status(500).send("Error retrieving reviews");
            }

            console.log("✅ Fetched Reviews:", result1);
            const reviewCount = result1.length;
            console.log("✅ Review Count:", reviewCount);


            console.log("Showing the results --------------------------------------")
            console.log(result1[0]);

            // Query 2: Fetch average placement rating
            const query2 = "SELECT placement_Rating AS avg_rating FROM iim_kolkata_overall_rating where Review_id = 1";

            db.query(query2, (err, results2) => {
                if (err) {
                    console.error("❌ Error retrieving placement rating:", err);
                    return res.status(500).send("Error retrieving placement rating");
                }

                const placement_rating = Number(results2[0]?.avg_rating) || 0;
                console.warn(`⭐ Average Placement Rating: ${placement_rating}`);

                // Query 3: Fetch average infrastructure rating
                const query3 = "SELECT infrastructure_rating AS avg_rating FROM iim_kolkata_overall_rating where Review_id = 1";

                db.query(query3, (err, results3) => {
                    if (err) {
                        console.error("❌ Error retrieving infrastructure rating:", err);
                        return res.status(500).send("Error retrieving infrastructure rating");
                    }

                    const infrastructure_rating = Number(results3[0]?.avg_rating) || 0;
                    console.warn(`⭐ Average Infrastructure Rating: ${infrastructure_rating}`);

                    // Query 4: Fetch average campus life rating
                    const query4 = "SELECT campus_life_rating AS avg_rating FROM iim_kolkata_overall_rating where Review_id = 1";

                    db.query(query4, (err, result4) => {
                        if (err) {
                            console.error("❌ Error retrieving campus life rating:", err);
                            return res.status(500).send("Error retrieving campus life rating");
                        }

                        const campus_life_rating = Number(result4[0]?.avg_rating) || 0;
                        console.warn(`⭐ Average Campus Life Rating: ${campus_life_rating}`);

                        // Query 5: Fetch average college curriculum rating
                        const query5 = "SELECT curriculum_rating AS avg_rating FROM iim_kolkata_overall_rating where Review_id = 1";

                        db.query(query5, (err, result5) => {
                            if (err) {
                                console.error("❌ Error retrieving college curriculum rating:", err);
                                return res.status(500).send("Error retrieving college curriculum rating");
                            }

                            const college_curriculum_rating = Number(result5[0]?.avg_rating) || 0;
                            console.warn(`⭐ Average College Curriculum Rating: ${college_curriculum_rating}`);

                            // Query 6: Fetch average faculty rating
                            const query6 = "SELECT faculty_rating AS avg_rating from iim_kolkata_overall_rating where Review_id = 1";

                            db.query(query6 , (err , result6 ) => {
                                if (err) {
                                    console.error("❌ Error retrieving faculty rating:", err);
                                    return res.status(500).send("Error retrieving faculty rating");
                                }
                                
                                const faculty_rating = Number(result6[0]?.avg_rating) || 0;
                                console.warn(`⭐ Average Faculty Rating: ${faculty_rating}`);

                                // ✅ Render EJS with all collected data
                                res.render("iim_kolkata_reviews", { 
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




app.get("/iim_bangalore_render_all_reviews", (req, res) => {
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
        const query1 = "SELECT * FROM iim_bangalore_overall_rating";

        db.query(query1, (err, result1) => {
            if (err) {
                console.error("❌ Error retrieving reviews:", err);
                return res.status(500).send("Error retrieving reviews");
            }

            console.log("✅ Fetched Reviews:", result1);
            const reviewCount = result1.length;
            console.log("✅ Review Count:", reviewCount);


            console.log("Showing the results --------------------------------------")
            console.log(result1[0]);

            // Query 2: Fetch average placement rating
            const query2 = "SELECT placement_Rating AS avg_rating FROM iim_bangalore_overall_rating where Review_id = 1";

            db.query(query2, (err, results2) => {
                if (err) {
                    console.error("❌ Error retrieving placement rating:", err);
                    return res.status(500).send("Error retrieving placement rating");
                }

                const placement_rating = Number(results2[0]?.avg_rating) || 0;
                console.warn(`⭐ Average Placement Rating: ${placement_rating}`);

                // Query 3: Fetch average infrastructure rating
                const query3 = "SELECT infrastructure_rating AS avg_rating FROM iim_bangalore_overall_rating where Review_id = 1";

                db.query(query3, (err, results3) => {
                    if (err) {
                        console.error("❌ Error retrieving infrastructure rating:", err);
                        return res.status(500).send("Error retrieving infrastructure rating");
                    }

                    const infrastructure_rating = Number(results3[0]?.avg_rating) || 0;
                    console.warn(`⭐ Average Infrastructure Rating: ${infrastructure_rating}`);

                    // Query 4: Fetch average campus life rating
                    const query4 = "SELECT campus_life_rating AS avg_rating FROM iim_bangalore_overall_rating where Review_id = 1";

                    db.query(query4, (err, result4) => {
                        if (err) {
                            console.error("❌ Error retrieving campus life rating:", err);
                            return res.status(500).send("Error retrieving campus life rating");
                        }

                        const campus_life_rating = Number(result4[0]?.avg_rating) || 0;
                        console.warn(`⭐ Average Campus Life Rating: ${campus_life_rating}`);

                        // Query 5: Fetch average college curriculum rating
                        const query5 = "SELECT curriculum_rating AS avg_rating FROM iim_bangalore_overall_rating where Review_id = 1";

                        db.query(query5, (err, result5) => {
                            if (err) {
                                console.error("❌ Error retrieving college curriculum rating:", err);
                                return res.status(500).send("Error retrieving college curriculum rating");
                            }

                            const college_curriculum_rating = Number(result5[0]?.avg_rating) || 0;
                            console.warn(`⭐ Average College Curriculum Rating: ${college_curriculum_rating}`);

                            // Query 6: Fetch average faculty rating
                            const query6 = "SELECT faculty_rating AS avg_rating from iim_bangalore_overall_rating where Review_id = 1";

                            db.query(query6 , (err , result6 ) => {
                                if (err) {
                                    console.error("❌ Error retrieving faculty rating:", err);
                                    return res.status(500).send("Error retrieving faculty rating");
                                }
                                
                                const faculty_rating = Number(result6[0]?.avg_rating) || 0;
                                console.warn(`⭐ Average Faculty Rating: ${faculty_rating}`);

                                // ✅ Render EJS with all collected data
                                res.render("iim_bangalore_reviews", { 
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

app.get("/iim_ahemdabad_write_review" , (req , res) => {
    const filepath2 = path.join(__dirname , "colleges_mba" , "IIM_Ahemdabad" , "iim_ahemdabad_write_review.html");

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




app.get("/iim_lucknow_render_all_reviews", (req, res) => {
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
        const query1 = "SELECT * FROM iim_lucknow_overall_rating where Review_id = 1";

        db.query(query1, (err, result1) => {
            if (err) {
                console.error("❌ Error retrieving reviews:", err);
                return res.status(500).send("Error retrieving reviews");
            }

            console.log("✅ Fetched Reviews:", result1);
            const reviewCount = result1.length;

            // Query 2: Fetch average placement rating
            const query2 = "SELECT AVG(placement_rating) AS avg_rating FROM iim_lucknow_overall_rating";

            db.query(query2, (err, results2) => {
                if (err) {
                    console.error("❌ Error retrieving placement rating:", err);
                    return res.status(500).send("Error retrieving placement rating");
                }

                const placement_rating = Number(results2[0]?.avg_rating) || 0;
                console.warn(`⭐ Average Placement Rating: ${placement_rating}`);

                // Query 3: Fetch average infrastructure rating
                const query3 = "SELECT AVG(infrastructure_rating) AS avg_rating FROM iim_lucknow_overall_rating";

                db.query(query3, (err, results3) => {
                    if (err) {
                        console.error("❌ Error retrieving infrastructure rating:", err);
                        return res.status(500).send("Error retrieving infrastructure rating");
                    }

                    const infrastructure_rating = Number(results3[0]?.avg_rating) || 0;
                    console.warn(`⭐ Average Infrastructure Rating: ${infrastructure_rating}`);

                    // Query 4: Fetch average campus life rating
                    const query4 = "SELECT AVG(campus_life_rating) AS avg_rating FROM iim_lucknow_overall_rating";

                    db.query(query4, (err, result4) => {
                        if (err) {
                            console.error("❌ Error retrieving campus life rating:", err);
                            return res.status(500).send("Error retrieving campus life rating");
                        }

                        const campus_life_rating = Number(result4[0]?.avg_rating) || 0;
                        console.warn(`⭐ Average Campus Life Rating: ${campus_life_rating}`);

                        // Query 5: Fetch average college curriculum rating
                        const query5 = "SELECT AVG(curriculum_rating) AS avg_rating FROM iim_lucknow_overall_rating";

                        db.query(query5, (err, result5) => {
                            if (err) {
                                console.error("❌ Error retrieving college curriculum rating:", err);
                                return res.status(500).send("Error retrieving college curriculum rating");
                            }

                            const college_curriculum_rating = Number(result5[0]?.avg_rating) || 0;
                            console.warn(`⭐ Average College Curriculum Rating: ${college_curriculum_rating}`);

                            // Query 6: Fetch average faculty rating
                            const query6 = "SELECT AVG(faculty_rating) AS avg_rating FROM iim_lucknow_overall_rating";

                            db.query(query6 , (err , result6 ) => {
                                if (err) {
                                    console.error("❌ Error retrieving faculty rating:", err);
                                    return res.status(500).send("Error retrieving faculty rating");
                                }
                                
                                const faculty_rating = Number(result6[0]?.avg_rating) || 0;
                                console.warn(`⭐ Average Faculty Rating: ${faculty_rating}`);

                                // ✅ Render EJS with all collected data
                                res.render("iim_lucknow_reviews", { 
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
})

app.get("/get_placement_rating_iim_lucknow", (req, res) => {
    const sql2 = "SELECT AVG(placement_rating) AS avg_rating FROM iim_lucknow_overall_rating";
    db.query(sql2 , (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            res.json({ rating: result[0].avg_rating }); // Use the correct alias
        }
    });
});

app.get("/get_infrastructure_rating_iim_lucknow", (req, res) => {
    const sql2 = "SELECT AVG(infrastructure_rating) AS avg_rating FROM iim_lucknow_overall_rating";
    db.query(sql2 , (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            res.json({ rating: result[0].avg_rating }); // Use the correct alias
        }
    });
});

app.get("/get_curriculum_rating_iim_lucknow", (req, res) => {
    const sql2 = "SELECT AVG(curriculum_rating) AS avg_rating FROM iim_lucknow_overall_rating";
    db.query(sql2 , (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            res.json({ rating: result[0].avg_rating }); // Use the correct alias
        }
    });
})

app.get("/get_faculty_rating_iim_lucknow", (req, res) => {
    const sql2 = "SELECT AVG(faculty_rating) AS avg_rating FROM iim_lucknow_overall_rating";
    db.query(sql2 , (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            res.json({ rating: result[0].avg_rating }); // Use the correct alias
        }
    });
})



app.get("/get_campus_life_rating_iim_lucknow", (req, res) => {
    const sql2 = "SELECT AVG(campus_life_rating) AS avg_rating FROM iim_lucknow_overall_rating";
    db.query(sql2 , (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            res.json({ rating: result[0].avg_rating }); // Use the correct alias
        }
    });
});




app.get("/get_placement_rating_sscbs", (req, res) => {
    const sql2 = "SELECT AVG(placement_rating) AS avg_rating FROM sscbs_overall_rating";
    db.query(sql2 , (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            res.json({ rating: result[0].avg_rating }); // Use the correct alias
        }
    });
});



app.get("/get_campus_life_rating_sscbs", (req, res) => {
    const sql2 = "SELECT AVG(campus_life_rating) AS avg_rating FROM sscbs_overall_rating";
    db.query(sql2 , (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            res.json({ rating: result[0].avg_rating }); // Use the correct alias
        }
    });
});


app.get("/get_infrastructure_rating_sscbs", (req, res) => {
    const sql2 = "SELECT AVG(infrastructure_rating) AS avg_rating FROM sscbs_overall_rating";
    db.query(sql2 , (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });  
        } else {
            res.json({ rating: result[0].avg_rating }); // Use the correct alias
        }
    });
});

app.get("/get_college_curriculum_rating_sscbs", (req, res) => {
    const sql2 = "SELECT AVG(curriculum_rating) AS avg_rating FROM sscbs_overall_rating";
    db.query(sql2 , (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });  
        } else {
            res.json({ rating: result[0].avg_rating }); // Use the correct alias
        }
    });
});

app.get("/get_faculty_rating_sscbs", (req, res) => {
    const sql2 = "SELECT AVG(faculty_rating) AS avg_rating FROM sscbs_overall_rating";
    db.query(sql2 , (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" }); 
        } else {
            res.json({ rating: result[0].avg_rating }); // Use the correct alias
        }
    });
});


//Get SCMS College Rating

app.get("/get_placement_rating_scms", (req, res) => {
    const sql2 = "SELECT AVG(placement_rating) AS avg_rating FROM scms_overall_rating";
    db.query(sql2 , (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" }); 
        } else {
            res.json({ rating: result[0].avg_rating }); // Use the correct alias
        }
    });
});

app.get("/get_campus_life_rating_scms", (req, res) => {
    const sql2 = "SELECT AVG(campus_life_rating) AS avg_rating FROM scms_overall_rating";
    db.query(sql2 , (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" }); 
        } else {
            res.json({ rating: result[0].avg_rating }); // Use the correct alias
        }
    });
});

app.get("/get_infrastructure_rating_scms", (req, res) => {
    const sql2 = "SELECT AVG(infrastructure_rating) AS avg_rating FROM scms_overall_rating";
    db.query(sql2 , (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            res.json({ rating: result[0].avg_rating }); // Use the correct alias
        }
    });
});

app.get("/get_college_curriculum_rating_scms", (req, res) => {
    const sql2 = "SELECT AVG(curriculum_rating) AS avg_rating FROM scms_overall_rating";
    db.query(sql2 , (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" }); 
        } else {
            res.json({ rating: result[0].avg_rating }); // Use the correct alias
        }
    });
});

app.get("/get_faculty_rating_scms", (req, res) => {
    const sql2 = "SELECT AVG(faculty_rating) AS avg_rating FROM scms_overall_rating";
    db.query(sql2 , (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            res.json({ rating: result[0].avg_rating }); // Use the correct alias
        }
    });
});

//Get Mount Caramel College Rating
app.get("/get_placement_rating_mount_caramel", (req, res) => {
    const sql2 = "SELECT AVG(placement_rating) AS avg_rating FROM mount_caramel_overall_rating";
    db.query(sql2 , (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            res.json({ rating: result[0].avg_rating }); // Use the correct alias
        }
    });
});

app.get("/get_campus_life_rating_mount_caramel", (req, res) => {
    const sql2 = "SELECT AVG(campus_life_rating) AS avg_rating FROM mount_caramel_overall_rating";
    db.query(sql2 , (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" }); 
        } else {
            res.json({ rating: result[0].avg_rating }); // Use the correct alias
        }
    });
});

app.get("/get_infrastructure_rating_mount_caramel", (req, res) => {
    const sql2 = "SELECT AVG(infrastructure_rating) AS avg_rating FROM mount_caramel_overall_rating";
    db.query(sql2 , (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" }); 
        } else {
            res.json({ rating: result[0].avg_rating }); // Use the correct alias
        }
    });
});

app.get("/get_college_curriculum_rating_mount_caramel", (req, res) => {
    const sql2 = "SELECT AVG(curriculum_rating) AS avg_rating FROM mount_caramel_overall_rating";
    db.query(sql2 , (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            res.json({ rating: result[0].avg_rating }); // Use the correct alias
        }
    });
});

app.get("/get_faculty_rating_mount_caramel", (req, res) => {
    const sql2 = "SELECT AVG(faculty_rating) AS avg_rating FROM mount_caramel_overall_rating";
    db.query(sql2 , (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" }); 
        } else {
            res.json({ rating: result[0].avg_rating }); // Use the correct alias
        }
    });
});




// Get Christ College Rating
app.get("/get_placement_rating_christ", (req, res) => {
    const sql2 = "SELECT AVG(placement_rating) AS avg_rating FROM christ_overall_rating";
    db.query(sql2 , (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            res.json({ rating: result[0].avg_rating }); // Use the correct alias
        }
    });
});


app.get("/get_campus_life_rating_christ", (req, res) => {
    const sql2 = "SELECT AVG(campus_life_rating) AS avg_rating FROM christ_overall_rating";
    db.query(sql2 , (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            res.json({ rating: result[0].avg_rating }); // Use the correct alias
        }
    });
});

app.get("/get_infrastructure_rating_christ", (req, res) => {
    const sql2 = "SELECT AVG(infrastructure_rating) AS avg_rating FROM christ_overall_rating";
    db.query(sql2 , (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });  
        } else {
            res.json({ rating: result[0].avg_rating }); // Use the correct alias
        }
    });
});

app.get("/get_college_curriculum_rating_christ", (req, res) => {
    const sql2 = "SELECT AVG(curriculum_rating) AS avg_rating FROM christ_overall_rating";
    db.query(sql2 , (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });    
        } else {
            res.json({ rating: result[0].avg_rating }); // Use the correct alias
        }
    });
});

app.get("/get_faculty_rating_christ", (req, res) => {
    const sql2 = "SELECT AVG(faculty_rating) AS avg_rating FROM christ_overall_rating";
    db.query(sql2 , (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });  
        } else {
            res.json({ rating: result[0].avg_rating }); // Use the correct alias
        }
    });
});




//Get IIM Ahemdabad Rating
app.get("/get_placement_rating_iim_ahemdabad", (req, res) => {
    const sql2 = "SELECT placement_rating AS avg_rating FROM iim_ahemdabad_overall_rating";
    db.query(sql2, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            const rating = result[0]?.avg_rating || 0;
            res.json({ rating });
        }
    });
});

app.get("/get_campus_life_rating_iim_ahemdabad", (req, res) => {
    const sql2 = "SELECT campus_life_rating AS avg_rating FROM iim_ahemdabad_overall_rating";
    db.query(sql2, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            const rating = result[0]?.avg_rating || 0;
            res.json({ rating });
        }
    });
});

app.get("/get_infrastructure_rating_iim_ahemdabad", (req, res) => {
    const sql2 = "SELECT infrastructure_rating AS avg_rating FROM iim_ahemdabad_overall_rating";
    db.query(sql2, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            const rating = result[0]?.avg_rating || 0;
            res.json({ rating });
        }
    });
});


app.get("/get_college_curriculum_rating_iim_ahemdabad", (req, res) => {
    const sql2 = "SELECT curriculum_rating AS avg_rating FROM iim_ahemdabad_overall_rating";
    db.query(sql2, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            const rating = result[0]?.avg_rating || 0;
            res.json({ rating });
        }
    });
});

app.get("/get_faculty_rating_iim_ahemdabad", (req, res) => {
    const sql2 = "SELECT faculty_rating AS avg_rating FROM iim_ahemdabad_overall_rating";
    db.query(sql2, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            const rating = result[0]?.avg_rating || 0;
            res.json({ rating });
        }
    });
});




//Get IIM Bangalore Rating
app.get("/get_placement_rating_iim_bangalore", (req, res) => {
    const sql2 = "SELECT AVG(placement_rating) AS avg_rating FROM iim_bangalore_overall_rating";
    db.query(sql2, (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Database Error" });
        }
        // Check if we have any results and if the average is not null
        if (!result || result.length === 0 || result[0].avg_rating === null) {
            return res.status(404).json({ error: "No ratings available" });
        }
        const rating = parseFloat(result[0].avg_rating);
        res.json({ rating: rating.toFixed(2) });
    });
});


app.get("/get_campus_life_rating_iim_bangalore", (req, res) => {
    const sql2 = "SELECT avg(campus_life_rating) AS avg_rating FROM  iim_bangalore_overall_rating ";
    db.query(sql2, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            const rating = result[0]?.avg_rating || 0;
            res.json({ rating });
        }
    });
});


app.get("/get_faculty_rating_iim_bangalore", (req, res) => {
    const sql2 = "SELECT avg(faculty_rating) AS avg_rating FROM  iim_bangalore_overall_rating ";
    db.query(sql2, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            const rating = result[0]?.avg_rating || 0;
            res.json({ rating });
        }
    });
});

app.get("/get_infrastructure_rating_iim_bangalore", (req, res) => {
    const sql2 = "SELECT avg(infrastructure_rating) AS avg_rating FROM  iim_bangalore_overall_rating ";
    db.query(sql2, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            const rating = result[0]?.avg_rating || 0;
            res.json({ rating });
        }
    });
});


app.get("/get_curriculum_rating_iim_bangalore", (req, res) => {
    const sql2 = "SELECT avg(curriculum_rating) AS avg_rating FROM  iim_bangalore_overall_rating ";
    db.query(sql2, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            const rating = result[0]?.avg_rating || 0;
            res.json({ rating });
        }
    });
});




//Get XLRI Rating
app.get("/get_placement_rating_XLRI", (req, res) => {
    const sql2 = "SELECT AVG(placement_rating) AS avg_rating FROM XLRI_overall_rating";
    db.query(sql2, (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Database Error" });
        }
        // Check if we have any results and if the average is not null
        if (!result || result.length === 0 || result[0].avg_rating === null) {
            return res.status(404).json({ error: "No ratings available" });
        }
        const rating = parseFloat(result[0].avg_rating);
        res.json({ rating: rating.toFixed(2) });
    });
});


app.get("/get_campus_life_rating_XLRI", (req, res) => {
    const sql2 = "SELECT avg(campus_life_rating) AS avg_rating FROM  XLRI_overall_rating ";
    db.query(sql2, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            const rating = result[0]?.avg_rating || 0;
            res.json({ rating });
        }
    });
});


app.get("/get_faculty_rating_XLRI", (req, res) => {
    const sql2 = "SELECT avg(faculty_rating) AS avg_rating FROM  XLRI_overall_rating ";
    db.query(sql2, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            const rating = result[0]?.avg_rating || 0;
            res.json({ rating });
        }
    });
});



app.get("/get_infrastructure_rating_XLRI", (req, res) => {
    const sql2 = "SELECT avg(infrastructure_rating) AS avg_rating FROM XLRI_overall_rating ";
    db.query(sql2, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            const rating = result[0]?.avg_rating || 0;
            res.json({ rating });
        }
    });
});



app.get("/get_curriculum_rating_XLRI", (req, res) => {
    const sql2 = "SELECT avg(curriculum_rating) AS avg_rating FROM XLRI_overall_rating ";
    db.query(sql2, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            const rating = result[0]?.avg_rating || 0;
            res.json({ rating });
        }
    });
});





//Get IIM Kolkata Rating
app.get("/get_placement_rating_iim_kolkata", (req, res) => {
    const sql2 = "SELECT AVG(placement_rating) AS avg_rating FROM iim_kolkata_overall_rating";
    db.query(sql2, (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Database Error" });
        }
        // Check if we have any results and if the average is not null
        if (!result || result.length === 0 || result[0].avg_rating === null) {
            return res.status(404).json({ error: "No ratings available" });
        }
        const rating = parseFloat(result[0].avg_rating);
        res.json({ rating: rating.toFixed(2) });
    });
});


app.get("/get_faculty_rating_iim_kolkata", (req, res) => {
    const sql2 = "SELECT avg(faculty_rating) AS avg_rating FROM iim_kolkata_overall_rating ";
    db.query(sql2, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            const rating = result[0]?.avg_rating || 0;
            res.json({ rating });
        }
    });
});


app.get("/get_campus_life_rating_iim_kolkata", (req, res) => {
    const sql2 = "SELECT avg(campus_life_rating) AS avg_rating FROM iim_kolkata_overall_rating ";
    db.query(sql2, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            const rating = result[0]?.avg_rating || 0;
            res.json({ rating });
        }
    });
});


app.get("/get_infrastructure_rating_iim_kolkata", (req, res) => {
    const sql2 = "SELECT avg(infrastructure_rating) AS avg_rating FROM iim_kolkata_overall_rating ";
    db.query(sql2, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            const rating = result[0]?.avg_rating || 0;
            res.json({ rating });
        }
    });
});


app.get("/get_curriculum_rating_iim_kolkata", (req, res) => {
    const sql2 = "SELECT avg(curriculum_rating) AS avg_rating FROM iim_kolkata_overall_rating ";
    db.query(sql2, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            const rating = result[0]?.avg_rating || 0;
            res.json({ rating });
        }
    });
});




//Get IIM Kozhikode Rating
app.get("/get_placement_rating_iim_kozhikode", (req, res) => {
    const sql2 = "SELECT AVG(placement_rating) AS avg_rating FROM iim_kozhikode_overall_rating";
    db.query(sql2, (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Database Error" });
        }
        // Check if we have any results and if the average is not null
        if (!result || result.length === 0 || result[0].avg_rating === null) {
            return res.status(404).json({ error: "No ratings available" });
        }
        const rating = parseFloat(result[0].avg_rating);
        res.json({ rating: rating.toFixed(2) });
    });
})


app.get("/get_faculty_rating_iim_kozhikode", (req, res) => {
    const sql2 = "SELECT avg(faculty_rating) AS avg_rating FROM iim_kozhikode_overall_rating ";
    db.query(sql2, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            const rating = result[0]?.avg_rating || 0;
            res.json({ rating });
        }
    });
});


app.get("/get_campus_life_rating_iim_kozhikode", (req, res) => {
    const sql2 = "SELECT avg(campus_life_rating) AS avg_rating FROM iim_kozhikode_overall_rating ";
    db.query(sql2, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            const rating = result[0]?.avg_rating || 0;
            res.json({ rating });
        }
    });
});

app.get("/get_infrastructure_rating_iim_kozhikode", (req, res) => {
    const sql2 = "SELECT avg(infrastructure_rating) AS avg_rating FROM iim_kozhikode_overall_rating ";
    db.query(sql2, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            const rating = result[0]?.avg_rating || 0;
            res.json({ rating });
        }
    });
});


app.get("/get_curriculum_rating_iim_kozhikode", (req, res) => {
    const sql2 = "SELECT avg(curriculum_rating) AS avg_rating FROM iim_kozhikode_overall_rating ";
    db.query(sql2, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });
        } else {
            const rating = result[0]?.avg_rating || 0;
            res.json({ rating });
        }
    });
});



// Get Rating of NMIMS
app.get("/get_placement_rating_nmims", (req, res) => {
    const sql2 = "SELECT AVG(placement_rating) AS avg_rating FROM nmims_overall_rating";
    db.query(sql2, (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Database Error" });
        }
        // Check if we have any results and if the average is not null
        if (!result || result.length === 0 || result[0].avg_rating === null) {
            return res.status(404).json({ error: "No ratings available" });
        }
        const rating = parseFloat(result[0].avg_rating);
        res.json({ rating: rating.toFixed(2) });
    });
})


app.get("/get_campus_life_rating_nmims", (req, res) => {
        const sql2 = "SELECT avg(campus_life_rating) AS avg_rating FROM nmims_overall_rating ";
    db.query(sql2, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" }); 
        } else {
            const rating = result[0]?.avg_rating || 0;
            res.json({ rating });
        }
    });
});


app.get("/get_faculty_rating_nmims", (req, res) => {
    const sql2 = "SELECT avg(faculty_rating) AS avg_rating FROM nmims_overall_rating ";
    db.query(sql2, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" }); 
        } else {
            const rating = result[0]?.avg_rating || 0;
            res.json({ rating });
        }
    });
}); 


app.get("/get_infrastructure_rating_nmims", (req, res) => {
    const sql2 = "SELECT avg(infrastructure_rating) AS avg_rating FROM nmims_overall_rating ";
    db.query(sql2, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });   
        } else {
            const rating = result[0]?.avg_rating || 0;
            res.json({ rating });
        }
    });
}); 


app.get("/get_curriculum_rating_nmims", (req, res) => {
    const sql2 = "SELECT avg(curriculum_rating) AS avg_rating FROM nmims_overall_rating ";
    db.query(sql2, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database Error" });   
        } else { 
            const rating = result[0]?.avg_rating || 0;
            res.json({ rating });
        }
    });
});



app.get("/get_overall_rating_scms", (req, res) => {
    const sql3 = `
        SELECT 
            (COALESCE(campus_life_rating, 0) +
             COALESCE(placement_rating, 0) +
             COALESCE(faculty_rating, 0) +
             COALESCE(infrastructure_rating, 0) +
             COALESCE(curriculum_rating, 0)) / 5 AS overall_avg_rating
        FROM 
            scms_overall_rating;
    `;

    db.query(sql3, (err, overall_result) => {
        if (err) {
            return res.status(500).json({ error: "Database Error" });
        }
        if (overall_result.length === 0 || overall_result[0].overall_avg_rating === null) {
            return res.status(404).json({ error: "No data found" });
        }

        const overall_avg_rating = parseFloat(overall_result[0].overall_avg_rating) || 0;
        res.json({ rating: overall_avg_rating.toFixed(1) });
        console.log(`⭐ Overall Average Rating: ${overall_avg_rating}`);
    });
});


app.get("/get_overall_rating_christ", (req, res) => {
    const sql3 = `
        SELECT 
            (COALESCE(campus_life_rating, 0) +
             COALESCE(placement_rating, 0) +
             COALESCE(faculty_rating, 0) +
             COALESCE(infrastructure_rating, 0) +
             COALESCE(curriculum_rating, 0)) / 5 AS overall_avg_rating
        FROM 
            christ_overall_rating;
    `;

    db.query(sql3, (err, overall_result) => {
        if (err) {
            return res.status(500).json({ error: "Database Error" });
        }
        if (overall_result.length === 0 || overall_result[0].overall_avg_rating === null) {
            return res.status(404).json({ error: "No data found" });
        }

        const overall_avg_rating = parseFloat(overall_result[0].overall_avg_rating) || 0;
        res.json({ rating: overall_avg_rating.toFixed(1) });
        console.log(`⭐ Overall Average Rating: ${overall_avg_rating}`);
    });
});


app.get("/get_overall_rating_sscbs", (req, res) => {
    const sql3 = `
        SELECT 
            (COALESCE(campus_life_rating, 0) +
             COALESCE(placement_rating, 0) +
             COALESCE(faculty_rating, 0) +
             COALESCE(infrastructure_rating, 0) +
             COALESCE(curriculum_rating, 0)) / 5 AS overall_avg_rating
        FROM 
            sscbs_overall_rating;
    `;

    db.query(sql3, (err, overall_result) => {
        if (err) {
            return res.status(500).json({ error: "Database Error" });
        }
        if (overall_result.length === 0 || overall_result[0].overall_avg_rating === null) {
            return res.status(404).json({ error: "No data found" });
        }

        const overall_avg_rating = parseFloat(overall_result[0].overall_avg_rating) || 0;
        res.json({ rating: overall_avg_rating.toFixed(1) });
        console.log(`⭐ Overall Average Rating: ${overall_avg_rating}`);
    });
});



app.get("/get_overall_rating", (req, res) => {
    const sql3 = `
        SELECT 
            (COALESCE(campus_life_rating, 0) +
             COALESCE(placement_rating, 0) +
             COALESCE(faculty_rating, 0) +
             COALESCE(infrastructure_rating, 0) +
             COALESCE(curriculum_rating, 0)) / 5 AS overall_avg_rating
        FROM 
            iim_ahemdabad_overall_rating;
    `;

    db.query(sql3, (err, overall_result) => {
        if (err) {
            return res.status(500).json({ error: "Database Error" });
        }
        if (overall_result.length === 0 || overall_result[0].overall_avg_rating === null) {
            return res.status(404).json({ error: "No data found" });
        }

        const overall_avg_rating = parseFloat(overall_result[0].overall_avg_rating) || 0;
        res.json({ rating: overall_avg_rating.toFixed(1) });
        console.log(`⭐ Overall Average Rating: ${overall_avg_rating}`);
    });
});


app.get("/get_overall_rating_iim_lucknow", (req, res) => {
    const sql3 = `
        SELECT 
            CAST(
                (COALESCE(campus_life_rating, 0) +
                 COALESCE(placement_rating, 0) +
                 COALESCE(faculty_rating, 0) +
                 COALESCE(infrastructure_rating, 0) +
                 COALESCE(curriculum_rating, 0)) / 5 
            AS DECIMAL(10,2)) AS overall_avg_rating
        FROM 
            iim_lucknow_overall_rating;
    `;

    db.query(sql3, (err, overall_result) => {
        if (err) {
            return res.status(500).json({ error: "Database Error" });
        }
        if (overall_result.length === 0 || overall_result[0].overall_avg_rating === null) {
            return res.status(404).json({ error: "No data found" });
        }

        // ✅ Ensure it's a valid number before calling toFixed()
        const overall_avg_rating = parseFloat(overall_result[0].overall_avg_rating) || 0;
        res.json({ rating: overall_avg_rating.toFixed(2) });
        console.log(`⭐ Overall Average Rating: ${overall_avg_rating}`);
    });
});


app.get("/get_overall_rating_iim_calcutta", (req, res) => {
    const sql3 = `
        SELECT 
            CAST(
                (COALESCE(campus_life_rating, 0) +
                 COALESCE(placement_rating, 0) +
                 COALESCE(faculty_rating, 0) +
                 COALESCE(infrastructure_rating, 0) +
                 COALESCE(curriculum_rating, 0)) / 5 
            AS DECIMAL(10,2)) AS overall_avg_rating
        FROM 
            iim_kolkata_overall_rating;
    `;

    db.query(sql3, (err, overall_result) => {
        if (err) {
            return res.status(500).json({ error: "Database Error" });
        }
        if (overall_result.length === 0 || overall_result[0].overall_avg_rating === null) {
            return res.status(404).json({ error: "No data found" });
        }

        // ✅ Ensure it's a valid number before calling toFixed()
        const overall_avg_rating = parseFloat(overall_result[0].overall_avg_rating) || 0;
        res.json({ rating: overall_avg_rating.toFixed(2) });
        console.log(`⭐ Overall Average Rating: ${overall_avg_rating}`);
    });
});



app.get("/get_overall_rating_iim_bangalore", (req, res) => {
    const sql3 = `
        SELECT 
            CAST(
                (COALESCE(campus_life_rating, 0) +
                 COALESCE(placement_rating, 0) +
                 COALESCE(faculty_rating, 0) +
                 COALESCE(infrastructure_rating, 0) +
                 COALESCE(curriculum_rating, 0)) / 5 
            AS DECIMAL(10,2)) AS overall_avg_rating
        FROM 
             iim_bangalore_overall_rating ;
    `;

    db.query(sql3, (err, overall_result) => {
        if (err) {
            return res.status(500).json({ error: "Database Error" });
        }
        // If no rows returned or empty table
        if (!overall_result || overall_result.length === 0) {
            return res.status(404).json({ error: "No data found" });
        }
        // If we have a row but all ratings are null/0
        if (overall_result[0].overall_avg_rating === null || overall_result[0].overall_avg_rating === 0) {
            return res.status(404).json({ error: "No ratings available" });
        }

        const overall_avg_rating = parseFloat(overall_result[0].overall_avg_rating);
        res.json({ rating: overall_avg_rating.toFixed(2) });
        console.log(`⭐ Overall Average Rating: ${overall_avg_rating}`);
    });
});


app.get("/get_overall_rating_nmims", (req, res) => {
    const sql3 = `
        SELECT 
            CAST(
                (COALESCE(campus_life_rating, 0) +
                 COALESCE(placement_rating, 0) +
                 COALESCE(faculty_rating, 0) +
                 COALESCE(infrastructure_rating, 0) +
                 COALESCE(curriculum_rating, 0)) / 5 
            AS DECIMAL(10,2)) AS overall_avg_rating
        FROM 
             nmims_overall_rating ;
    `;

    db.query(sql3, (err, overall_result) => {
        if (err) {
            return res.status(500).json({ error: "Database Error" });
        }
        // If no rows returned or empty table
        if (!overall_result || overall_result.length === 0) {
            return res.status(404).json({ error: "No data found" });
        }
        // If we have a row but all ratings are null/0
        if (overall_result[0].overall_avg_rating === null || overall_result[0].overall_avg_rating === 0) {
            return res.status(404).json({ error: "No ratings available" });
        }

        const overall_avg_rating = parseFloat(overall_result[0].overall_avg_rating);
        res.json({ rating: overall_avg_rating.toFixed(2) });
        console.log(`⭐ Overall Average Rating: ${overall_avg_rating}`);
    });
});



app.get("/get_overall_rating_XLRI", (req, res) => {
    const sql3 = `
        SELECT 
            CAST(
                (COALESCE(campus_life_rating, 0) +
                 COALESCE(placement_rating, 0) +
                 COALESCE(faculty_rating, 0) +
                 COALESCE(infrastructure_rating, 0) +
                 COALESCE(curriculum_rating, 0)) / 5 
            AS DECIMAL(10,2)) AS overall_avg_rating
        FROM 
             XLRI_overall_rating ;
    `;

    db.query(sql3, (err, overall_result) => {
        if (err) {
            return res.status(500).json({ error: "Database Error" });
        }
        // If no rows returned or empty table
        if (!overall_result || overall_result.length === 0) {
            return res.status(404).json({ error: "No data found" });
        }
        // If we have a row but all ratings are null/0
        if (overall_result[0].overall_avg_rating === null || overall_result[0].overall_avg_rating === 0) {
            return res.status(404).json({ error: "No ratings available" });
        }

        const overall_avg_rating = parseFloat(overall_result[0].overall_avg_rating);
        res.json({ rating: overall_avg_rating.toFixed(2) });
        console.log(`⭐ Overall Average Rating: ${overall_avg_rating}`);
    });
});



app.get("/get_overall_rating_mount_caramel", (req, res) => {
    const sql3 = `
        SELECT 
            CAST(
                (COALESCE(campus_life_rating, 0) +
                 COALESCE(placement_rating, 0) +
                 COALESCE(faculty_rating, 0) +
                 COALESCE(infrastructure_rating, 0) +
                 COALESCE(curriculum_rating, 0)) / 5 
            AS DECIMAL(10,2)) AS overall_avg_rating
        FROM 
             mount_caramel_overall_rating ;
    `;

    db.query(sql3, (err, overall_result) => {
        if (err) {
            return res.status(500).json({ error: "Database Error" });
        }
        // If no rows returned or empty table
        if (!overall_result || overall_result.length === 0) {
            return res.status(404).json({ error: "No data found" });
        }
        // If we have a row but all ratings are null/0
        if (overall_result[0].overall_avg_rating === null || overall_result[0].overall_avg_rating === 0) {
            return res.status(404).json({ error: "No ratings available" });
        }

        const overall_avg_rating = parseFloat(overall_result[0].overall_avg_rating);
        res.json({ rating: overall_avg_rating.toFixed(2) });
        console.log(`⭐ Overall Average Rating: ${overall_avg_rating}`);
    });
});



app.get("/get_overall_rating_iim_kozhikode", (req, res) => {
    const sql3 = `
        SELECT 
            CAST(
                (COALESCE(campus_life_rating, 0) +
                 COALESCE(placement_rating, 0) +
                 COALESCE(faculty_rating, 0) +
                 COALESCE(infrastructure_rating, 0) +
                 COALESCE(curriculum_rating, 0)) / 5 
            AS DECIMAL(10,2)) AS overall_avg_rating
        FROM 
             iim_kozhikode_overall_rating ;
    `;

    db.query(sql3, (err, overall_result) => {
        if (err) {
            return res.status(500).json({ error: "Database Error" });
        }
        // If no rows returned or empty table
        if (!overall_result || overall_result.length === 0) {
            return res.status(404).json({ error: "No data found" });
        }
        // If we have a row but all ratings are null/0
        if (overall_result[0].overall_avg_rating === null || overall_result[0].overall_avg_rating === 0) {
            return res.status(404).json({ error: "No ratings available" });
        }

        const overall_avg_rating = parseFloat(overall_result[0].overall_avg_rating);
        res.json({ rating: overall_avg_rating.toFixed(2) });
        console.log(`⭐ Overall Average Rating: ${overall_avg_rating}`);
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




// app.get("/review_db", (req, res) => {
//     res.redirect("/iim_ahemdabad_reviews"); // Redirect to review page after submission
// });


// app.get("/iim_ahemdabad_reviews", (req, res) => {
//     res.redirect("/iim_ahemdabad_render_all_reviews"); // Redirect to review page after submission
// });


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

    const { UserName, pass} = req.body;

    // First check if user exists
    const checkUserQuery = "SELECT Name FROM register WHERE Name = ?";
    createConnection.query(checkUserQuery, [UserName], (err, results) => {
        if (err) {
            console.error("Error checking user: ", err.stack);
            return res.status(500).send('Database error');
        }
        
        if (results.length === 0) {
            // User doesn't exist
            return res.status(401).send(`
                <script>
                    alert("User does not exist. Please check your username or register if you haven't already.");
                    window.location.href = '/login';
                </script>
            `);
        }

        // If user exists, check password
        const checkPasswordQuery = "SELECT Name, Password FROM register WHERE Name = ? AND Password = ?";
        createConnection.query(checkPasswordQuery, [UserName, pass], (err, results) => {
            if (err) {
                console.error("Error checking password: ", err.stack);
                return res.status(500).send('Database error');
            }
            
            if (results.length > 0) {
                // Login successful
                res.send(`
                    <script>
                        sessionStorage.setItem('isLoggedIn', 'true');
                        sessionStorage.setItem('userName', '${UserName}');
                        window.location.href = '/render_index';
                    </script>
                `);
            } else {
                // Wrong password
                res.status(401).send(`
                    <script>
                        alert("Incorrect password. Please try again.");
                        window.location.href = '/login';
                    </script>
                `);
            }
        });
    });
});



// // API Endpoint to Save Rating
// app.post("/placement_rating", (req, res) => {
//     const { rating } = req.body;

//     if (!rating || rating < 0 || rating > 5) {
//         return res.status(400).json({ success: false, message: "Invalid rating" });
//     }

//     const sql = "UPDATE overall_rating SET placement_rating = ? WHERE college_name = 'IIM Ahemdabad'";
//     db.query(sql, [rating], (err, result) => {
//         if (err) {
//             console.error("Error inserting rating:", err);
//             return res.status(500).json({ success: false, message: "Database error" });
//         }
//         // res.json({ success: true, message: "Rating saved successfully!" });
//     });
// });


// API Endpoint to Save Rating
app.post("/placement_rating_iim_lucknow", (req, res) => {
    const { rating } = req.body;

    if (!rating || rating < 0 || rating > 5) {
        return res.status(400).json({ success: false, message: "Invalid rating" });
    }

    const sql = "UPDATE iim_lucknow_overall_rating SET placement_rating = ?;"
    db.query(sql, [rating], (err, result) => {
        if (err) {
            console.error("Error inserting rating:", err);
            return res.status(500).json({ success: false, message: "Database error" });
        }
        // res.json({ success: true, message: "Rating saved successfully!" });
    });
});

app.post("/campus_life_rating_iim_lucknow" , (req , res) => {
    const { rating } = req.body;

    if (!rating || rating < 0 || rating > 5) {
        return res.status(400).json({ success: false, message: "Invalid rating" });
    }

    const sql = "UPDATE iim_lucknow_overall_rating SET campus_life_rating = ?";
    db.query(sql, [rating], (err, result) => {
        if (err) {
            console.error("Error inserting rating:", err);
            return res.status(500).json({ success: false, message: "Database error" });
        }
        // res.json({ success: true, message: "Rating saved successfully!" });
    });
})

app.post("/college_curriculum_rating_iim_lucknow" , (req , res) => {
    const { rating } = req.body;

    if (!rating || rating < 0 || rating > 5) {
        return res.status(400).json({ success: false, message: "Invalid rating" });
    }

    const sql = "UPDATE iim_lucknow_overall_rating SET curriculum_rating = ?";

    db.query(sql, [rating], (err, result) => {
        if (err) {
            console.error("Error inserting rating:", err);
            return res.status(500).json({ success: false, message: "Database error" });
        }
        // res.json({ success: true, message: "Rating saved successfully!" });
    });
})

// API Endpoint to Save Rating
app.post("/faculty_rating_iim_lucknow", (req, res) => {
    const { rating } = req.body;

    if (!rating || rating < 0 || rating > 5) {
        return res.status(400).json({ success: false, message: "Invalid rating" });
    }

    const sql = "UPDATE iim_lucknow_overall_rating SET faculty_rating = ?";
    db.query(sql, [rating], (err, result) => {
        if (err) {
            console.error("Error inserting rating:", err);
            return res.status(500).json({ success: false, message: "Database error" });
        }
        // res.json({ success: true, message: "Rating saved successfully!" });
    });
});


app.post("/infrastructure_rating_iim_lucknow" , (req , res) => {
    const { rating } = req.body;

    if (!rating || rating < 0 || rating > 5) {
        return res.status(400).json({ success: false, message: "Invalid rating" });
    }

    const sql = "UPDATE iim_lucknow_overall_rating SET infrastructure_rating = ?";


    db.query(sql, [rating], (err, result) => {
        if (err) {
            console.error("Error inserting rating:", err);
            return res.status(500).json({ success: false, message: "Database error" });
        }
        // res.json({ success: true, message: "Rating saved successfully!" });
    });
})

// API Endpoint to Save Rating
app.post("/placement_rating_iim_ahemdabad", (req, res) => {
    const { rating } = req.body;

    if (!rating || rating < 0 || rating > 5) {
        return res.status(400).json({ success: false, message: "Invalid rating" });
    }

    const sql = "UPDATE iim_ahemdabad_overall_rating SET placement_rating = ? where Review_id = 1;"
    db.query(sql, [rating], (err, result) => {
        if (err) {
            console.error("Error inserting rating:", err);
            return res.status(500).json({ success: false, message: "Database error" });
        }
        // res.json({ success: true, message: "Rating saved successfully!" });
    });
});


app.post("/campus_life_rating_iim_ahemdabad" , (req , res) => {
    const { rating } = req.body;

    if (!rating || rating < 0 || rating > 5) {
        return res.status(400).json({ success: false, message: "Invalid rating" });
    }

    const sql = "UPDATE iim_ahemdabad_overall_rating SET campus_life_rating = ? where Review_id = 1";
    db.query(sql, [rating], (err, result) => {
        if (err) {
            console.error("Error inserting rating:", err);
            return res.status(500).json({ success: false, message: "Database error" });
        }
        // res.json({ success: true, message: "Rating saved successfully!" });
    });
})

app.post("/college_curriculum_rating_iim_ahemdabad" , (req , res) => {
    const { rating } = req.body;

    if (!rating || rating < 0 || rating > 5) {
        return res.status(400).json({ success: false, message: "Invalid rating" });
    }

    const sql = "UPDATE iim_ahemdabad_overall_rating SET curriculum_rating = ? where Review_id = 1";

    db.query(sql, [rating], (err, result) => {
        if (err) {
            console.error("Error inserting rating:", err.message, err.stack);
            return res.status(500).json({ success: false, message: "Database error", error: err.message });
        }
        res.json({ success: true, message: "Rating saved successfully!" });
    });
    
})

// API Endpoint to Save Rating
app.post("/faculty_rating_iim_ahemadabad", (req, res) => {
    const { rating } = req.body;

    if (!rating || rating < 0 || rating > 5) {
        return res.status(400).json({ success: false, message: "Invalid rating" });
    }

    const sql = "UPDATE iim_ahemdabad_overall_rating SET faculty_rating = ? where Review_id = 1";
    db.query(sql, [rating], (err, result) => {
        if (err) {
            console.error("Error inserting rating:", err);
            return res.status(500).json({ success: false, message: "Database error" });
        }
        // res.json({ success: true, message: "Rating saved successfully!" });
    });
});


app.post("/infrastructure_rating_iim_ahemadabad" , (req , res) => {
    const { rating } = req.body;

    if (!rating || rating < 0 || rating > 5) {
        return res.status(400).json({ success: false, message: "Invalid rating" });
    }

    const sql = "UPDATE iim_ahemdabad_overall_rating SET infrastructure_rating = ? where Review_id = 1";


    db.query(sql, [rating], (err, result) => {
        if (err) {
            console.error("Error inserting rating:", err);
            return res.status(500).json({ success: false, message: "Database error" });
        }
        // res.json({ success: true, message: "Rating saved successfully!" });
    });
})


// app.post('/insert-data', (req, res) => {
//     const { email } = req.body;

//     if (!email) {
//         return res.status(400).json({ error: 'Email is required' });
//     }

//     const query = 'INSERT INTO iim_ahemdabad_overall_rating (Email) VALUES (?)';
//     db.query(query, [email], (err, result) => {
//         if (err) {
//             console.error('❌ Error inserting data:', err);
//             return res.status(500).json({ error: 'Database error' });
//         }

//         console.log('✅ Data inserted:', result);
//         res.status(201).json({ message: 'Data inserted successfully' });
//     });
// });


app.post('/insert-data-lucknow', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and Email are required' });
    }

    // ✅ Insert or Update Record if it already exists
    const query = `
        INSERT INTO iim_lucknow_overall_rating (Name, Email) 
        VALUES (?, ?) 
    `;

    db.query(query, [name, email], (err, result) => {
        if (err) {
            console.error('❌ Error inserting data:', err);
            return res.status(500).json({ error: 'Database error' });
        }

        console.log('✅ Data inserted:', result);
        res.status(201).json({ message: 'Data inserted successfully' });
    });
});

app.post('/insert-data-Ahemdabad', (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }

    // ✅ Insert or Update Record if it already exists
    const query = `
        INSERT INTO iim_Ahemdabad_overall_rating (Name) 
        VALUES (?) 
    `;

    db.query(query, [name], (err, result) => {
        if (err) {
            console.error('❌ Error inserting data:', err);
            return res.status(500).json({ error: 'Database error' });
        }

        console.log('✅ Data inserted:', result);
        res.status(201).json({ message: 'Data inserted successfully' });
    });
});





app.get("/iim_lucknow_info" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_mba" , "IIM_Lucknow" , "iim_lucknow.html"))
})

app.get("/iim_lucknow_course_fee" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_mba" , "IIM_Lucknow" , "iim_lucknow_Course_fee.html"));
})

app.get("/iim_lucknow_cutoff" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_mba" , "IIM_Lucknow" , "iim_lucknow_cutOffs.html"));
})

app.get("/iim_lucknow_hostel_campus" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_mba" , "IIM_Lucknow" , "iim_lucknow_hostel_campus.html"));
})

app.get("/iim_lucknow_write_review" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_mba" , "IIM_Lucknow" , "iim_lucknow_write_review.html"));
});




app.get("/XLRI_info" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_mba" , "XLRI" , "XLRI.html"));
})

app.get("/XLRI_Course_fee" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_mba" , "XLRI" , "XLRI_Course_fee.html"));
})

app.get("/XLRI_cutoff" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_mba" , "XLRI" , "XLRI_cutoffs.html"));
})

app.get("/XLRI_hostel_campus" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_mba" , "XLRI" , "XLRI_hostel_campus.html"));
})

app.get("/XLRI_write_review" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_mba" , "XLRI" , "XLRI_write_review.html"));
})



app.get("/iim_calcutta_info" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_mba" , "IIM_Kolkata" , "iim_calcutta.html"));  
})

app.get("/iim_calcutta_course_fee" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_mba" , "IIM_Kolkata" , "iim_calcutta_Course_fee.html"));
})

app.get("/iim_calcutta_cutoff" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_mba" , "IIM_Kolkata" , "iim_calcutta_cutOffs.html"));
})

app.get("/iim_calcutta_hostel_campus" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_mba" , "IIM_Kolkata" , "iim_calcutta_hostel_campus.html"));
})

app.get("/iim_calcutta_write_review" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_mba" , "IIM_Kolkata" , "iim_calcutta_write_review.html"));
})











app.get("/iim_bangalore_info" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_mba" , "iim_Bangalore" , "iim_bangalore.html"));
})

app.get("/iim_bangalore_course_fee" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_mba" , "iim_Bangalore" , "iim_bangalore_Course_fee.html"));
})

app.get("/iim_bangalore_cutoff" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_mba" , "iim_Bangalore" , "iim_bangalore_cutOffs.html"));
})

app.get("/iim_bangalore_hostel_campus" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_mba" , "iim_Bangalore" , "iim_bangalore_hostel_campus.html"));
})

app.get("/iim_bangalore_write_review" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_mba" , "iim_Bangalore" , "iim_bangalore_write_review.html"));
})




app.get("/iim_kozhikode_info" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_mba" , "IIM_Kozhikode" , "iim_kozhikode.html"));
})

app.get("/iim_kozhikode_course_fee" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_mba" , "IIM_Kozhikode" , "iim_kozhikode_Course_fee.html"));
})

app.get("/iim_kozhikode_cutoff" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_mba" , "IIM_Kozhikode" , "iim_kozhikode_cutOffs.html"));
})

app.get("/iim_kozhikode_hostel_campus" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_mba" , "IIM_Kozhikode" , "iim_kozhikode_hostel_campus.html"));
})

app.get("/iim_kozhikode_write_review" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_mba" , "IIM_Kozhikode" , "iim_kozhikode_write_review.html"));
})





app.get("/sscbs_info" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_bba" , "SSCBS" , "sscbs.html"));
})

app.get("/sscbs_course_fee" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_bba" , "SSCBS" , "sscbs_course_fee.html"));
})

app.get("/sscbs_cutOffs" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_bba" , "SSCBS" , "sscbs_cutOffs.html"));
})

app.get("/sscbs_hostel_campus" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_bba" , "SSCBS" , "sscbs_hostel_campus.html"));
})

app.get("/sscbs_write_review" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_bba" , "SSCBS" , "sscbs_write_review.html"));
})




app.get("/christ_info" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_bba" , "Christ" , "christ.html"));
})

app.get("/christ_course_fee" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_bba" , "Christ" , "christ_course_fee.html"));
})

app.get("/christ_cutOffs" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_bba" , "Christ" , "christ_cutOffs.html"));
})

app.get("/christ_hostel_campus" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_bba" , "Christ" , "christ_hostel_campus.html"));
})

app.get("/christ_write_review" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_bba" , "Christ" , "christ_write_review.html"));
})



app.get("/nmims_info" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_bba" , "Nmims" , "nmims.html"));
})

app.get("/nmims_course_fee" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_bba" , "Nmims" , "nmims_course_fee.html"));
})

app.get("/nmims_cutOffs" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_bba" , "Nmims" , "nmims_cutOffs.html"));
})

app.get("/nmims_hostel_campus" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_bba" , "Nmims" , "nmims_hostel_campus.html"));
})

app.get("/nmims_write_review" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_bba" , "Nmims" , "nmims_write_review.html"));
})




app.get("/scms_info" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_bba" , "SCMS" , "scms.html"));
})

app.get("/scms_course_fee" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_bba" , "SCMS" , "scms_course_fee.html"));
})

app.get("/scms_cutOffs" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_bba" , "SCMS" , "scms_cutOffs.html"));
})


app.get("/scms_hostel_campus" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_bba" , "SCMS" , "scms_hostel_campus.html"));
})

app.get("/scms_write_review" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_bba" , "SCMS" , "scms_write_review.html"));
})





app.get("/mount_caramel_info" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_bba" , "Mount_Caramel" , "mount_caramel.html"));
})

app.get("/mount_caramel_course_fee" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_bba" , "Mount_Caramel" , "mount_caramel_course_fee.html"));
})

app.get("/mount_caramel_cutOffs" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_bba" , "Mount_Caramel" , "mount_caramel_cutOffs.html"));
})

app.get("/mount_caramel_hostel_campus" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_bba" , "Mount_Caramel" , "mount_caramel_hostel_campus.html"));
})

app.get("/mount_caramel_write_review" , (req , res) => {
    res.sendFile(path.join(__dirname , "colleges_bba" , "Mount_Caramel" , "mount_caramel_write_review.html"));
})



























const server = app.listen(8080, () => {
    const { address, port } = server.address();
    const host = address === '::' ? 'localhost' : address;
    console.log(`Server is running at http://${host}:${port}`);
});

app.get("/login", (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, 'login', 'Login.html'));
});