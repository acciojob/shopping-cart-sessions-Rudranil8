// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");


// function renderProducts() {
//   products.forEach((product) => {
//     const li = document.createElement("li");
//     li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
//     productList.appendChild(li);
//   });
// }
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
// Render cart list

function renderCart() {
	const cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
	const cartList = document.getElementById("cart-list");
	cartList.innerHTML = '';
	cart.forEach((item) => {
	    const li = document.createElement("li");
	    li.textContent = `${item.name} - $${item.price}`;
	    cartList.appendChild(li);
	});
}

// Add item to cart

let cart=[];
function addToCart(productId) {
	const product = products.find(item => item.id === parseInt(productId));
	cart.push(product);
	sessionStorage.setItem('cart', JSON.stringify(cart));
	renderCart();
}

// Remove item from cart
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

// Initial render
renderProducts();
renderCart();
