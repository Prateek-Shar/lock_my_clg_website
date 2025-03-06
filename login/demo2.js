const searchInput = document.getElementById('searchInput');
const dropdown = document.getElementById('dropdown');

// searchInput.addEventListener('input', async () => {
//   const query = searchInput.value.trim();
//   if (query) {
//     // Fetch matching data from the server using POST (recommended)
//     const response = await fetch('/search-dropdown?query=' + encodeURIComponent(query), {
//       method: 'POST', // Specify POST method (recommended for search)
//       headers: {
//         'Content-Type': 'application/json' // Important: Tell the server what you're sending
//       },
//       // If you were sending a body (not needed for simple queries in the URL):
//       // body: JSON.stringify({ query: query })
//     });

//     const data = await response.json();
//     console.log(data);

//     dropdown.innerHTML = '';
//     if (data.results.length > 0) {
//       dropdown.style.display = 'block';
//       data.results.forEach(item => {
//         const div = document.createElement('div');
//         div.textContent = item.College_Name; // Assuming received data has `College_Name` key
//         div.style.padding = '5px';
//         div.style.border = '1px solid black';
//         div.addEventListener('click', () => {
//           searchInput.value = item.College_Name; // Set selected value in the input
//           dropdown.style.display = 'none'; // Hide dropdown
//         });
//         dropdown.appendChild(div);
//       });
//     } else {
//       dropdown.style.display = 'none'; // Hide if no results
//     }
//   } else {
//     dropdown.style.display = 'none'; // Hide if query is empty
//   }
// });

searchInput.addEventListener('input', async () => {
  const query = searchInput.value.trim();
  if (query) {
    // Fetch matching data from the server using POST (recommended)
    const response = await fetch('/search-dropdown?query=' + encodeURIComponent(query), {
      method: 'POST', // Specify POST method (recommended for search)
      headers: {
        'Content-Type': 'application/json' // Important: Tell the server what you's sending
      },
      // If you were sending a body (not needed for simple queries in the URL):
      // body: JSON.stringify({ query: query })
    });

    const data = await response.json();
    console.log(data);

    dropdown.innerHTML = '';
    if (data.results.length > 0) {
      dropdown.style.display = 'block';
      data.results.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item.College_Name; // Assuming received data has `College_Name` key
        div.style.padding = '5px';
        div.style.border = '1px solid black';

        // Update functionality to render specific webpage on click
        div.addEventListener('click', () => {
          // Logic to determine target webpage based on selection
          let targetPage = '';
          if (item.College_Name === 'IIM Ahemdabad') {
            targetPage = 'Login.html';
          } else if (item.College_Name === 'IIM Lucknow') {
            targetPage = 'Register.html';
          } else {
            // Handle unexpected selections or default page
            targetPage = 'default.html';
          }

          // Redirect to the target webpage using window.location.href
          window.location.href = targetPage;
        });

        dropdown.appendChild(div);
      });
    } else {
      dropdown.style.display = 'none'; // Hide if no results
    }
  } else {
    dropdown.style.display = 'none'; // Hide if query is empty
  }
});

// Hide dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target) && e.target !== searchInput) {
    dropdown.style.display = 'none';
  }
});