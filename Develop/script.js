// Assignment code here
function generatePassword() {
  var length = parseInt(prompt('How many characters do you want your password to be?'))
  console.log(length)
  if (isNaN(length)) {
    alert('Please use a valid Number')
    return null
  } if (length < 8) {
    alert('Password must contain no less then 8 characters')
  } if (length > 128) {
    alert('Password must contain no more then 128 characrers')
  }
var specialCharacters = confirm ("Click the 'ok' button if you want to use special characters in the password")

var useNumbers = confirm ("Would you like to use numbers in your password?")

var
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
