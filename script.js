// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#Generate");

// Function to generate a random password
function generatePassword() {
  // Define character sets for the password
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  // Prompt the user for password length
  var passwordLength = parseInt(
    prompt("Enter the desired password length (between 8 and 128 characters):")
  );

  // Check if the entered length is valid
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return "";
  }

  // Ask user for character types to include
  var useLowercase = confirm("Include lowercase characters?");
  var useUppercase = confirm("Include uppercase characters?");
  var useNumeric = confirm("Include numeric characters?");
  var useSpecial = confirm("Include special characters?");

  // Build a character pool based on user choices
  var characterPool = "";
  if (useLowercase) characterPool += lowercaseChars;
  if (useUppercase) characterPool += uppercaseChars;
  if (useNumeric) characterPool += numericChars;
  if (useSpecial) characterPool += specialChars;

  // Check if at least one character type is selected
  if (characterPool === "") {
    alert("Please select at least one character type.");
    return "";
  }

  // Generate the random password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool.charAt(randomIndex);
  }

  return password;
}

// Function to write the generated password to the textarea
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);