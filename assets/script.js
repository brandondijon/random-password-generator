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

    var popupTest = prompt("welcome lets generate!")
    console.log(popupTest);
    // Assignment Code
    var welcomeMessage = confirm("Welcome to the password generator! Get ready to generate your  password?")
    console.log(welcomeMessage);
    confirm("Welcome to the Password Generator! Ready to Generate Your Password?");
    //user says "ok"//
    if (welcomeMessage===true){
            confirm("Lets go!!")
    }

    //if  no
    else {
      console.log('uh oh');
      alert('uh oh')
      window.close();

  }

  // alert: how long would you like your password? "8 min 26 max"
  var msgLength = parseInt(prompt("How long would you like your password? 8 min 110 max"));
  console.log(msgLength);

  if ((msgLength >= 8 && msgLength <= 110) && !isNaN(msgLength)){
    console.log();
    alert();
}
    else{
        console.log("password needs to be longer");
        prompt("uh oh!Password needs to be at least 8 characters long");
    }


    //alert: lowercase letters
    var lowerCaseMsg = confirm("Do you want to inlcude lowercase letters in your password?");
    if (lowerCaseMsg==true){
        console.log("adding lowercase letters");
        alert("Yay! Adding Lowercase Letters");

        //concatenate the lowercase on  superArray.
        superArray = superArray.concat(lowerCase);
    } else{
        console.log("no lowercase letters");
        alert("No lowercase");
    }
    console.log("superArray after the lowercase", superArray);
