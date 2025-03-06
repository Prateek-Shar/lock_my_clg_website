document.addEventListener("DOMContentLoaded", function () {
    const clg_name = document.querySelector("#clg_name"); // Input field or Select
    const main_det2 = document.querySelector(".main-det"); // Main container   
    const main_det = document.querySelector(".container-review-det"); // Main container
    const cp4 = document.querySelector(".container-part4"); // Div to show
    const cp5 = document.querySelector(".container-part5"); // Div to show
    const cp6 = document.querySelector(".container-part6"); // Div to show
    const cp7 = document.querySelector(".container-part7");
    const cp8 = document.querySelector(".container-part8");


    if (clg_name && cp4) {
        // ✅ Initialize Select2
        $(clg_name).select2({
            placeholder: "Select College Name", // Placeholder text
            width: "100%" 
        });

        // ✅ Function to check content length
        function checkContent() {
            const contentLength = clg_name.value.trim().length;
            console.log("Content Length:", contentLength); // Debugging: check the length in console

            if (contentLength > 0) {
                cp4.style.display = "flex";
                cp5.style.display = "flex";
                cp6.style.display = "flex";
                cp7.style.display = "flex"
                cp8.style.display = "flex";
                main_det2.style.height = "1200px"
                main_det.style.height = "90%";
                main_det2.style.justifyContent = "center";
                main_det2.style.alignItems = "center";
                main_det.style.justifyContent = "space-evenly";
                cp5.style.marginTop = "15px";
            } 
            
            else {
                cp4.style.display = "none";
                cp6.style.display = "none";
                // main_det.style.height = "300px";
                cp5.style.marginTop = "50px";
                cp7.style.display = "none"
                cp8.style.display = "none";
                main_det.style.justifyContent = "center";
            }
        }

        // ✅ Listen for both input and Select2 changes
        clg_name.addEventListener("input", checkContent);
        $(clg_name).on("select2:select select2:clear", checkContent);

    } else {
        console.log("One or more elements (#clg_name or .container-part4) are missing.");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const nav_hr2 = document.querySelector("#nav-hr2"); 

    if (nav_hr2 && window.location.href.includes("iim_ahemdabad_course_fee")) {
        nav_hr2.style.animation = "nav_loader 2s linear forwards";
    }
});



const gender = document.querySelector("#gender");

$(document).ready(function() {
    // Initialize Select2
    $(gender).select2({
        placeholder: "Select Gender", // Optional: Placeholder text        
        width: "100%" // Controls the width of the dropdown
    });
});


const completion_year = document.querySelector("#completion_year"); // Input field or Select

$(document).ready(function() {
    // Initialize Select2
    $(completion_year).select2({
        placeholder: "Select Year of Completion", // Optional: Placeholder text        
        width: "100%" // Controls the width of the dropdown
    });
});


const branch_name = document.querySelector("#branch_name"); // Input field or Select

$(document).ready(function() {
    // Initialize Select2
    $(branch_name).select2({
        placeholder: "Name of Branch", // Optional: Placeholder text        
        width: "100%" // Controls the width of the dropdown
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".subdet-fig1 img");
    const submitButton = document.getElementById("submit");
    let selectedRating = 0;

    // Handle mouse hover (temporary UI update)
    stars.forEach((star, index) => {
        star.addEventListener("mousemove", (event) => {
            const rect = star.getBoundingClientRect();
            const isHalf = event.clientX < rect.left + rect.width / 2;
            const hoverRating = index + (isHalf ? 0.5 : 1);
            highlightStars(hoverRating);
        });

        star.addEventListener("mouseleave", () => {
            highlightStars(selectedRating); // Restore last selected rating
        });
    });

    // Handle star click (select rating, allowing changes)
    stars.forEach((star, index) => {
        star.addEventListener("click", (event) => {
            const rect = star.getBoundingClientRect();
            const isHalf = event.clientX < rect.left + rect.width / 2;
            selectedRating = index + (isHalf ? 0.5 : 1); // Store new rating
            console.log("Selected Rating:", selectedRating);
            highlightStars(selectedRating);
            sendRatingToDatabase(selectedRating);   
        });
    });

    // Function to highlight stars based on selection
    function highlightStars(rating) {
        stars.forEach((s, i) => {
            if (i < Math.floor(rating)) {
                s.src = "filled_star.png"; // Full star
            } else if (i < rating) {
                s.src = "half_star.png"; // Half star
            } else {
                s.src = "star.png"; // Empty star
            }
        });
    }

    function sendRatingToDatabase(rating) {
        fetch("/placement_rating", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ rating: rating })
        })
        .then(response => response.json())
        .then(data => {
            console.log("Server Response:", data);
            alert("Rating submitted successfully!");
        })
        .catch(error => {
            console.error("Error submitting rating:", error);
        });
    }
});





document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".subdet-fig2 img");
    const submitButton = document.getElementById("submit");
    let selectedRating = 0;

    // Handle mouse hover (temporary UI update)
    stars.forEach((star, index) => {
        star.addEventListener("mousemove", (event) => {
            const rect = star.getBoundingClientRect();
            const isHalf = event.clientX < rect.left + rect.width / 2;
            const hoverRating = index + (isHalf ? 0.5 : 1);
            highlightStars(hoverRating);
        });

        star.addEventListener("mouseleave", () => {
            highlightStars(selectedRating); // Restore last selected rating
        });
    });

    // Handle star click (select rating, allowing changes)
    stars.forEach((star, index) => {
        star.addEventListener("click", (event) => {
            const rect = star.getBoundingClientRect();
            const isHalf = event.clientX < rect.left + rect.width / 2;
            selectedRating = index + (isHalf ? 0.5 : 1); // Store new rating
            console.log("Selected Rating:", selectedRating);
            highlightStars(selectedRating);
            sendRatingToDatabase(selectedRating);   
        });
    });

    // Function to highlight stars based on selection
    function highlightStars(rating) {
        stars.forEach((s, i) => {
            if (i < Math.floor(rating)) {
                s.src = "filled_star.png"; // Full star
            } else if (i < rating) {
                s.src = "half_star.png"; // Half star
            } else {
                s.src = "star.png"; // Empty star
            }
        });
    }

    function sendRatingToDatabase(rating) {
        fetch("/campus_life_rating", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ rating: rating })
        })
        .then(response => response.json())
        .then(data => {
            console.log("Server Response:", data);
            alert("Rating submitted successfully!");
        })
        .catch(error => {
            console.error("Error submitting rating:", error);
        });
    }

});


document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".subdet-fig3 img"); // Corrected selector
    let selectedRating = 0;

    function highlightStars(rating) {
        stars.forEach((s, i) => {
            if (i < Math.floor(rating)) {
                s.src = "filled_star.png"; // Full star
            } else if (i < rating) {
                s.src = "half_star.png"; // Half star
            } else {
                s.src = "star.png"; // Empty star
            }
        });
    }

    // Handle mouse hover (temporary UI update)
    stars.forEach((star, index) => {
        star.addEventListener("mousemove", (event) => {
            const rect = star.getBoundingClientRect();
            const isHalf = event.clientX < rect.left + rect.width / 2;
            const hoverRating = index + (isHalf ? 0.5 : 1);
            highlightStars(hoverRating);
        });

        star.addEventListener("mouseleave", () => {
            highlightStars(selectedRating); // Restore last selected rating
        });

        // Handle click (select rating)
        star.addEventListener("click", (event) => {
            const rect = star.getBoundingClientRect();
            const isHalf = event.clientX < rect.left + rect.width / 2;
            selectedRating = index + (isHalf ? 0.5 : 1);
            console.log("Selected Rating:", selectedRating);
            highlightStars(selectedRating);
            sendRatingToDatabase(selectedRating);
        });
    });

    function sendRatingToDatabase(rating) {
        fetch("/college_curriculum_rating  ", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ rating: rating })
        })
        .then(response => response.json())
        .then(data => {
            console.log("Server Response:", data);
            alert("Rating submitted successfully!");
        })
        .catch(error => {
            console.error("Error submitting rating:", error);
        });
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".subdet-fig4 img");
    let selectedRating = 0;

    function highlightStars(rating) {
        stars.forEach((s, i) => {
            if (i < Math.floor(rating)) {
                s.src = "filled_star.png"; // Full star
            } else if (i < rating) {
                s.src = "half_star.png"; // Half star
            } else {
                s.src = "star.png"; // Empty star
            }
        });
    }

    function sendRatingToDatabase(rating) {
        fetch("/infrastructure_rating", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ rating: rating })
        })
        .then(response => response.json())
        .then(data => {
            console.log("Server Response:", data);
            alert("Rating submitted successfully!");
        })
        .catch(error => {
            console.error("Error submitting rating:", error);
        });
    }

    // Handle hover and click events
    stars.forEach((star, index) => {
        star.addEventListener("mousemove", (event) => {
            const rect = star.getBoundingClientRect();
            const isHalf = event.clientX < rect.left + rect.width / 2;
            const hoverRating = index + (isHalf ? 0.5 : 1);
            highlightStars(hoverRating);
        });

        star.addEventListener("mouseleave", () => {
            highlightStars(selectedRating);
        });

        star.addEventListener("click", (event) => {
            const rect = star.getBoundingClientRect();
            const isHalf = event.clientX < rect.left + rect.width / 2;
            selectedRating = index + (isHalf ? 0.5 : 1);
            console.log("Selected Rating:", selectedRating);
            highlightStars(selectedRating);
            sendRatingToDatabase(selectedRating);
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".subdet-fig5 img");
    const submitButton = document.getElementById("submit");
    let selectedRating = 0;

    // Handle mouse hover (temporary UI update)
    stars.forEach((star, index) => {
        star.addEventListener("mousemove", (event) => {
            const rect = star.getBoundingClientRect();
            const isHalf = event.clientX < rect.left + rect.width / 2;
            const hoverRating = index + (isHalf ? 0.5 : 1);
            highlightStars(hoverRating);
        });

        star.addEventListener("mouseleave", () => {
            highlightStars(selectedRating); // Restore last selected rating
        });
    });

    // Handle star click (select rating, allowing changes)
    stars.forEach((star, index) => {
        star.addEventListener("click", (event) => {
            const rect = star.getBoundingClientRect();
            const isHalf = event.clientX < rect.left + rect.width / 2;
            selectedRating = index + (isHalf ? 0.5 : 1); // Store new rating
            console.log("Selected Rating:", selectedRating);
            highlightStars(selectedRating);
            sendRatingToDatabase(selectedRating);   
        });
    });

    // Function to highlight stars based on selection
    function highlightStars(rating) {
        stars.forEach((s, i) => {
            if (i < Math.floor(rating)) {
                s.src = "filled_star.png"; // Full star
            } else if (i < rating) {
                s.src = "half_star.png"; // Half star
            } else {
                s.src = "star.png"; // Empty star
            }
        });
    }

    function sendRatingToDatabase(rating) {
        fetch("/get_faculty_rating", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ rating: rating })
        })
        .then(response => response.json())
        .then(data => {
            console.log("Server Response:", data);
            alert("Rating submitted successfully!");
        })
        .catch(error => {
            console.error("Error submitting rating:", error);
        });
    }
});


// function colorStars(rating) {
//     const stars = document.querySelectorAll(".star");
    
//     stars.forEach(star => {
//         let value = parseFloat(star.getAttribute("data-value"));
//         console.log(value)

//         if (value <= rating) {
//             star.src = "images/filled_star.png"; // Correct
//         } else if (value - 0.5 <= rating) {
//             star.src = "images/half_star.png"; // Half star
//         } else {
//             star.src = "images/star.png"; // Empty star
//         }
//     });
// }

document.addEventListener("DOMContentLoaded", function () {
    fetch("/get_overall_rating")
        .then(response => response.json())
        .then(data => {
            console.log("Received Rating:", data.rating); // Debugging
            if (data.rating !== null) {
                colorStars(data.rating); // Call function to color stars
                updateRatingText(data.rating); // Update the rating text
            }
        })
        .catch(error => console.error("Error fetching rating:", error));
});
