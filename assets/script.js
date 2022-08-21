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

generateBtn.addEventListener("click", writePassword);

function generatePassword()

    // password ngenerated and alert pops up//

  // alert welcome to password generator//

    var popupTest = prompt('welcome lets generate!')
    console.log(popupTest);
    // Assignment Code
    var welcomeMessage = confirm('Welcome to the password generator! Get ready to generate your  password?')
    console.log(welcomeMessage);
    confirm('Welcome to the Password Generator! Ready to Generate Your Password?');
    //user says "ok"//
    if (welcomeMessage===true){
            confirm('Lets go!!')
    }
