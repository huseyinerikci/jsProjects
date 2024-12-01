const passwordİnput = document.getElementById("password");
const generateBtn = document.getElementById("btn");
const copy = document.getElementById("copy");
const copyText = document.querySelector(".copy-text");

const length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
const lowerCase = "abcdefghijklmnopqrstuvwyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordİnput.value = password;
}
generateBtn.addEventListener("click", createPassword);

function copyPassword() {
  passwordİnput.select();
  document.execCommand("copy");
}
copy.addEventListener("click", () => {
  copyPassword();
  copyText.style.display = "block";
  setTimeout(() => {
    copyText.style.display = "none";
    passwordİnput.value = "";
  }, 1500);
});
