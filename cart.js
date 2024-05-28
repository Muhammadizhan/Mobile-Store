console.log("cart items");

let cartItems = JSON.parse(localStorage.getItem("cartItems"));

const container = document.querySelector("div");

function renderItems() {
  if (cartItems != null && cartItems.length > 0) {
    container.innerHTML = "";
    cartItems.forEach((item, index) => {
      container.innerHTML += `
        <div class="border border-light rounded m-5 p-3">
          <h3>Model: ${item.brand} ${item.model}</h3>
          <h2 id="price-${index}">Price: ${item.price * item.quantity}</h2>
          <p class="card-text">RAM: ${item.ram} GB</p>
          <p class="card-text">ROM: ${item.rom} GB</p>
          <p class="card-text">Camera: ${item.camera}</p>
          <p class="card-text">Price: Rs ${item.price}</p>
          <div class="d-flex justify-content-between align-items-center">
            <button onclick="decrementQuantity(${index})" class="btn btn-secondary">-</button>
            <span class="quantity" id="quantity-${index}">${
        item.quantity
      }</span>
            <button onclick="incrementQuantity(${index})" class="btn btn-secondary">+</button>
            <button onclick="deleteItem(${index})" class="btn btn-danger">Delete</button>
          </div>
        </div>
      `;
    });
  } else {
    container.innerHTML = `<h3 class="text-center">No Item Found...</h3>`;
  }
}

renderItems();

function decrementQuantity(index) {
  if (cartItems[index].quantity > 1) {
    cartItems[index].quantity--;
    updatePrice(index);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    renderItems();
  }
}

function incrementQuantity(index) {
  cartItems[index].quantity++;
  updatePrice(index);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  renderItems();
}

function updatePrice(index) {
  const priceElement = document.getElementById(`price-${index}`);
  const item = cartItems[index];
  priceElement.textContent = `Price: ${item.price * item.quantity}`;
}

function deleteItem(index) {
  cartItems.splice(index, 1);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  renderItems();
}
