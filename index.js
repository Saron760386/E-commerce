const message = document.getElementById("cart_shop");
const number = document.getElementById("cart_dail");
const container = document.querySelector(".container");

message.addEventListener("click", () => {
  if (number.style.display == "block" || number.style.display == "none") {
    number.style.display = "inline-block";
    return true;
  } else {
    number.style.display = "none";
    return false;
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
let proprice = 2999;
let initalnumber = 0;
let totalprice;
increment.addEventListener("click", () => {
  initalnumber++;
  initialtext.innerHTML = initalnumber;
  cartId.innerText = initalnumber;
  init.textContent = initalnumber;
  totalprice = proprice * initalnumber;
  numbervalue.textContent = "$" + totalprice;
  // console.log(totalprice);
});

decrement.addEventListener("click", () => {
  if (initalnumber > 1) {
    initalnumber--;
    initialtext.innerHTML = initalnumber;
    totalprice = proprice * initalnumber;
    numbervalue.textContent = "$" + totalprice + ".00";
    // console.log(totalprice);
    return true;
  } else {
    number.style.display = "none";
    return false;
  }
});
// add to cart
const ideal = document.getElementById("Cart_ideal");
const number1 = document.getElementById("cart_dail");
const store = document.getElementById("Cart_store");
const qtylabel = document.querySelector(".qtycard_add");

store.addEventListener("click", () => {
  // ideal.style.display = "block";
  qtylabel.style.display = "block";
  ideal.style.display = "block";
  qtylabel.innerHTML = initalnumber;
});

// Add to cart a increment& decrement
let inital_value = 0;
document.getElementById("inc_add").addEventListener("click", () => {
  inital_value++;
  init.innerText = inital_value;
});
const dec = document.getElementById("dec_sub").addEventListener("click", () => {
  if (inital_value > 1) {
    inital_value--;
    init.innerText = inital_value;
    return true;
  } else {
    ideal.style.display = "none";
    return false;
  }
});

// location zx9 speakers

const back = document.getElementById("back_location");
back.addEventListener("click", () => {
  window.location.href = "index.html";
});
