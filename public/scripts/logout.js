document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded');
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('Logout button clicked');
            localStorage.removeItem('isLoggedIn');
            window.location.href = '/login';
        });
    } else {
        console.error('Logout button not found');
    }
});
