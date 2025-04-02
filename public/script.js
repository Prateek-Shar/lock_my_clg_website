const loginPanel = document.querySelector("#login-panel");

document.addEventListener("DOMContentLoaded" , () => {

    const collegeDesc = document.querySelectorAll('.college-desc'); // Select all divs inside .college-desc
    const nextButton = document.querySelector('#next-button1');
    const prevButton = document.querySelector('#previous-button1');

    const clg1 = document.querySelector(".clg1");
    const clg2 = document.querySelector(".clg2");
    const clg3 = document.querySelector(".clg3");
    const clg4 = document.querySelector(".clg4");
    const clg5 = document.querySelector(".clg5");
    const clg6 = document.querySelector(".clg6");

    prevButton.addEventListener("click" , () => {
        clg4.style.display = "none";
        clg5.style.display = "none";
        clg6.style.display = "none";
        
        clg1.style.display = "flex";
        clg2.style.display = "flex";
        clg3.style.display = "flex";
    })


    nextButton.addEventListener("click" , () => {
        clg4.style.display = "flex";
        clg5.style.display = "flex";
        clg6.style.display = "flex";
        
        clg1.style.display = "none";
        clg2.style.display = "none";
        clg3.style.display = "none";

    })  

})

document.addEventListener("DOMContentLoaded" , () => {
    const nxt_button = document.querySelector("#next-button2");
    const prev_button = document.querySelector("#previous-button2")

    const clg7 = document.querySelector(".clg7");
    const clg8 = document.querySelector(".clg8");
    const clg9 = document.querySelector(".clg9");
    const clg10 = document.querySelector(".clg10");
    const clg11 = document.querySelector(".clg11");
    const clg12 = document.querySelector(".clg12");

    
    nxt_button.addEventListener("click" , () => {
        clg10.style.display = "flex";
        clg11.style.display = "flex";
        clg12.style.display = "flex";
        
        clg7.style.display = "none";
        clg8.style.display = "none";
        clg9.style.display = "none";

    })  

    prev_button.addEventListener("click" , () => {
        clg10.style.display = "none";
        clg11.style.display = "none";
        clg12.style.display = "none";
        
        clg7.style.display = "flex";
        clg8.style.display = "flex";
        clg9.style.display = "flex";
    })

})

document.addEventListener("DOMContentLoaded" , () => {
    const nxt_button3 = document.querySelector("#next-button3");
    const prev_button3 = document.querySelector("#previous-button3")

    const clg13 = document.querySelector(".clg13");
    const clg14 = document.querySelector(".clg14");
    const clg15 = document.querySelector(".clg15");
    const clg16 = document.querySelector(".clg16");
    const clg17 = document.querySelector(".clg17");
    const clg18 = document.querySelector(".clg18");

    nxt_button3.addEventListener("click" , () => {
        clg16.style.display = "flex";
        clg16.style.justifyContent = "space-evenly"
        clg16.style.alignItems = "center";

        clg17.style.display = "flex";
        clg17.style.justifyContent = "space-evenly"
        clg17.style.alignItems = "center";
        
        clg18.style.display = "flex";
        clg18.style.justifyContent = "space-evenly"
        clg18.style.alignItems = "center";
        
        clg13.style.display = "none";
        clg14.style.display = "none";
        clg15.style.display = "none";
    }) 

    prev_button3.addEventListener("click" , () => {
        clg13.style.display = "flex";
        clg14.style.display = "flex";
        clg15.style.display = "flex"
        
        clg16.style.display = "none";
        clg17.style.display = "none";
        clg18.style.display = "none";
    })
});




document.addEventListener("DOMContentLoaded", () => {
    const togglebt1 = document.querySelector("#img15");
    const paraShow1 = document.querySelector(".q1-sec1");
    const paraShow2 = document.querySelector(".q1-sec2");

    togglebt1.addEventListener("click", () => {
        if (paraShow2.style.display === "none") {
            paraShow2.style.display = "block";
            togglebt1.src = "../images/arrowheaddown.png";
            paraShow1.style.borderBottomLeftRadius = "0";
            paraShow1.style.borderBottomRightRadius = "0";            
            paraShow2.style.borderBottomLeftRadius = "20px";
            paraShow2.style.borderBottomRightRadius = "20px";
        } else {
            togglebt1.src = "../images/arrowhead.png";
            paraShow2.style.display = "none";
            // paraShow1.style.borderBottomLeftRadius = "0";
        }
    });
});


document.addEventListener("DOMContentLoaded" , () => {
    const togglebt2 = document.querySelector("#img16");

    const paraShow2 = document.querySelector(".q2-sec2");

    togglebt2.addEventListener("click", () => {
        if (paraShow2.style.display === "none") {
            paraShow2.style.display = "block";
            togglebt2.src = "../images/arrowheaddown.png";
        } else {
            togglebt2.src = "../images/arrowhead.png"; 
            paraShow2.style.display = "none";
            
        }
    });

})


document.addEventListener("DOMContentLoaded" , () => {
    const togglebt3 = document.querySelector("#img17");
    const para3show = document.querySelector(".q3-sec2");

    togglebt3.addEventListener("click", () => {
        if (para3show.style.display === "none") {
            para3show.style.display = "block";
            togglebt3.src = "../images/arrowheaddown.png";
        } else {
            togglebt3.src = "../images/arrowhead.png"; 
            para3show.style.display = "none";
            
        }
    });

})

document.addEventListener("DOMContentLoaded" , () => {
    const togglebt4 = document.querySelector("#img18");
    const para4show = document.querySelector(".q4-sec2");

    togglebt4.addEventListener("click", () => {
        if (para4show.style.display === "none") {
            para4show.style.display = "block";
            togglebt4.src = "../images/arrowheaddown.png";
        } else {
            togglebt4.src = "../images/arrowhead.png"; 
            para4show.style.display = "none";
            
        }
    });

})

document.addEventListener("DOMContentLoaded" , () => {
    const togglebt5 = document.querySelector("#img19");
    const para5show = document.querySelector(".q5-sec2");

    togglebt5.addEventListener("click", () => {
        if (para5show.style.display === "none") {
            para5show.style.display = "block";
            togglebt5.src = "../images/arrowheaddown.png";
        } else {
            togglebt5.src = "../images/arrowhead.png"; 
            para5show.style.display = "none";
            
        }
    });

})

const searchInput = document.getElementById('searchInput');
const dropdown = document.getElementById('dropdown');
const image = document.querySelector("#img7");

// Initially disable the image until a college is selected
image.disabled = true;  // Or set a CSS class to visually indicate disabled state

searchInput.addEventListener('input', async () => {
  const query = searchInput.value.trim();
  if (query) {
    try { // Add try-catch for error handling
      const response = await fetch('/search-dropdown?query=' + encodeURIComponent(query), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) { // Check for HTTP errors (e.g., 500)
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      dropdown.innerHTML = '';
      if (data.results.length > 0) {
        dropdown.style.display = 'block';
        dropdown.style.width = '100%';
        dropdown.style.maxWidth = '950px';
        dropdown.style.position = 'absolute';
        dropdown.style.top = '100%';
        dropdown.style.left = '50%';
        dropdown.style.transform = 'translateX(-50%)';
        dropdown.style.zIndex = '1000';
        dropdown.style.backgroundColor = '#ffffff';
        dropdown.style.borderRadius = '5px';
        dropdown.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        dropdown.style.overflowY = 'hidden';
        dropdown.style.maxHeight = 'none';
        dropdown.style.overflowX = 'hidden';
        dropdown.style.marginLeft = '10px';

        data.results.forEach(item => {
          const div = document.createElement('div');
          div.textContent = item.College_Name;
          div.style.padding = '0 15px';
          div.style.border = '1px solid #edeff4';
          div.style.borderRadius = '5px';
          div.style.cursor = 'pointer';
          div.style.backgroundColor = '#ffffff';
          div.style.width = '100%';
          div.style.height = '45px';
          div.style.lineHeight = '45px';
          div.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
          div.style.fontSize = '16px';
          div.style.color = '#363636';
          div.style.transition = 'all 0.2s ease';
          div.style.marginBottom = '5px';
          div.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
          div.style.display = 'flex';
          div.style.alignItems = 'center';
          div.style.justifyContent = 'flex-start';

          div.addEventListener('mouseover', () => {
            div.style.backgroundColor = '#f6f7f9';
            div.style.transform = 'translateY(-2px)';
            div.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
          });

          div.addEventListener('mouseout', () => {
            div.style.backgroundColor = '#ffffff';
            div.style.transform = 'translateY(0)';
            div.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
          });

          div.addEventListener('click', () => {
            searchInput.value = item.College_Name;
            dropdown.style.display = 'none';
            image.disabled = false;
          });

          dropdown.appendChild(div);
        });
      } else {
        dropdown.style.display = 'none';
        image.disabled = true; // Disable the image if no results
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error, e.g., display a message to the user
      dropdown.innerHTML = '<div style="color: red;">Error fetching results.</div>';
      image.disabled = true;
    }
  } else {
    dropdown.style.display = 'none';
    image.disabled = true; // Disable the image if the query is empty
  }
});

// Add an event listener for the image click event.
image.addEventListener('click', () => {
  // Check if there's a value in the search input.
  if (searchInput.value) {
    console.log(searchInput.value);
    let targetPage = '';
    const selectedCollege = searchInput.value; // Get the currently selected college.

    // Determine the target page based on the selected college.
    if (selectedCollege === 'IIM Ahemdabad') {
      targetPage = 'iim_ahemdabad.html';
    } else if (selectedCollege === 'IIM Lucknow') {
      targetPage = 'iim_lucknow.html';
    } else if (selectedCollege === 'IIM Bangalore') {
      targetPage = 'iim_bangalore.html';
    } else if (selectedCollege === 'XLRI') {
      targetPage = 'XLRI.html';
    } else if (selectedCollege === 'IIM Calcutta') {
      targetPage = 'iim_calcutta.html';
    } else if (selectedCollege === 'IIM Kozhikode') {
      targetPage = 'iim_kozhikode.html';
    } else if (selectedCollege === 'Shaheed Sukhdev College of Business Studies') {
      targetPage = 'sscbs.html';
    } else if (selectedCollege === 'Christ University') {
      targetPage = 'christ.html';
    } else if (selectedCollege === 'Narsee Monjee Institute of Management Studies') {
      targetPage = 'nmims.html';
    } else if (selectedCollege === 'Symbiosis Centre for Management Studies') {
      targetPage = 'scms.html';
    } else if (selectedCollege === 'Mount Caramel') {
      targetPage = 'mount_caramel.html';
    } else {
      alert('No Results Found');
      return; // Prevents further execution if no college is found.
    }
    
    // Redirect to the target page.
    window.location.href = targetPage;
  } else {
    alert('Please select a college from the dropdown first.');
  }
});



// Hide dropdown when clicking outside (improved)
// document.addEventListener('click', (e) => {
//   if (!dropdown.contains(e.target) && e.target !== searchInput) {
//     dropdown.style.display = 'none';
//   }
// });

// Hide dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target) && e.target !== searchInput) {
    dropdown.style.display = 'none';
  }
});