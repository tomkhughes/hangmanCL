// Word.js: Contains a constructor, Word that depends on the Letter constructor. 
//This is used to create an object representing the current word the user is attempting to guess. 

//That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word

// A function that returns a string representing the word. 
// This should call the function on each letter object (the first function defined in Letter.js) 
// that displays the character or an underscore and concatenate those together.

// A function that takes a character as an argument and calls the guess function on each letter object 
// (the second function defined in Letter.js)

// Require Letter contructor from letter.js
var Letter = require('./letter.js');



var Word = function(currentWord) {
    this.currentWord = currentWord//.split('');
    console.log(this.currentWord)    
}

Word.prototype.createBlankWord = function() {
        var letterArray = [];
        //populate the collection above with new Letter objects
        for (var i = 0; i < this.currentWord.length; i++) {
            var newLetter = new Letter(this.currentWord[i]);
            var createLetter = newLetter.showLetter();
            letterArray.push(createLetter);
            // console.log(letterArray.join(' '));
        }
        Word.prototype.createUnderscores = function() {
            var underscores = ' ';
            for (var i = 0; i < letterArray.length; i++) {
                underscores += letterArray[i];   
            }
            console.log('underscores ' + underscores);
    }    
}

Word.prototype.guessChecker = function() {
    for (var i = 0; i < this.currentWord.length; i++) {
            var guessChecker1 = new Letter(this.currentWord[i]);
            guessChecker1.letterChecker();
            console.log(guessChecker1);
           
        }
}



var newWord = new Word('HELLO');
newWord.createBlankWord();
newWord.createUnderscores();
newWord.guessChecker();

module.exports = Word;

// var letterArray = []

    // for (var i = 0; i < this.currentWord.length; i++) {
    //         underscores.push(' _ ')
    //     }
    // var blankWord = underscores.join('');
    // console.log(blankWord);
    // this.createBlankWord = function() {
    //     //populate the collection above with new Letter objects
    //     for (var i = 0; i < this.length; i++) {
    //         var newLetter = new Letter(this.currentWord[i]);
    //         newLetter.push(letterArray);
    //         console.log('letter array: ' + letterArray);
    //     }
    // }
