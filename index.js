const message = document.getElementById("cart_shop");
const number = document.getElementById("cart_dail");
const container = document.querySelector(".container");

message.addEventListener("click", () => {
  if (number.style.display == "block" || number.style.display == "none") {
    number.style.display = "inline-block";
    qtylabel.style.display = "none";
  } else {
    number.style.display = "none";
  }
});
// redeirect index page
const Go_back = document.getElementById("Go-back");
Go_back.addEventListener("click", () => {
  window.location.href = "index.html";
});

// increment decrement
const decrement = document.getElementById("decrement_fun");
let initialtext = document.getElementById("inital_value");
const increment = document.getElementById("increment_fun");
const numbervalue = document.getElementById("numberid");
const cartId = document.getElementById("cart_id");
const init = document.getElementById("init");
const totalvalue = document.getElementById("total");
const Remover = document.getElementById("All_remove");
// let proprice = 2999;
let initalnumber = 0;
let totalprice;
increment.addEventListener("click", () => {
  initalnumber++;
  initialtext.innerHTML = initalnumber;
  cartId.innerText = initalnumber;
  init.textContent = initalnumber;
  totalprice = pro_price * initalnumber;
  numbervalue.textContent = "$" + totalprice;
  totalvalue.textContent = "$" + totalprice;
  // console.log(totalprice);
});

decrement.addEventListener("click", () => {
  if (initalnumber >= 1) {
    initalnumber--;
    initialtext.innerHTML = initalnumber;
    totalprice = cartlist_price * initalnumber;
    numbervalue.textContent = "$" + totalprice + ".00";
    // console.log(totalprice);
  } else {
    number.style.display = "none";
    return false;
  }
});
// add to cart
const ideal = document.getElementById("Cart_ideal");
const add_headphone = document.getElementById("add_head_list");
const number1 = document.getElementById("cart_dail");
const store = document.getElementById("Cart_store");
const qtylabel = document.querySelector(".qtycard_add");

store.addEventListener("click", () => {
  // ideal.style.display = "block";
  qtylabel.style.display = "block";
  ideal.style.display = "block";
  qtylabel.innerHTML = initalnumber;
  localStorage.setItem("pro-name", headphone[0].name);
  localStorage.setItem("pro-price", headphone[0].price);
  localStorage.setItem("pro-image", headphone[0].Image);
});

// Add to cart a increment& decrement
// let inital_value = 0;
let correctValue;
document.getElementById("inc_add").addEventListener("click", () => {
  const initase = document.querySelector(".inito");
  initalnumber++;
  // initialtext.textContent=inital_value;
  cartId.innerText = initalnumber;
  init.innerText = initalnumber;
  totalprice = initalnumber * pro_price;
  totalvalue.innerHTML = "$" + totalprice;
  console.log(initialtext);
});
const dec = document.getElementById("dec_sub").addEventListener("click", () => {
  if (initalnumber > 1) {
    initalnumber--;
    totalprice -= pro_price;
    totalvalue.innerText = totalprice;
  } else {
    ideal.style.display = "none";
  }
  if (initalnumber === 0) {
    cartId.innerText = 0;
    totalvalue.innerText = "$" + 0;
    ideal.style.display = "none";
    cartlist_price.innerHTML = 0;
  }
  cartId.innerText = initalnumber;
  init.innerText = initalnumber;
});
Remover.addEventListener("click", () => {
  cartId.innerText = 0;
  totalvalue.innerText = "$" + 0;
  ideal.style.display = "none";
});

// location zx9 speakers

// const back = document.getElementById("back_location");
// back.addEventListener("click", () => {
//   window.location.href = "index.html";
// });

// headphone local storage
let headphone = [
  {
    name: "XX99 MARK II HEADPHONES",
    Image: "https://i.ibb.co/stDjHqL/xx99-headphone-image.jpg",
    price: 1500,
  },
];
const product_img = document.getElementById("product-img");
const product_name = document.getElementById("product-name");
product_img.src = headphone[0].Image;
product_name.innerText = headphone[0].name;
numbervalue.innerText = headphone[0].price;

//
const cartlist_img = document.getElementById("cartlist-img");
const cartlist_price = document.getElementById("cartlist-price");
const cartlist_name = document.getElementById("cartlist-name");
const pro_price = localStorage.getItem("pro-price");
cartlist_name.innerText = localStorage.getItem("pro-name");
cartlist_img.src = localStorage.getItem("pro-image");
cartlist_price.innerText = localStorage.getItem("pro-price");

