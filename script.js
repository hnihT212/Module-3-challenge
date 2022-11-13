// Assignment code here
var generateBtn = document.querySelector("#generate");

var masterArray = []
var lowerCaseArray = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
var upperCaseArray = [...Array(26)].map((_, i) => String.fromCharCode(i + 65));
var numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var specialCharactersArray = ['-', '+', '*', '/', '=', ']', '[', '}', '{', '<', '>', '?', '!', '@', '#', '$', '%', '&', '*']

// Get references to the #generate element

// Write password to the #password input
function writePassword() {
    masterArray = []
    var generatePassword = function (){

        var passwordLength= window.prompt("How long do you want your password? It must be between 8-128 characters")
        if (passwordLength >= 8 && passwordLength <= 128) {
        } else {
            window.alert('Please eneter a value between 8-128 characters');
            return;
        }
        var lowerCase = window.confirm('Would you like lower case characters in your password?');
        if (lowerCase) {
            masterArray = masterArray.concat(lowerCaseArray);
        }
        var upperCase = window.confirm('Would you like uppper case characters in your password?');
        if (upperCase) {
            masterArray = masterArray.concat(upperCaseArray);
        }
        var number = window.confirm('Would you like numbers in your password?');
        if (number) {
            masterArray = masterArray.concat(numberArray);
        }
        var specialCharacters = window.confirm('Would you like special characters in your password?');
        if (specialCharacters) {
            masterArray = masterArray.concat(specialCharactersArray);
        }
        //
        if (masterArray.length <= 0) {
            window.alert('Please choose at least one of the following types of characters for your password');
            return;
        }

        var passwordTest = function () {
            var newPassword = ''
            for (i = 0; i < passwordLength; i++) {
                var randomNumber = math.floor(Math.random() * masterArray.length);
                newPassword = newPassword + masterArray[randomNumber];
            }
            //
            if (lowerCase) {
                i = 0;
                result = false;
                do {
                    result = lowerCaseArray.includes(newPassword[i])
                    i = i + 1
                } while (result === false && i < newPassword.length);
                if (result === false) {
                    passwordTest()
                }
            }
            if (upperCase) {
                i = 0;
                result = false;
                do {
                    result = upperCaseArray.includes(newPassword[i])
                    i = i + 1
                } while (result === false && i < newPassword.length);
                if (result === false) {
                    passwordTest()
                }
            }
            if (number) {
                i = 0;
                result = false;
                do {
                    result = numberArray.includes(newPassword[i])
                    i = i + 1
                } while (result === false && i < newPassword.length);
                if (result === false) {
                    passwordTest()
                }
            }
            if (specialCharacters) {
                i = 0;
                result = false;
                do {
                    result = specialCharactersArray.includes(newPassword[i])
                    i = i + 1
                } while (result === false && i < newPassword.length);
                if (result === false) {
                    passwordTest()
                }
            }
        return newPassword;
        }
        return passwordTest();
    }   

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
