console.log("cart items");

const cartItems = JSON.parse(localStorage.getItem("cartItems"));
// console.log(cartItems)

const div = document.querySelector("div");

function renderItems() {
  if (cartItems != null && cartItems.length > 0) {
    for (let i = 0; i < cartItems.length; i++) {
      console.log(cartItems[i]);
      div.innerHTML += `
            <div class="border border-light rounded m-5 p-3">
            <h3>Model: ${cartItems[i].brand + " " + cartItems[i].model}</h3>
            <h2>Price: ${cartItems[i].price}</h2>
            <p class="card-text">RAM: ${cartItems[i].ram} GB</p>
            <p class="card-text">ROM: ${cartItems[i].rom} GB</p>
            <p class="card-text">Camera: ${cartItems[i].camera}</p>
            <p class="card-text">Price: Rs ${cartItems[i].price}</p>
            </div>
            `;
    }
  } else {
    console.log("cart item empty");
    div.innerHTML = `
        <h3 class="text-center">No Item Found...</h3>
        `;
  }
}

renderItems();
