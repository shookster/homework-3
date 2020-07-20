// Assignment Code
var generateBtn = document.querySelector('#generate');
// Make function that generates password
function generatePassword() {
  let length = Number(prompt(
    'How many characters would you like in your password? ("8 - 128")';))
  var upperc = confirm('Use uppercase?');
  var lowerc = confirm('Use lowercase?');
  var numbers = confirm('Use numbers?');
  var symbols = confirm('Use symbols?');

  if(!upperc && !lowerc && !numbers && !symbols) {
    alert('Please select one or more character types.');
    var upperc = confirm('Use uppercase?');
    var lowerc = confirm('Use lowercase?');
    var numbers = confirm('Use numbers?');
    var symbols = confirm('Use symbols?');  
  }

  let values =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()/?-_';

  let password = ''

  for(var i = 0; >= complexity; i++){
    password = values.charAt(Math.floor(Math.random() * Math.floor(value.length - 1)))
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
