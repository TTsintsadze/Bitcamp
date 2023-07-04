function capitaliz(sentence) {
    var words = sentence.split(" ");
    var capitalizedWords = words.map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    var capitalizedSentence = capitalizedWords.join(" ");
    return capitalizedSentence;
}
var newtext = prompt("შეიყვანეთ წინადადება:");
var capitalizedResult = capitaliz(newtext);
console.log("შედეგი: " + capitalizedResult);