function reversewords (sentence) {
    var words = sentence.split(" ");
    var reversewords = words.reverse();
    var reversedSentence = reversewords.join(" ");
    return reversedSentence;
}

var mytext = "Hello, Words!";
var reversedSentence = reversewords(mytext);
console.log(reversedSentence);