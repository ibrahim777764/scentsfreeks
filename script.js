// script.js

// Select all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.product button');

// Add event listener to each button
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Function to handle adding product to cart
function addToCart(event) {
  const productBox = event.target.parentElement.parentElement; // Get the parent element of the clicked button (product box)

  // Create a new cart item element
  const cartItem = document.createElement('div');
  cartItem.className = 'cart-item';

  // Clone the image, name, and price elements from the product box
  const image = productBox.querySelector('img').cloneNode(true);
  const name = productBox.querySelector('h3').cloneNode(true);
  const price = productBox.querySelector('p').cloneNode(true);

  // Append the cloned elements to the cart item
  cartItem.appendChild(image);
  cartItem.appendChild(name);
  cartItem.appendChild(price);

  // Append the cart item to the cart items container
  const cartItemsContainer = document.querySelector('.cart-items');
  cartItemsContainer.appendChild(cartItem);
  
  // Remove the product box from the products container
  productBox.remove();
}
