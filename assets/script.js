//global variables
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
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
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var superArray = []; //contain chracters the user chooses and will cancatenacte.
var generate = document.querySelector("#generate");

// event listener after user clicks button
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

// a password is generated that matches criteria
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //password is generated,an alert on page pops up

  // alert: Thank you for choosing the password generator! would you like to play again?
  // passcode generator
  var popupTest = prompt("get ready!");
  console.log(popupTest);
  // Assignment Code
  var welcomeMessage = confirm(
    "Welcome to the password generator! Generate Your Password??"
  );
  console.log(welcomeMessage);
  confirm(
    "Welcome to the password generator! Ready to Generate Your Password??"
  );
  //user says say 'ok'
  if (welcomeMessage === true) {
    confirm("Lets begin!!!");
  }
  //user  say no
  else {
    console.log("boo hoo");
    alert("boo hoo to you");
    window.close();
  }
  //alert: how long would you like your password? 8 min 26 max
  var msgLength = parseInt(
    prompt("How long would you like your password? 8 min 110 max")
  );
  console.log(msgLength);

  if (msgLength >= 8 && msgLength <= 110 && !isNaN(msgLength)) {
    console.log("alright!");
    alert("alright! alright!");
  } else {
    console.log("this password needs to be longer");
    prompt("This Password needs to be at least 8 characters long");
  }

  //alert: lowercase letters
  var lowerCaseMsg = confirm(
    "Do you want to inlcude lowercase letters in your password?"
  );
  if (lowerCaseMsg == true) {
    console.log("adding lowercase letters");
    alert("Yay! Adding Lowercase Letters");
    //cancatenate the lowercase.
    superArray = superArray.concat(lowerCase);
  } else {
    console.log("no lowercase letters");
    alert("ok! No lowercase. Got it");
  }
  console.log("this is the superArray after the lowercase", superArray);

  //alert: upper case letters
  var upperCaseMsg = confirm(
    "Do you want to include uppercase letters in your password?"
  );
  if (upperCaseMsg == true) {
    console.log("adding uppercase letters");
    alert("ok! Adding Uppercase Letters");
    //cancatenate the uppercase.
    superArray = superArray.concat(upperCase);
  } else {
    console.log("no uppercase letters");
    alert("ok! no uppercase letters, got it");
  }
  console.log("this is the superArray after the uppercase", superArray);

  //alert: special characters
  var spCharMsg = confirm(
    "Do you want to add special characters to your password?!"
  );
  if (spCharMsg == true) {
    console.log("adding special characters");
    alert("ok! Adding special characters");
    //cancatenate the special characters.
    superArray = superArray.concat(specialCharacters);
  } else {
    console.log("no special characters");
    alert("ok! No special characters got it");
  }
  console.log("this is the array after the special characters", superArray);

  //alert: 'do you want numbers in your password?' t:f boolean ok:cancel
  var num = confirm("Do you want to add numbers to your password?!");
  if (num == true) {
    console.log("adding numbers");
    alert("ok! Adding numbers");
    // cancatenate the numbers.
    superArray = superArray.concat(numbers);
  } else {
    console.log("no numbers");
    alert("ok! No numbers");
  }
  console.log("this is the superArray after the numbers", superArray);

  var password = ""; //this stores random password chracters from which the computer generate

  for (var i = 0; i < msgLength; i++) {
    var randomNumber = Math.floor(Math.random() * superArray.length);

    password += superArray[randomNumber]; //this password  generated randomly characters the user made.
  }

  return password;
}
