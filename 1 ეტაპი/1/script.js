// // 1. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// // Sample arguments : 'w3resource.com', 'o'
// // Expected output : 2

// function countOccurrences(str, letter) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str.charAt(i) === letter) {
//         count++;
//       }
//     }
//     return count;
//   }
  
//   const string = 'w3resource.com';
//   const letter = 'o';
//   const occurrences = countOccurrences(string, letter);
//   console.log(occurrences); 
  

// //   2. Write a JavaScript function to apply the Bubble Sort algorithm.
// //   Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// //   Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

// function bubbleSort(arr) {
//     const length = arr.length;
//     for (let i = 0; i < length - 1; i++) {
//       for (let j = 0; j < length - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//           const temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//         }
//       }
//     }
//     return arr;
// }
// const array = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
// const sortedArray = bubbleSort(array);
// console.log(sortedArray);


// // 3. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// // Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// // Expected output : "United States of America"

// function longestCountryName(countryNames) {
//     let longestName = '';
//     for (let i = 0; i < countryNames.length; i++) {
//       if (countryNames[i].length > longestName.length) {
//         longestName = countryNames[i];
//       }
//     }
//     return longestName;
// }
// const countries = ["Australia", "Germany", "United States of America"];
// const longestName = longestCountryName(countries);
// console.log(longestName); 


// // 4. Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
// // Sample array : [1,2,3,4,5]
// // Expected Output : 2,4

// function findSecondLowestAndGreatest(numbers) {
//     const sortedNumbers = numbers.sort(function(a, b) {
//       return a - b;
//     });
//     const secondLowest = sortedNumbers[1];
//     const secondGreatest = sortedNumbers[sortedNumbers.length - 2];
//     return [secondLowest, secondGreatest];
// }
// const numArray = [1, 2, 3, 4, 5];
// const [secondLowest, secondGreatest] = findSecondLowestAndGreatest(numArray);
// console.log(secondLowest, secondGreatest);

// // 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// // Example string : 'the quick brown fox'
// // Expected Output : 'The Quick Brown Fox '

// function capitalizeFirstLetterOfEachWord(str) {
//     const words = str.split(' ');
//     const capitalizedWords = words.map(function(word) {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     });
//     return capitalizedWords.join(' ');
// }
// const sentence = 'the quick brown fox';
// const capitalizedSentence = capitalizeFirstLetterOfEachWord(sentence);
// console.log(capitalizedSentence);

// // 6. Write a JavaScript function that returns a string that has letters in alphabetical order. 
// // Example string : 'webmaster'
// // Expected Output : 'abeemrstw'

// function sortStringAlphabetically(str) {
//     const sortedString = str.split('').sort().join('');
//     return sortedString;
// }
// const word = 'webmaster';
// const sortedWord = sortStringAlphabetically(word);
// console.log(sortedWord); 

// // 7. Write a JavaScript function that generates all combinations of a string. 
// // Example string : 'dog'
// // Expected Output : d,do,dog,o,og,g

// // function generateStringCombinations(str) {
// //     const combinations = [];
// //     for (let i = 0; i < str.length; i++) {
// //       for (let j = i + 1; j <= str.length; j++) {
// //         combinations.push(str.slice(i, j));
// //       }
// //     }
// //     return combinations;
// // }
// // const inputString = 'dog';
// // const stringCombinations = generateStringCombinations(inputString);
// // console.log(stringCombinations);
  
// // 8. Write a JavaScript function to find the first not repeated character.
// // Sample arguments : 'abacddbec'
// // Expected output : 'e'

function findFirstNotRepeatedCharacter(str) {
    const charCount = {};
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (charCount[char] === 1) {
        return char;
      }
    }
    return null; 
}

const inputString = 'abacddbec';
const firstNotRepeatedChar = findFirstNotRepeatedCharacter(inputString);
console.log(firstNotRepeatedChar);
  