// global variables
var specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "~",
  "`",
  "<",
  ">",
  "?",
  "/",
  "[",
  "]",
];

var generate = document.querySelector("#generate");

// event listener when generate button  is clicked
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

//a password is then generated after prompts//
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
