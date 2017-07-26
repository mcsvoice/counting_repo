var aString = process.argv.slice(2);
var regexAlphabet = /[A-Z]/gi;
var matchedStuff = aString.match(regexAlphabet);

// console.log(aString);

function countLetters(aString){
  matchedStuff = aString.match(regexAlphabet);
}

console.log(countLetters(aString));



//my function is CountLetters
//my function accepts 1 string of letters
//my function returns 1 string of letters