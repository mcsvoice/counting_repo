var aString = process.argv.slice(2).toString();
var regexAlphabet = /[A-Z]/gi;
var mLetters = aString.match(regexAlphabet);

var theObject = {};

for (var i = 0; i < (mLetters.length); i++) {

    if (theObject[mLetters[i]]) {
      theObject[mLetters[i]] = theObject[mLetters[i]] + 1;
    } else {
      theObject[mLetters[i]] = 1;
    }
}

console.log(theObject);


// my object contains "A : #" currently
// I need the object to contain another key value associated with the first key value
// so A : 1 needs an APos : [1], the second key contains