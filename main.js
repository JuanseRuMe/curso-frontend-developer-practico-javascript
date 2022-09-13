const navEmail = document.querySelector('.navbar-email');
const desktopNav = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail')

navEmail.addEventListener('click', toggleDesktopNav);
menuHamIcon.addEventListener('click', toggleMobileNav);
menuCarIcon.addEventListener('click', toggleCarAside);

function toggleDesktopNav() {
   const isAsideClosed = aside.classList.contains('inactive');

   if (!isAsideClosed) {
      aside.classList.add('inactive');
   } 
   
   desktopNav.classList.toggle('inactive');
}

function toggleMobileNav() {
   const isAsideClosed = aside.classList.contains('inactive');

   if (!isAsideClosed) {
      aside.classList.add('inactive');
   } 
   mobileMenu.classList.toggle('inactive');
}

function toggleCarAside() {
   const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
   const isDesktopNav = desktopNav.classList.contains('inactive');

   if (!isMobileMenuClosed || !isDesktopNav) {
      mobileMenu.classList.add('inactive');
      desktopNav.classList.add('inactive');
   }
   
   aside.classList.toggle('inactive');   
}