// Assignment code here
var passwordLength;
// var characterArray = ['a', 'b', 'c', 'd', 'A', 'B', 'C', 'D']; 
var uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specArray = ['*','_','$','&','#','@',"!","%"];
var useSpecCharacters = false;
var useUppercase = false;
var useLowercase = false;

function generatePassword() {
  console.log("I'm in the generatePassord function ");
  console.log("The password length is ", passwordLength);

   //if (passwordLengthCheck()) {
    console.log(passwordLength);
    useSpecCharacters = confirm('Do you want to include special characters?');
    useUppercase = confirm('Do you want to include uppercase letters?')
    useLowercase = confirm('Do you want to include lowercase letters?')
    writePassword(randomPassword (passwordLength))
   }
//}

function randomPassword(length) {
  console.log("I'm in the randomPassword function ")
  console.log(length)
  var password = '';
  for (var i = 0; i < length; i++) {
    if (useSpecCharacters && Math.round(Math.random())) {
      password += specArray[Math.floor(Math.random() * specArray.length)];
      continue;
    }

    if (useUppercase && Math.round(Math.random())) {
      password += uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)];
      continue;
    }

    password += lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)];



  }
  // console.log(password);
  return password;
}

function passwordLengthCheck() {
  console.log("I am in the passwordLengthCheck Function ")
  var pwLength = parseInt(prompt('How many characters do you want your password to be?'))
  // console.log(length)
  if (isNaN(pwLength)) {
    alert('Please use a valid Number');
    
    return;
  } else if (pwLength < 8) {
    alert('Password must contain no less then 8 characters');
    
    return;
  } else if (pwLength > 128) {
    
    alert('Password must contain no more then 128 characrers');
    return;
  } else {
    console.log(pwLength)
    passwordLength = pwLength;
    return generatePassword();
  }
 
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(password) {
  console.log("I am in the writePassword Function ")
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", passwordLengthCheck);
