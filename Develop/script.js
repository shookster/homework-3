// Assignment Code
var generateBtn = document.querySelector("#generate");
// Make function that generates password
function generatePassword() {
  let completxity = prompt(
    'How many characters would you like in your password? ("8 - 128'
  );

  let values =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()/?-_";
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
