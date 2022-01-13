var userChoice = [
    ["special" , false],
    ["upper case" , false],
    ["lower case" , false],
    ["numeric" , false]
];

// Determine the password length by prompting user for input
    var passwordLengthInput = function() {
        var input = parseInt(prompt("How long would you like your password to be (minimum 8 characters and maximum of 128 characters)."));
        if (isNaN(input) || input < 8 || input > 128) {
            alert("Please enter a number between 8 and 128 for password length.");
            passwordLengthInput();
        }
        return input;
    };

// Determine the password character class(es) criteria (Capital, Lowercase, Numeric, 
// and special characters) by prompting user for input
    var userCharChoice = function() {
        for (var index = 0; index < userChoice.length; index++) {
            userChoice [index] [1] = confirm("Confirm that you would like to include " + userChoice [index] [0] +  " characters in your password?");
        };
    };

// Generate a random letter Decimal Code
var generateDecCode = function() {
    var value = Math.floor(Math.random() * 94 + 33);
    return value;
    };

// Build the password string by comparing Decimal Codes to the user selected 
// character class(es) and building the password string
var generatePassword = function (passwordLength) {
    // Compare letter code to criteria
    var stringLength = 0;
    var passwordString = "";
    while (stringLength < passwordLength) {
        // Generate a letter code for comparison to criteria
        var decCode = generateDecCode();
        // Generate a letter from Decimal Code and add it to our password string
        if (decCode >= 48 && decCode <= 57 && userChoice [3] [1]) {
            passwordString = passwordString + String.fromCharCode(decCode);
            var stringLength = stringLength + 1;
        }
        else if (decCode >= 65 && decCode <= 90 && userChoice [1] [1]) {
            passwordString = passwordString + String.fromCharCode(decCode);
            var stringLength = stringLength + 1;
        }
        else if (decCode >= 97 && decCode <= 122 && userChoice [2] [1]) {
            passwordString = passwordString + String.fromCharCode(decCode);
            var stringLength = stringLength + 1;
        }
        else if ((decCode >= 33 && decCode <= 47 || decCode >= 58 && decCode <= 64 || decCode >= 91 && decCode <= 96 || decCode >= 123 && decCode <= 126) && userChoice [0] [1]) {
            passwordString = passwordString + String.fromCharCode(decCode);
            var stringLength = stringLength + 1;
        }
        else {
        };
    };
     // pass a full password string back to the writePassword function
    return passwordString;
};

// Write the password string to the #password input
function writePassword() {  
    var passwordLength = passwordLengthInput();
    // Populate the array userChoice [n] [1] with the user input flags
    userCharChoice ();
    // Check to make sure user chose at least one tranche of characters
    if (userChoice [0] [1] || userChoice [1] [1] || userChoice [2] [1] || userChoice [3] [1]) {
        var password = generatePassword(passwordLength);
        var passwordText = document.querySelector("#password");
        passwordText.value = password;
    }
    else {
        window.alert("You must choose at least one character class in order to generate a password.");
        writePassword();
    }
};
// Initiate the program on click of button by the user
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button for initiation of code
generateBtn.addEventListener("click", writePassword);