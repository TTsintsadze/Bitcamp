function Findlongtext(sentence) {
    const words = sentence.split(' ');
    let longestWord = 0;
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const wordLength = word.length;
        if( wordLength > longestWord){
            longestWord = wordLength;
        }
    }
    return longestWord;
}

const sentence = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
const longestWord = Findlongtext(sentence);
console.log("Longest Word: " + longestWord);

