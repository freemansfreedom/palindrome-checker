// Pulling the basic elements needed
const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

const removeSpecialCharacters = (str) => {
    const regex = /[^a-zA-Z0-9]/g;
    return str.replace(regex, '');
}

const isPalindrome = (word) => {
    if(word.length === 1 || word.length === 0){
        return true;
    } else if (word === word.split("").reverse().join("")) {
        return true;
    }
    return false;
}


const checkPalindrome = () => {
    if(textInput.value === '') {
        alert("Please input a value");
    }
    const cleanedText = removeSpecialCharacters(textInput.value).toLowerCase();
    if (isPalindrome(cleanedText)) {
        result.innerText = `${textInput.value} is a palindrome`; 
    } else {
        result.innerText = `${textInput.value} is not a palindrome`; 
    }

}

// Assign functions to the elements
checkButton.addEventListener('click', checkPalindrome);


