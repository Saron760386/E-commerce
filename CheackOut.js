// radio button click show function

const e_money_radio = document.getElementById("E-money");
const cash_on_deliver = document.getElementById("CashOn_Delivery");
const money_pins = document.getElementById("e_money_pins");
const cash_deliver = document.getElementById("cash_delver_img");

e_money_radio.addEventListener("click", () => {
  money_pins.style.display = "flex";
  cash_deliver.style.display = "none";
});
cash_on_deliver.addEventListener("click", () => {
  cash_deliver.style.display = "flex";
  money_pins.style.display = "none";
});

// button gmail,password all elements errors --- if else method

const submit_button = document.getElementById("submit-button");

submit_button.addEventListener("click", () => {
  // Email_input_error
  const phoneError = document.getElementById("PhoneNumber");
  const Email = document.getElementById("Email");
  const Name = document.getElementById("Name");
  const Address = document.getElementById("Address");
  const ZipCode = document.getElementById("Zip_code");
  const City = document.getElementById("City");
  const Country = document.getElementById("Country");
  const e_money = document.getElementById("e-money_number");
  const money_pins = document.getElementById("E-money_pins");
  const error_number = document.getElementById("errormessage_phone");
  const ziperror1 = document.getElementById("zip_error1");
  const ziperror2 = document.getElementById("zip_erro2");
  const NameErr = document.getElementById("Name_error");

  //  Name validation
  if (Name.value.includes(".")) {
    NameErr.style.display = "none";
    // alert("invalue");
  } else {
    NameErr.style.display = "block";
    // alert("err");
  }

  // Email validation
  if (Email.value.includes("@gmail.com")) {
    // alert("you can successs");
  } else {
    // alert(failed);
  }
  // phone_input_error
  if (phoneError.value.length < 10 || phoneError.value.length > 10) {
    error_number.style.display = "block";
  } else {
    error_number.style.display = "none";
  }
  // Address validation
  if (Address.value.includes("/")) {
    // alert("successed");
    // Address.style.border = "1px solid green";
    // Address.style.boxShadow = " 0px 0px 8px green ";
  } else {
    Address.style.border = "1px solid red";
  }

  // zip code validation
  if (ZipCode.value.length < 5) {
    ziperror1.style.display = "block";
    // alert("fail");
    // console.log(ZipCode);
  } else {
    ziperror1.style.display = "none";
    // ZipCode.style.border = "1px solid green";
    // alert("done");
  }
  if (ZipCode.value.length > 10) {
    ziperror2.style.display = "block";
  } else {
    ziperror2.style.display = "none";
  }
  if (
    !Name.value.length ||
    !Email.value.length ||
    !phoneError.value.length ||
    !Address.value.length ||
    !ZipCode.value.length
  ) {
    // value validations
    Email.style.border = "1px solid red";
    Name.style.border = "1px solid red";
    phoneError.style.border = "1px solid red";
    Address.style.border = "1px solid red";
    // ZipCode.style.border = "1px solid red";
  } else {
  }
  const popup = document.getElementById("popup");
  if (
    Name.value &&
    Email.value &&
    phoneError.value &&
    Address.value &&
    ZipCode.value &&
    Email.value.includes("@gmail.com")
  ) {
    popup.style.display = "flex";
  }
});
