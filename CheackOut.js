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
  const ZipCode = document.querySelector('[name="Zip_code"]');
  const City = document.getElementById("City");
  const Country = document.getElementById("Country");
  const e_money = document.getElementById("e-money_number");
  const money_pins = document.getElementById("E-money_pins");
  const error_number = document.getElementById("errormessage_phone");
  const ziperror1 = document.getElementById("zip_error1");
  const ziperror2 = document.getElementById("zip_erro2");
  const NameErr = document.getElementById("Name_error");
  const EmailErr = document.getElementById("Email_err");
  const AddressErr = document.getElementById("Address_error");
  const Countryerror = document.getElementById("Country_error");
  const money_error = document.getElementById("Money_error");
  const moneyPin_err = document.getElementById("moneyPin_error");
  const EMoneyRadio = document.getElementById("E-money");
  const cashOnDel = document.getElementById("CashOn_Delivery");

  //  Name validation
  if (Name.value.includes(".")) {
    NameErr.style.display = "none";
  } else {
    NameErr.style.display = "block";
    // alert("err");
  }

  // Email validation
  if (Email.value.includes("@gmail.com")) {
    EmailErr.style.display = "none";
  } else {
    EmailErr.style.display = "block";
  }
  // phone_input_error
  if (phoneError.value.length < 10 || phoneError.value.length > 10) {
    error_number.style.display = "block";
  } else {
    error_number.style.display = "none";
  }
  // Address validation
  if (Address.value.includes("/")) {
    AddressErr.style.display = "none";
  } else {
    AddressErr.style.display = "flex";
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
  // var zipCodes = [26505, 26501, 26507, 26506];

  // for (i = 0; i <= zipCodes.length - 1; i++) {
  //   if (ZipCode == zipCodes[i]) {
  //     ziperror1.style.display = "none";
  //     break;
  //   } else {
  //     ziperror1.style.display = "block";
  //   }
  // }
  // city validation
  // country validation
  if (Country.value.includes("India")) {
    Countryerror.style.display = "none";
  } else {
    Countryerror.style.display = "block";
  }
  // E-money validatoion
  if (e_money.value.length < 9 || e_money.value.length > 9) {
    money_error.style.display = "block";
  } else {
    money_error.style.display = "none";
  }

  // Money_pins validation

  if (money_pins.value.length < 4 || money_pins.value.length > 4) {
    moneyPin_err.style.display = "block";
  } else {
    moneyPin_err.style.display = "none";
  }
  // cash or money validation
  if (e_money_radio.value || cashOnDel.value) {
    return true;
  } else {
    alert("click a radio buttons");
  }
  if (
    !Name.value.length ||
    !Email.value.length ||
    !phoneError.value.length ||
    !Address.value.length ||
    !ZipCode.value.length ||
    !City.value.length ||
    !Country.value.length
  ) {
    // value validations
    Email.style.border = "1px solid red";
    Name.style.border = "1px solid red";
    phoneError.style.border = "1px solid red";
    Address.style.border = "1px solid red";
    // ZipCode.style.border = "1px solid green";
    City.style.border = "1px solid red";
    Country.style.border = "1px solid red";
  } else {
  }
  const popup = document.getElementById("popup");
  if (
    Name.value &&
    Email.value &&
    phoneError.value &&
    Address.value &&
    ZipCode.value &&
    City.value &&
    Country.value &&
    Name.value.includes(".") &&
    Email.value.includes("@gmail.com") &&
    Address.value.includes("/") &&
    phoneError === 10 &&
    // ZipCode == zipCodes[i] &&
    Country.value.includes("India")
  ) {
    popup.style.display = "flex";
  } else {
    // console.log("err");
    alert("err");
  }
});
