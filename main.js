const navEmail = document.querySelector('.navbar-email');
const desktopNav = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleDesktopNav);

function toggleDesktopNav() {
   desktopNav.classList.toggle('inactive');
}