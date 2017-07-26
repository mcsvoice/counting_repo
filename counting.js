var aString = process.argv.slice(2).toString();
var regexAlphabet = /[A-Z]/gi;
var matchedLetters = aString.match(regexAlphabet);

var theObject = {};

//console.log(aString);
//console.log(matchedLetters);
//console.log(letterCount);

for (var i = 0; i < (matchedLetters.length); i++) {

    if (theObject[matchedLetters[i]]) {
      theObject[matchedLetters[i]] = theObject[matchedLetters[i]] + 1;
    } else {
      theObject[matchedLetters[i]] = 1;
    }
}

console.log(theObject);

// function countLetters(aString){

// }

// I need to create an object to hold all my data
// the objects have a "letter" value in them for the letter I just saw in the array
  // "name" = array[i]
// the objects have a "count" value in them for each time that letter was seen
  // "count" = count + 1
// I then have to return the "letter" and "count" value in a specific pattern when the loop is finished.

// var obj = {};

// obj.first = 1;
// obj['second-hyphen'] = 2;

// var key = 'third';

// obj.key = 3;
// obj[key] = 3;


// {
//   first: 1,
//   second: 2,
//   key: 3,
//   third: 3
// }