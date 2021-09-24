// Created Array of possible character choices
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Created button to generate password
const generateBtn = document.querySelector('#generate')

// Created function for passowrd questions
function questions() {
    let validLength = false;
    let passwordLength;
    do {
        passwordLength = prompt('Please enter the length of your password');

        if (isNaN(passwordLength) || parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128) {
            alert('Please enter a password length between 8 and 128 characters');
        } else {
            validLength = true
        }
    }
    while (!validLength);

    let validCharacter = false;
    let questionInput;
    do {
        let askNumbers = confirm("Would you like to include numbers in your password?");
        let askLowerCase = confirm("Would you like to include lower case letters in your password?");
        let askUpperCase = confirm("Would you like to include upper case letters in your password?");
        let askSpecial = confirm("Would you like to include special characters in your password?");
        questionInput = {
            length: passwordLength,
            usesNumbers: askNumbers,
            usesLowerCase: askLowerCase,
            usesUpperCase: askUpperCase,
            usesSpecial: askSpecial
        }
        if ((!askNumbers) && (!askLowerCase) && (!askUpperCase) && (!askSpecial)) {
            alert("Must choose at least one character type.");
        } else {
            validCharacter = true
        }
    }
    while (!validCharacter);
    return questionInput;
}