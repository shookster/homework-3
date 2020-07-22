// Assignment Code
document.querySelector("#generate").addEventListener("click", writePassword);

// Make function that generates password
function generatePassword() {
  var length = prompt(
    "How many characters would you like in your password? (8 - 128)"
  );
  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Please enter number between 8 and 128");
    var length = prompt(
      "How many characters would you like in your password? (8 - 128)"
    );

    var confirmUpper = confirm("Use uppercase?");
    var confirmLower = confirm("Use lowercase?");
    var confirmNumbers = confirm("Use numbers?");
    var confirmSymbols = confirm("Use symbols?");
  }
  while (!confirmUpper && !confirmLower && !confirmNumbers && !confirmSymbols) {
    alert("Please select one or more character types.");
    var confirmUpper = confirm("Use uppercase?");
    var confirmLower = confirm("Use lowercase?");
    var confirmNumbers = confirm("Use numbers?");
    var confirmSymbols = confirm("Use symbols?");
  }

  var passChar = [];
  var upper = [
    "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z",
  ];
  var lower = [
    "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z",
  ];
  var numbers = ["1, 2, 3, 4, 5, 6, 7, 8, 9, 0"];
  var symbols = ["!, @, #, $, %, ^, &, *, (, ), -, _, =, +"];
  if (confirmSymbols) {
    passChar = passChar.concat(upper);
  }
  if (confirmLower) {
    passChar = passChar.concat(lower);
  }
  if (confirmNumbers) {
    passChar = passChar.concat(numbers);
  }
  if (confirmSymbols) {
    passChar = passChar.concat(symbols);
  }

  for (var i = 0; i < length; i++) {
    rPassword += passChar[Math.floor(Math.random() * passChar.length)];
  }
  return rPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
