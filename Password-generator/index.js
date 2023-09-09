const passwordBox = document.getElementById("password");
const length = 10;

const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase = "abcdefghijklmnopqrstuvwxyz";
const Numbers = "0123456789";
const SpecialCharacters = "!@#$%^&*()_+=-[]{}|';:/?.>,<`~";

const add = UpperCase + LowerCase + Numbers + SpecialCharacters;

function generatePassword() {
  let password = "";
  password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
  password += LowerCase[Math.floor(Math.random() * LowerCase.length)];
  password += Numbers[Math.floor(Math.random() * Numbers.length)];
  password +=
    SpecialCharacters[Math.floor(Math.random()) * SpecialCharacters.length];

  while (length > password.length) {
    password += add[Math.floor(Math.random() * add.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}
