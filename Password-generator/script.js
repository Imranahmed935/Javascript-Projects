const passwordBox = document.getElementById("password");
const length = 12;

const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const SpecialChar = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

const allChars = UpperCase + LowerCase + number + SpecialChar;

function createPassword() {
  let password = "";
  password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
  password += LowerCase[Math.floor(Math.random() * LowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += SpecialChar[Math.floor(Math.random() * SpecialChar.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}
