function loadNavbar() {
  fetch('/components/Navigation.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('navbar-placeholder').innerHTML = data;
      setActiveLink();
    })
    .catch(error => console.error('Error loading navbar:', error));
}

function setActiveLink() {
  const currentPath = window.location.pathname;
  const menuLinks = document.querySelectorAll('.navbar .menu a');

  menuLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', loadNavbar);
