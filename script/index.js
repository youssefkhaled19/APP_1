// Greet the user
let h_h3 = document.getElementById("h_h3");
let username = localStorage.getItem("username");
if (username) {
  h_h3.textContent = 'Hello ' + username[0].toUpperCase() + username.slice(1);
}

// Product data
let products = [
  { id: 1, img: "image/image3.jpg", h2: "glasses", price: 100 },
  { id: 2, img: "image/hat.jpg", h2: "hat", price: 250 },
  { id: 3, img: "image/hoodie.jpg", h2: "yellow hoodie", price: 500 },
  { id: 4, img: "image/jaket1.jpg", h2: "black Jaket", price: 400 },
  { id: 5, img: "image/jeans.jpg", h2: "Jeans", price: 500 },
  { id: 6, img: "image/shoes.jpg", h2: "white Shoes", price: 200 },
  { id: 7, img: "image/shoes2.jpg", h2: "baij Shoes", price: 200 },
];

// Save products to localStorage
localStorage.setItem("products", JSON.stringify(products));

// Draw products on the page
let allProducts = document.querySelector(".products");
function drawProducts(products) {
  let html = products.map(item => `
    <div class="product1" id="${item.id}">
      <img src="${item.img}" alt="${item.h2}" class="img1">
      <h2>${item.h2}</h2>
      <h3>${item.price}$</h3>
      <button onclick='cart_add(${JSON.stringify(item)})'>Add to Cart</button>
    </div>
  `).join("");
  allProducts.innerHTML = html;
}
drawProducts(products);

// Cart logic
let cartItems = JSON.parse(localStorage.getItem("cart_1") || "[]");

function cart_add(item) {
  let cartCount = document.getElementById("cart-count");
  cartItems.push(item.id);
  localStorage.setItem("cart_1", JSON.stringify(cartItems));
  cartCount.textContent = cartItems.length;
}

// Load cart count on page load
let cartCount = document.getElementById("cart-count");
cartCount.textContent = cartItems.length;

// Navigate to cart page
window.onload = function () {
  let i = document.getElementById("cart22");
  i.addEventListener("click", () => {
    window.location.href = "cart.html";
  });
};
