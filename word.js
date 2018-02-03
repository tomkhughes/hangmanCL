// Word.js: Contains a constructor, Word that depends on the Letter constructor. 
//This is used to create an object representing the current word the user is attempting to guess. 

//That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word

// A function that returns a string representing the word. 
// This should call the function on each letter object (the first function defined in Letter.js) 
// that displays the character or an underscore and concatenate those together.

// A function that takes a character as an argument and calls the guess function on each letter object 
// (the second function defined in Letter.js)





// var Word = function(word) {
//      this.word = word
//     // An array of new Letter objects representing the letters of the underlying word
//     this.letterArray = []
   
//     this.makeLetterArray = function() {
//         for (var i = 0; i < this.word.length; i++) {
//             var newLetter = new Letter(this.word[i]);
//             this.letterArray.push(newLetter);
//             // console.log(this.letterArray)
//         }
//     }
//     //PRINTS OUT THE UNDERSCORES FOR EACH LETTER SO THE USER CAN SEE THE LETTER SPACES
//     this.printUnderscores = function() {
//         var wordPrint = ' ';
//         for (var i = 0; i < this.letterArray.length; i++) {
//             wordPrint += this.letterArray[i].showLetter();   
//         }
//         return wordPrint;
//         console.log(wordPrint);
//     }
//     // A function that takes a character as an argument and calls the guess function on each letter object 
//     // (the second function defined in Letter.js)
//     this.guessChecker = function() {

//     }

// }; 
// Require Letter contructor from letter.js
var Letter = require('./letter.js');



var Word = function(currentWord) {
    this.currentWord = currentWord.split('');
     // console.log(this.currentWord)

    var underscores = []
    var letterArray = []

    this.createBlankWord = function() {
        //populate the collection above with new Letter objects
        for (var i = 0; i < this.currentWord.length; i++) {
            var newLetter = new Letter(this.currentWord[i]);
            console.log('THIS THISTHIS '+ (currentWord[i]))
            newLetter.push(letterArray);
        }
    }
        for (var i = 0; i < this.currentWord.length; i++) {
        underscores.push(' _ ')
    }
        var blankWord = underscores.join('');
        console.log(blankWord);
    // this.guessChecker = function(){

    // }

}

 var newWord = new Word('HELLO');
// console.log('createBlankWord is running ' + newWord);

module.exports = Word;


