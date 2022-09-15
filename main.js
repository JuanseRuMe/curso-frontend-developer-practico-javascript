const navEmail = document.querySelector('.navbar-email');
const desktopNav = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shopping-cart-container');
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleDesktopNav);
menuHamIcon.addEventListener('click', toggleMobileNav);
menuCarIcon.addEventListener('click', toggleCarAside);

function toggleDesktopNav() {
   const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

   if (!isAsideClosed) {
      shoppingCartContainer.classList.add('inactive');
   } 
   
   desktopNav.classList.toggle('inactive');
}

function toggleMobileNav() {
   const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

   if (!isAsideClosed) {
      shoppingCartContainer.classList.add('inactive');
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
   
   shoppingCartContainer.classList.toggle('inactive');   
}

const productList = [];
productList.push({
   name: 'Bike',
   price: 120,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
   name: 'Tv',
   price: 220,
   image: 'https://i.blogs.es/4a1530/apps/1366_2000.jpeg',

});
productList.push({
   name: 'Laptop',
   price: 620,
   image: 'https://www.notebookcheck.org/fileadmin/Notebooks/Microsoft/Surface_Laptop_Go_Core_i5/IMG_20201021_193418.jpg',

});
productList.push({
   name: 'Celular',
   price: 520,
   image: 'https://cf.shopee.com.co/file/5d86c6d97227cc36a872ea98fba0b927_tn',

});

/* <div class="product-card">
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
      <div class="product-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
      </div>
    </div> */

// Maquetacion de HTML con JavaScript 
function renderProducts(arr) {
   for(product of arr){
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
   
      // product= {name, price, image} -> product.image
      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);
   
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
   
      const productInfoDiv = document.createElement('div');
      const productPrice = document.createElement('p');
      productPrice.innerText = '$' + product.price;
      const productName = document.createElement('p');
      productName.innerText = product.name;
   
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);
   
      const productInfoFigure = document.createElement('figure');
      const productFigureImg = document.createElement('img');
      productFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
   
      productInfoFigure.appendChild(productFigureImg);
   
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);
   
      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);
   
      cardsContainer.appendChild(productCard);
   }
}

renderProducts(productList);