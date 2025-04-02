// Check authentication status when page loads
document.addEventListener('DOMContentLoaded', () => {
    const loginPanel = document.querySelector('#login-panel');
    const registerLink = document.querySelector('.register');
    const userName = document.querySelector('#user-name');
    const logoutBtn = document.querySelector('#logout-btn');

    // Check if user is logged in (you can modify this based on your authentication method)
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    const currentUser = sessionStorage.getItem('userName');

    if (isLoggedIn && currentUser) {
        // Show login panel and hide register link
        loginPanel.style.display = 'flex';
        registerLink.style.display = 'none';
        userName.textContent = `Welcome, ${currentUser}`;
    } else {
        // Hide login panel and show register link
        loginPanel.style.display = 'none';
        registerLink.style.display = 'block';
    }

    // Handle logout
    logoutBtn.addEventListener('click', () => {
        // Clear authentication data
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('userName');
        
        // Hide login panel and show register link
        loginPanel.style.display = 'none';
        registerLink.style.display = 'block';
        
        // Redirect to login page
        window.location.href = '/login';
    });
}); 