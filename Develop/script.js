// Assignment code here
var passwordLength;
var characterArray = ['a', 'b', 'c', 'd', 'A', 'B', 'C', 'D'];
var specArray = ['*', '$', '_'];
var useSpecCharacters = false;

function generatePassword() {
  if (passwordLengthCheck()) {
    // console.log(passwordLength);
    useSpecCharacters = confirm('Do you want to include special characters?');
    return randomPassword(passwordLength);
  }
}

function randomPassword(length) {
  var password = '';
  for (var i = 0; i < length; i++) {
    if (useSpecCharacters && Math.round(Math.random())) {
      password += specArray[Math.floor(Math.random() * specArray.length)];
    } else {
      password += characterArray[Math.floor(Math.random() * characterArray.length)];
    }
  }
  // console.log(password);
  return password;
}

function passwordLengthCheck() {
  var pwLength = parseInt(prompt('How many characters do you want your password to be?'))
  // console.log(length)
  if (isNaN(pwLength)) {
    alert('Please use a valid Number');
    return false;
  } else if (pwLength < 8) {alert('Password must contain no less then 8 characters');
  return false;
} else if (pwLength > 128) {
  alert('Password must contain no more then 128 characrers');
  return false;
} else {
  passwordLength = pwLength;
  return true;
}
}



    // Get references to the #generate element
    var generateBtn = document.querySelector("#generate");

    // Write password to the #password input
    function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");

      passwordText.value = password;

    }

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
