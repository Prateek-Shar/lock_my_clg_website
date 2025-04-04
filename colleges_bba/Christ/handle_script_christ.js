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
    const ratingInput = document.getElementById("placement_rating");
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

        // Handle star click (select rating, allowing changes)
        star.addEventListener("click", (event) => {
            const rect = star.getBoundingClientRect();
            const isHalf = event.clientX < rect.left + rect.width / 2;
            selectedRating = index + (isHalf ? 0.5 : 1);
            ratingInput.value = selectedRating;
            highlightStars(selectedRating);

            console.log(ratingInput);
        });
    });

    function highlightStars(rating) {
        stars.forEach((s, i) => {
            if (i < Math.floor(rating)) {
                s.src = "images/filled_star.png";
            } else if (i < rating) {
                s.src = "images/half_star.png";
            } else {
                s.src = "images/star.png";
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".subdet-fig2 img");
    const ratingInput = document.getElementById("campus_life_rating");
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
            highlightStars(selectedRating);
        });

        // Handle star click (select rating, allowing changes)
        star.addEventListener("click", (event) => {
            const rect = star.getBoundingClientRect();
            const isHalf = event.clientX < rect.left + rect.width / 2;
            selectedRating = index + (isHalf ? 0.5 : 1);
            ratingInput.value = selectedRating;
            highlightStars(selectedRating);

            console.log(ratingInput);
        });
    });

    function highlightStars(rating) {
        stars.forEach((s, i) => {
            if (i < Math.floor(rating)) {
                s.src = "images/filled_star.png";
            } else if (i < rating) {
                s.src = "images/half_star.png";
            } else {
                s.src = "images/star.png";
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".subdet-fig3 img");
    const ratingInput = document.getElementById("faculty_rating");
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
            highlightStars(selectedRating);
        });

        // Handle star click (select rating, allowing changes)
        star.addEventListener("click", (event) => {
            const rect = star.getBoundingClientRect();
            const isHalf = event.clientX < rect.left + rect.width / 2;
            selectedRating = index + (isHalf ? 0.5 : 1);
            ratingInput.value = selectedRating;
            highlightStars(selectedRating);

            console.log(ratingInput);
        });
    });

    function highlightStars(rating) {
        stars.forEach((s, i) => {
            if (i < Math.floor(rating)) {
                s.src = "images/filled_star.png";
            } else if (i < rating) {
                s.src = "images/half_star.png";
            } else {
                s.src = "images/star.png";
            }
        });
    }
});




document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".subdet-fig4 img");
    const ratingInput = document.getElementById("college_curriculum_rating");
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
            highlightStars(selectedRating);
        });

        // Handle star click (select rating, allowing changes)
        star.addEventListener("click", (event) => {
            const rect = star.getBoundingClientRect();
            const isHalf = event.clientX < rect.left + rect.width / 2;
            selectedRating = index + (isHalf ? 0.5 : 1);
            ratingInput.value = selectedRating;
            highlightStars(selectedRating);

            console.log(ratingInput);
        });
    });

    function highlightStars(rating) {
        stars.forEach((s, i) => {
            if (i < Math.floor(rating)) {
                s.src = "images/filled_star.png";
            } else if (i < rating) {
                s.src = "images/half_star.png";
            } else {
                s.src = "images/star.png";
            }
        });
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".subdet-fig5 img");
    const ratingInput = document.getElementById("infrastructure_rating");
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
            highlightStars(selectedRating);
        });

        // Handle star click (select rating, allowing changes)
        star.addEventListener("click", (event) => {
            const rect = star.getBoundingClientRect();
            const isHalf = event.clientX < rect.left + rect.width / 2;
            selectedRating = index + (isHalf ? 0.5 : 1);
            ratingInput.value = selectedRating;
            highlightStars(selectedRating);

            console.log(ratingInput);
        });
    });

    function highlightStars(rating) {
        stars.forEach((s, i) => {
            if (i < Math.floor(rating)) {
                s.src = "images/filled_star.png";
            } else if (i < rating) {
                s.src = "images/half_star.png";
            } else {
                s.src = "images/star.png";
            }
        });
    }
});





