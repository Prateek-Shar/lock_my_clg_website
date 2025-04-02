document.addEventListener("DOMContentLoaded", function () {
    let reviewContainer = document.querySelector("#ReviewNumber");
    let noReviewContainer = document.querySelector("#ReviewNo");

    if (!reviewContainer) {
        console.error("Error: Element with ID #ReviewNumber not found.");
        return;
    }
    if (!noReviewContainer) {
        console.error("Error: Element with ID #ReviewNo not found.");
        return;
    }

    let reviewCount = parseInt(reviewContainer.dataset.reviewCount, 10) || 0; // Ensure a valid number

    if (reviewCount === 0) {
        noReviewContainer.style.display = "flex";
        reviewContainer.style.display = "none";
    } else {
        reviewContainer.style.display = "flex";
        noReviewContainer.style.display = "none";
    }
});

// async function fetchRating() {
//     try {
//         const response = await fetch("/get_placement_rating");
//         const data = await response.json();
//         const rating = data.rating; 

//         const totalStars = 5;
//         const starContainer = document.getElementById("starContainer");
//         starContainer.innerHTML = ""; // Clear previous stars

//         for (let i = 1; i <= totalStars; i++) {
//             const star = document.createElement("span");
//             if (i <= Math.floor(rating)) {
//                 star.innerHTML = "★"; // Full star
//                 star.classList.add("gold");
//             } else if (i - 0.5 <= rating) {
//                 star.innerHTML = "★"; // Half star
//                 star.classList.add("half");
//             } else {
//                 star.innerHTML = "☆"; // Empty star
//             }
//             starContainer.appendChild(star);
//         }
//     } catch (error) {
//         console.error("Error fetching rating:", error);
//     }
// }

// fetchRating(); // Fetch rating on page load


// async function fetchRating2() {
//     try {
//         const response = await fetch("/get_campus_life_rating");
//         const data = await response.json();
//         const rating = data.rating; 

//         const totalStars = 5;
//         const starContainer = document.getElementById("starContainer2");
//         starContainer.innerHTML = ""; // Clear previous stars

//         for (let i = 1; i <= totalStars; i++) {
//             const star = document.createElement("span");
//             if (i <= Math.floor(rating)) {
//                 star.innerHTML = "★"; // Full star
//                 star.classList.add("gold");
//             } else if (i - 0.5 <= rating) {
//                 star.innerHTML = "★"; // Half star
//                 star.classList.add("half");
//             } else {
//                 star.innerHTML = "☆"; // Empty star
//             }
//             starContainer.appendChild(star);
//         }
//     } catch (error) {
//         console.error("Error fetching rating:", error);
//     }
// }

// fetchRating2(); // Fetch rating on page load



// async function fetchRating3() {
//     try {
//         const response = await fetch("/get_infrastructure_rating");
//         const data = await response.json();
//         const rating = data.rating; 

//         const totalStars = 5;
//         const starContainer = document.getElementById("starContainer4");
//         starContainer.innerHTML = ""; // Clear previous stars

//         for (let i = 1; i <= totalStars; i++) {
//             const star = document.createElement("span");
//             if (i <= Math.floor(rating)) {
//                 star.innerHTML = "★"; // Full star
//                 star.classList.add("gold");
//             } else if (i - 0.5 <= rating) {
//                 star.innerHTML = "★"; // Half star
//                 star.classList.add("half");
//             } else {
//                 star.innerHTML = "☆"; // Empty star
//             }
//             starContainer.appendChild(star);
//         }
//     } catch (error) {
//         console.error("Error fetching rating:", error);
//     }
// }

// fetchRating3(); // Fetch rating on page load


// async function fetchRating4() {
//     try {
//         const response = await fetch("/get_college_curriculum_rating");
//         const data = await response.json();
//         const rating = data.rating; 

//         const totalStars = 5;
//         const starContainer = document.getElementById("starContainer5");
//         starContainer.innerHTML = ""; // Clear previous stars

//         for (let i = 1; i <= totalStars; i++) {
//             const star = document.createElement("span");
//             if (i <= Math.floor(rating)) {
//                 star.innerHTML = "★"; // Full star
//                 star.classList.add("gold");
//             } else if (i - 0.5 <= rating) {
//                 star.innerHTML = "★"; // Half star
//                 star.classList.add("half");
//             } else {
//                 star.innerHTML = "☆"; // Empty star
//             }
//             starContainer.appendChild(star);
//         }
//     } catch (error) {
//         console.error("Error fetching rating:", error);
//     }
// }

// fetchRating4(); // Fetch rating on page load

// async function fetchRating5() {
//     try {
//         const response = await fetch("/get_faculty_rating");
//         const data = await response.json();
//         const rating = data.rating; 

//         const totalStars = 5;
//         const starContainer = document.getElementById("starContainer3");
//         starContainer.innerHTML = ""; // Clear previous stars

//         for (let i = 1; i <= totalStars; i++) {
//             const star = document.createElement("span");
//             if (i <= Math.floor(rating)) {
//                 star.innerHTML = "★"; // Full star
//                 star.classList.add("gold");
//             } else if (i - 0.5 <= rating) {
//                 star.innerHTML = "★"; // Half star
//                 star.classList.add("half");
//             } else {
//                 star.innerHTML = "☆"; // Empty star
//             }
//             starContainer.appendChild(star);
//         }
//     } catch (error) {
//         console.error("Error fetching rating:", error);
//     }
// }

// fetchRating5(); // Fetch rating on page load


// // async function fetchRating6() {
// //     try {
// //         const response = await fetch("/get_overall_rating");
// //         const data = await response.json();
// //         const rating = data.rating; 

// //         const totalStars = 5;
// //         const starContainer = document.getElementById("starContainer1");
// //         starContainer.innerHTML = ""; // Clear previous stars

// //         for (let i = 1; i <= totalStars; i++) {
// //             const star = document.createElement("span");
// //             if (i <= Math.floor(rating)) {
// //                 star.innerHTML = "★"; // Full star
// //                 star.classList.add("gold");
// //             } else if (i - 0.5 <= rating) {
// //                 star.innerHTML = "★"; // Half star
// //                 star.classList.add("half");
// //             } else {
// //                 star.innerHTML = "☆"; // Empty star
// //             }
// //             starContainer.appendChild(star);
// //         }
// //     } catch (error) {
// //         console.error("Error fetching rating:", error);
// //     }
// // }

// // fetchRating6(); // Fetch rating on page load


fetch("/get_overall_rating_iim_calcutta")
    .then(response => response.json())
    .then(data => {
        let rating = parseFloat(data.rating); // Convert to number

        if (isNaN(rating)) {
            console.error("Error: Fetched rating is not a valid number:", data.rating);
            return;
        }

        console.log("Fetched Rating:", rating);

        // Call both functions after fetching rating
        colorStars(rating);
        updateRatingText(rating);
    })
    .catch(error => console.error("Error fetching rating:", error));

    
function colorStars(rating) {
    const stars = document.querySelectorAll(".star");
    console.log("Coloring stars with rating:", rating);
    console.log("Found stars:", stars.length);

    stars.forEach((star, index) => {
        let value = parseFloat(star.getAttribute("data-value"));
        console.log(`Star ${index + 1} - Value: ${value}, Rating: ${rating}`);

        // Create new image element with error handling
        const img = new Image();
        img.onerror = () => console.error(`Failed to load star image for value ${value}`);
        img.width = 20;
        img.height = 20;
        img.className = "star-img";

        if (value <= rating) {
            img.src = "images/filled_star.png";
            img.alt = "Full Star";
        } else if (value - 0.5 === Math.floor(rating)) {
            img.src = "images/half_star.png";
            img.alt = "Half Star";
        } else {
            img.src = "images/star.png";
            img.alt = "Empty Star";
        }

        // Replace existing image
        star.src = img.src;
        star.alt = img.alt;
    });
}

// Add this function to test image loading
function testImageLoading() {
    const testImages = [
        "images/star.png",
        "images/half_star.png",
        "images/filled_star.png"
    ];

    testImages.forEach(src => {
        const img = new Image();
        img.onload = () => console.log(`Successfully loaded: ${src}`);
        img.onerror = () => console.error(`Failed to load: ${src}`);
        img.src = src;
    });
}

// Call the test function when the page loads
document.addEventListener("DOMContentLoaded", testImageLoading);

function updateRatingText(rating) {
    if (rating === null || rating === undefined) {
        console.error("Error: Rating is null or undefined.");
        return;
    }

    const numericRating = parseFloat(rating); // Convert to number

    if (isNaN(numericRating)) {
        console.error("Error: Rating is not a valid number.", rating);
        return;
    }

    console.log("Updating Rating Text:", numericRating.toFixed(1));

    const ratingText = document.querySelector(".rating-text p");
    if (ratingText) {
        ratingText.innerText = numericRating.toFixed(1); // Display 1 decimal place
    } else {
        console.error("Error: Rating text element not found.");
    }
}


async function fetchRating6() {
    try {
        const response = await fetch("/get_placement_rating_iim_kolkata");
        const data = await response.json();
        const rating = data.rating;     

        const totalStars = 5;
        const starContainer = document.getElementById("starContainer");
        starContainer.innerHTML = ""; // Clear previous stars

        for (let i = 1; i <= totalStars; i++) {
            const star = document.createElement("span");
            if (i <= Math.floor(rating)) {
                star.innerHTML = `<img src="/images/filled_star.png" alt="Full Star" width="20" height="20">`; // Full star image
                star.classList.add("gold");
            } else if (rating - i + 1 >= 0.5) {
                star.innerHTML = `<img src="/images/half_star.png" alt="Half Star" width="20" height="20">`; // Half star image
                star.classList.add("half");
            } else {
                star.innerHTML = `<img src="/images/star.png" alt="Empty Star" width="20" height="20">`; // Empty star image
                star.classList.add("empty");
            }
            starContainer.appendChild(star);
        }
    } catch (error) {
        console.error("Error fetching rating:", error);
    }
}

fetchRating6(); // Fetch rating on page load


async function fetchRating7() {
    try {
        const response = await fetch("/get_campus_life_rating_iim_kolkata");
        const data = await response.json();
        const rating = data.rating; 

        const totalStars = 5;
        const starContainer = document.getElementById("starContainer2");
        starContainer.innerHTML = ""; // Clear previous stars

        
        for (let i = 1; i <= totalStars; i++) {
            const star = document.createElement("span");
            if (i <= Math.floor(rating)) {
                star.innerHTML = `<img src="/images/filled_star.png" alt="Full Star" width="20" height="20">`; // Full star image
                star.classList.add("gold");
            } else if (rating - i + 1 >= 0.5) {
                star.innerHTML = `<img src="/images/half_star.png" alt="Half Star" width="20" height="20">`; // Half star image
                star.classList.add("half");
            } else {
                star.innerHTML = `<img src="/images/star.png" alt="Empty Star" width="20" height="20">`; // Empty star image
                star.classList.add("empty");
            }
            starContainer.appendChild(star);
        }

    } catch (error) {
        console.error("Error fetching rating:", error);
    }
}

fetchRating7(); // Fetch rating on page load

async function fetchRating8() {
    try {
        const response = await fetch("/get_faculty_rating_iim_kolkata");
        const data = await response.json();
        const rating = data.rating; 

        const totalStars = 5;
        const starContainer = document.getElementById("starContainer3");
        starContainer.innerHTML = ""; // Clear previous stars

        for (let i = 1; i <= totalStars; i++) {
            const star = document.createElement("span");
            if (i <= Math.floor(rating)) {
                star.innerHTML = `<img src="/images/filled_star.png" alt="Full Star" width="20" height="20">`; // Full star image
                star.classList.add("gold");
            } else if (rating - i + 1 >= 0.5) {
                star.innerHTML = `<img src="/images/half_star.png" alt="Half Star" width="20" height="20">`; // Half star image
                star.classList.add("half");
            } else {
                star.innerHTML = `<img src="/images/star.png" alt="Empty Star" width="20" height="20">`; // Empty star image
                star.classList.add("empty");
            }
            starContainer.appendChild(star);
        }

    } catch (error) {
        console.error("Error fetching rating:", error);
    }
}

fetchRating8(); // Fetch rating on page load



async function fetchRating9() {
    try {
        const response = await fetch("/get_infrastructure_rating_iim_kolkata");
        const data = await response.json();
        const rating = data.rating; 

        const totalStars = 5;
        const starContainer = document.getElementById("starContainer4");
        starContainer.innerHTML = ""; // Clear previous stars

       
        for (let i = 1; i <= totalStars; i++) {
            const star = document.createElement("span");
            if (i <= Math.floor(rating)) {
                star.innerHTML = `<img src="/images/filled_star.png" alt="Full Star" width="20" height="20">`; // Full star image
                star.classList.add("gold");
            } else if (rating - i + 1 >= 0.5) {
                star.innerHTML = `<img src="/images/half_star.png" alt="Half Star" width="20" height="20">`; // Half star image
                star.classList.add("half");
            } else {
                star.innerHTML = `<img src="/images/star.png" alt="Empty Star" width="20" height="20">`; // Empty star image
                star.classList.add("empty");
            }
            starContainer.appendChild(star);
        }

    } catch (error) {
        console.error("Error fetching rating:", error);
    }
}

fetchRating9(); // Fetch rating on page load


async function fetchRating10() {
    try {
        const response = await fetch("/get_curriculum_rating_iim_kolkata");
        const data = await response.json();
        const rating = data.rating; 

        const totalStars = 5;
        const starContainer = document.getElementById("starContainer5");
        starContainer.innerHTML = ""; // Clear previous stars

        
        
        for (let i = 1; i <= totalStars; i++) {
            const star = document.createElement("span");
            if (i <= Math.floor(rating)) {
                star.innerHTML = `<img src="/images/filled_star.png" alt="Full Star" width="20" height="20">`; // Full star image
                star.classList.add("gold");
            } else if (rating - i + 1 >= 0.5) {
                star.innerHTML = `<img src="/images/half_star.png" alt="Half Star" width="20" height="20">`; // Half star image
                star.classList.add("half");
            } else {
                star.innerHTML = `<img src="/images/star.png" alt="Empty Star" width="20" height="20">`; // Empty star image
                star.classList.add("empty");
            }
            starContainer.appendChild(star);
        }
        
    } catch (error) {
        console.error("Error fetching rating:", error);
    }
}

fetchRating10(); // Fetch rating on page load