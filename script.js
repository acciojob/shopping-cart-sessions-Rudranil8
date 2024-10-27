// This is the boilerplate code given for you
// You can modify this code
// Product data
// const products = [
//   { id: 1, name: "Product 1", price: 10 },
//   { id: 2, name: "Product 2", price: 20 },
//   { id: 3, name: "Product 3", price: 30 },
//   { id: 4, name: "Product 4", price: 40 },
//   { id: 5, name: "Product 5", price: 50 },
// ];

// // DOM elements
// const productList = document.getElementById("product-list");

// function renderProducts() {
//   products.forEach((product) => {
//     const li = document.createElement("li");
//     li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
//     productList.appendChild(li);
    
//     const btn = li.querySelector('.add-to-cart-btn');
//     btn.addEventListener('click', function(event) {
//       const id = event.target.getAttribute('data-id');
//       addToCart(id);
//     });
//   });
// }
// // Render cart list

// function renderCart() {
//   // Get the cart array from sessionStorage
//   const cart = JSON.parse(sessionStorage.getItem('cart') || '[]');

//   // Get the cart list element
//   const cartList = document.getElementById("cart-list");

//   // Clear the cart list
//   cartList.innerHTML = '';

//   // Add each item in the cart to the cart list
//   cart.forEach((item) => {
//     const li = document.createElement("li");
//     li.innerHTML = `${item.name} - $${item.price} <button class="remove-from-cart-btn" data-id="${item.id}">Remove</button>`;
//     cartList.appendChild(li);

//     // Add event listener to the "Remove" button
//     const btn = li.querySelector('.remove-from-cart-btn');
//     btn.addEventListener('click', function(event) {
//       const id = event.target.getAttribute('data-id');
//       removeFromCart(id);
//     });
//   });
// }

// // Add item to cart

// let cart=[];
// function addToCart(productId) {
// 	const product = products.find(item => item.id === parseInt(productId));
// 	cart.push(product);
// 	sessionStorage.setItem('cart', JSON.stringify(cart));
// 	renderCart();
// }

// // Remove item from cart
// function removeFromCart(productId) {
// 	const index = cart.findIndex(item => item.id === parseInt(productId));
// 	if (index !== -1) {
// 		cart.splice(index, 1);
// 	}
// 	sessionStorage.setItem('cart', JSON.stringify(cart));
// 	renderCart();
// }


// function clearCart() {
// 	cart = [];
// 	sessionStorage.setItem('cart', JSON.stringify(cart));
// 	renderCart();
// }

// // Initial render
// renderProducts();
// renderCart();


const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");

function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
    
    const btn = li.querySelector('.add-to-cart-btn');
    btn.addEventListener('click', function(event) {
      const id = event.target.getAttribute('data-id');
      addToCart(id);
    });
  });
}

function renderCart() {
  const cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = '';

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - $${item.price} <button class="remove-from-cart-btn" data-id="${item.id}">Remove</button>`;
    cartList.appendChild(li);

    const btn = li.querySelector('.remove-from-cart-btn');
    btn.addEventListener('click', function(event) {
      const id = event.target.getAttribute('data-id');
      removeFromCart(id);
    });
  });
}

let cart=[];
function addToCart(productId) {
	const product = products.find(item => item.id === parseInt(productId));
	cart.push(product);
	sessionStorage.setItem('cart', JSON.stringify(cart));
	renderCart();
}

function removeFromCart(productId) {
	const index = cart.findIndex(item => item.id === parseInt(productId));
	if (index !== -1) {
		cart.splice(index, 1);
	}
	sessionStorage.setItem('cart', JSON.stringify(cart));
	renderCart();
}

function clearCart() {
	cart = [];
	sessionStorage.setItem('cart', JSON.stringify(cart));
	renderCart();
}

// Add an event listener to the "Clear Cart" button
document.getElementById('clear-cart-btn').addEventListener('click', clearCart);

// When the page loads, display the current cart contents
window.onload = function() {
  renderCart();
};

// Initial render
renderProducts();