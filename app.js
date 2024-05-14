const phones = [
  {
    brand: "Samsung",
    model: "S20",
    ram: 8,
    rom: 256,
    camera: "20 megapixel",
    price: 15000,
  },
  {
    brand: "Xiomi",
    model: "note10",
    ram: 4,
    rom: 64,
    camera: "10 megapixel",
    price: 15000,
  },
  {
    brand: "Infinix",
    model: "z10",
    ram: 2,
    rom: 16,
    camera: "5 megapixel",
    price: 15000,
  },
  {
    brand: "Tecno",
    model: "spark10",
    ram: 12,
    rom: 512,
    camera: "25 megapixel",
    price: 15000,
  },
  {
    brand: "Iphone",
    model: "14",
    ram: 4,
    rom: 1024,
    camera: "30 megapixel",
    price: 15000,
  },
  {
    brand: "Oppo",
    model: "F11",
    ram: 8,
    rom: 256,
    camera: "20 megapixel",
    price: 15000,
  },
  {
    brand: "Vivo",
    model: "y20",
    ram: 4,
    rom: 64,
    camera: "8 megapixel",
    price: 15000,
  },
  {
    brand: "Motorola",
    model: "G power",
    ram: 50,
    rom: 1024,
    camera: "60 megapixel",
    price: 300000,
  },
];

// const arr = [];
// const div = document.querySelector(".produts");
// function renderItems() {
//   for (let i = 0; i < phones.length; i++) {
//     div.innerHTML += `
//       <div class="card bg-dark text-light border-light" style="width: 18rem;">
//           <div class="card-body">
//               <h5 class="card-title">${
//                 phones[i].brand + " " + phones[i].model
//               }</h5>
//               <p class="card-text">Rs ${phones[i].price}</p>
//               <button onclick="addtocart(${i})" class="btn btn-primary">Add to Cart</button>
//           </div>
//       </div>
//       `;
//   }
// }

const arr = [];
const div = document.querySelector(".products");

// Define the phones array with some sample data
// const mobile = [
//   { brand: "Samsung", model: "Galaxy S21", price: 1000 },
//   { brand: "Apple", model: "iPhone 12", price: 1200 },
//   Add more phone objects as needed
// ];

// function renderItems() {
//   for (let i = 0; i < phones.length; i++) {
//     div.innerHTML += `
//       <div class="card bg-dark text-light border-light" style="width: 18rem;">
//           <div class="card-body">
//               <h5 class="card-title">${phones[i].brand} ${phones[i].model}</h5>
//               <p class="card-text">Rs ${phones[i].price}</p>
//               <button onclick="addtocart(${i})" class="btn btn-primary">Add to Cart</button>
//           </div>
//       </div>
//       `;
//   }
// }

function renderItems() {
  for (let i = 0; i < phones.length; i++) {
    div.innerHTML += `
      <div class="card bg-dark text-light border-light" style="width: 18rem;">
          <div class="card-body">
              <h5 class="card-title">${phones[i].brand} ${phones[i].model}</h5>
              <p class="card-text">RAM: ${phones[i].ram} GB</p>
              <p class="card-text">ROM: ${phones[i].rom} GB</p>
              <p class="card-text">Camera: ${phones[i].camera}</p>
              <p class="card-text">Price: Rs ${phones[i].price}</p>
              <button onclick="addtocart(${i})" class="btn btn-primary">Add to Cart</button>
          </div>
      </div>
      `;
  }
}

// Call renderItems to render the items
renderItems();
function addtocart(index) {
  if (arr.includes(phones[index])) phones[index].quantity += 1;
  else {
    phones[index].quantity = 1;
    arr.push(phones[index]);
  }
  console.log(phones);
}
function gotocart() {
  console.log("cart");
  window.location = "cart.html";
}
