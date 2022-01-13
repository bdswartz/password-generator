//   Assign global variables
var passwordString =  ""

var validateUserInput = function(userInput) {
    if (userInput === "y" || userInput === "n") {
        return true;
    }
    else {
        return false;
    };
};

// Determine the password criteria (length, Capital, Lowercase, Numeric, 
// and special characters) by prompting user for input

    var passwordLengthInput = function() {
        var input = window.prompt("How long would you like your password to be (minimum 8 characters and maximum of 128 characters).")
        input = parseInt(input);
        if (isNaN(input) || input < 8 || input > 128) {
            window.alert("Please enter a number between 8 and 128 for password length.")
            return passwordLengthInput();
        }
        else {
            return input;
        };
    };

    var isSpecialCharInput = function() {
        var input = window.prompt("Would you like to include special characters in your password? (type 'y' for yes or 'n' for no)");
        input = input.toLowerCase();
        var specialCharOutput = validateUserInput(input)
        if (specialCharOutput) {
            if (input === 'y') {
                return true;
            }
            else {
                return false;
            };
        }
        else {
            window.alert("Please enter y for yes or n for no.");
            return isSpecialCharInput();
        }
    };

    var isUpperCaseInput = function() {
        var input = window.prompt("Would you like to include UPPERCASE letters in your password? (type 'y' for yes or 'n' for no)")
        input = input.toLowerCase();
        if (validateUserInput(input)) {
            if (input === 'y') {
                return true;
            }
            else {
                return false;
            };
        }
        else {
            window.alert("Please enter y for yes or n for no.");
            return isUpperCaseInput();
        };
    };
    var isLowerCaseInput = function() {
        input = window.prompt("Would you like to include lowercase letters in your password? (type 'y' for yes or 'n' for no)")
        input = input.toLowerCase();
        if (validateUserInput(input)) {
            if (input === 'y') {
                return true;
            }
            else {
                return false;
            };
        }
        else {
            window.alert("Please enter y for yes or n for no.");
            return isLowerCaseInput();
        };
    };
    var isNumericInput = function() {
        input = window.prompt("Would you like to include numeric characters (0-9) in you password? (type 'y' for yes or 'n' for no)")
        input = input.toLowerCase();
        if (validateUserInput(input)) {
            if (input === 'y') {
                return true;
            }
            else {
                return false;
            };
        }
        else {
            window.alert("Please enter y for yes or n for no.");
            return isNumericInput();
        };
    };

// Generate a random letter Dec Code
var generateDecCode = function() {
    var value = Math.floor(Math.random() * 94 + 33);
    return value;
    };

// Build the password string by generating random letters, comparing to
// the user criteria and building the password string
var generatePassword = function (passwordLength, specialCharFlag, upperCaseFlag, 
    lowerCaseFlag, numericFlag) {
    // Compare letter code to criteria
    var stringLength = 0;
    var passwordString = "";
    console.log(passwordLength)
    console.log(typeof(specialCharFlag));
    console.log(typeof(upperCaseFlag));
    console.log(typeof(lowerCaseFlag));
    console.log(typeof(numericFlag));
    while (stringLength < passwordLength) {
        // Generate a letter code for comparison to criteria
        var decCode = generateDecCode();
        // Generate a letter from Decimal Code and add it to our password string
        console.log(decCode);
        if (decCode >= 48 && decCode <= 57 && numericFlag) {
            passwordString = passwordString + String.fromCharCode(decCode);
            var stringLength = stringLength + 1;
            console.log(passwordString);
        }
        else if (decCode >= 65 && decCode <= 90 && upperCaseFlag) {
            passwordString = passwordString + String.fromCharCode(decCode);
            var stringLength = stringLength + 1;
            console.log(passwordString);
        }
        else if (decCode >= 97 && decCode <= 122 && lowerCaseFlag) {
            passwordString = passwordString + String.fromCharCode(decCode);
            var stringLength = stringLength + 1;
            console.log(passwordString);
        }
        else if ((decCode >= 33 && decCode <= 47 || decCode >= 58 && decCode <= 64 || decCode >= 91 && decCode <= 96 || decCode >= 123 && decCode <= 126) && specialCharFlag) {
            passwordString = passwordString + String.fromCharCode(decCode);
            var stringLength = stringLength + 1;
            console.log(passwordString);
        }
        else {
            console.log("continue")
        };
    };
     // pass a full password string back to the writePassword function
    return passwordString;
};


// Write the password string to the #password input
function writePassword() {
    var passwordLength = passwordLengthInput();
    console.log(passwordLength);
    var specialCharFlag = isSpecialCharInput();
    console.log(specialCharFlag);
    var upperCaseFlag = isUpperCaseInput();
    console.log(upperCaseFlag);
    var lowerCaseFlag = isLowerCaseInput();
    console.log(lowerCaseFlag);
    var numericFlag = isNumericInput();
    console.log(numericFlag);
    var password = generatePassword(passwordLength, specialCharFlag, upperCaseFlag, 
        lowerCaseFlag, numericFlag);
    console.log(password);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

}

// Initiate the program on click of button by the user
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button for initiation of code
generateBtn.addEventListener("click", writePassword);