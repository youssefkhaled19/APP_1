let section = document.querySelector(".parent");

// Load stored data
let products = JSON.parse(localStorage.getItem("products") || "[]");
let cartIDs = JSON.parse(localStorage.getItem("cart_1") || "[]");

// Draw cart items
function drawCart(cartIDs) {
  if (cartIDs.length === 0) {
    section.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  let html = cartIDs.map(id => {
    let item = products.find(p => p.id === id);
    if (!item) return "";
    return `
      <div class="product">
        <img src="${item.img}" alt="${item.h2}">
        <h2 class="h2">${item.h2}</h2>
        <h3 class="h3">Price: $${item.price}</h3>
      </div>
    `;
  }).join("");

  section.innerHTML = html;
}

drawCart(cartIDs);
