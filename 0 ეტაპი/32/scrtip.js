function checkPalindrome(string) {
    const reverseString = string.split('').reverse().join('');
    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}

const string = prompt('Enter a string: ');
//text eye
checkPalindrome(string);