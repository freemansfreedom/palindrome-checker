// Pulling the basic elements needed
const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

const removeSpecialCharacters = (str) => {
    const regex = /[^a-zA-Z0-9]/g;
    return str.replace(regex, '');
}

const checkPalindrome = () => {
    if(textInput.value === '') {
        alert("Error");
    }
    const cleanedText = removeSpecialCharacters(textInput.value).toLowerCase();
    result.innerText = cleanedText;
    // get inputted text
    // check if blank, and error
    // remove symbols and blank spaces
    // check single letter => Palindrome

}

// Assign functions to the elements
checkButton.addEventListener('click', checkPalindrome);


