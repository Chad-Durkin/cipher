var firstSentence = prompt("Enter a sentence that you want ciphered!");
alert(firstSentence + ", Is this your sentence?");

var beginning = firstSentence.search(/^[a-z]/);
var end = firstSentence.search(/[a-z]$/i);
var newSentence = firstSentence.charAt(beginning).toUpperCase() + firstSentence.slice(1);
// newSentence = firstSentence.chatAt(end).toUpperCase() + firstSentence.slice(end-1);

// firstSentence.replace(/^[a-z]/i, firstLetter);
console.log(newSentence);
console.log(firstSentence);
// console.log(beginning);
// console.log(end);
