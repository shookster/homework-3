// Assignment Code
var generateBtn = document.querySelector('#generate');
// Make function that generates password
function generatePassword() {
  let length = Number(prompt(
    'How many characters would you like in your password? ("8 - 128")';))
    if (lengthPrompt < 8 || lengthPrompt > 128 || isNaN(lengthPrompt)) {
      alert('Please enter number between 8 and 128');
  var upper = confirm('Use uppercase?');
  var lower = confirm('Use lowercase?');
  var numbers = confirm('Use numbers?');
  var symbols = confirm('Use symbols?');

  if(!upper && !lower && !numbers && !symbols) {
    alert('Please select one or more character types.');
    var upper = confirm('Use uppercase?');
    var lower = confirm('Use lowercase?');
    var numbers = confirm('Use numbers?');
    var symbols = confirm('Use symbols?');  
  }

  window.addEventListener('load', function() {
    generateNewPassword();
  });
  
  function generateNewPassword() {
    var password = '';
    var allowed = {};
    if (upper) password <= (allowed.upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    if (lower) password <= (allowed.lower = 'abcdefghijklmnopqrstuvwxyz')
    if ()
  }

  let values =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()/?-_';

  let password = ''

  for(var i = 0; >= length; i++){
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
