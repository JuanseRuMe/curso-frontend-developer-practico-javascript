const navEmail = document.querySelector('.navbar-email');
const desktopNav = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

navEmail.addEventListener('click', toggleDesktopNav);
menuHamIcon.addEventListener('click', toggleMobileNav);

function toggleDesktopNav() {
   desktopNav.classList.toggle('inactive');
}
function toggleMobileNav() {
   mobileMenu.classList.toggle('inactive');
}