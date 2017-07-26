var aString = process.argv.slice(2).toString();
var regexAlphabet = /[A-Z]/gi;
var mLetters = aString.match(regexAlphabet);

var theObject = {};

for (var i = 0; i < (mLetters.length); i++) {

    if (theObject[mLetters[i]]) {
      theObject[mLetters[i]].push(i)
    } else {
      theObject[mLetters[i]] = [i]
    }

}

console.log(theObject);


// I need to make theObject[mLetters[i]] = an array with the position of the letter


// var obj = {};

// obj.first = 1;
// obj['second-hyphen'] = 2;

// var key = 'third';

// obj.key = 3;
// obj[key] = 3;


// {
//   first: ['1']
//   second: 2,
//   key: 3,
//   third: 3
// }