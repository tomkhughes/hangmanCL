// Letter constructor
var Letter = function(letter) {
// A string value to store the underlying character for the letter
  this.letter = letter;
//A boolean value that stores whether that letter has been guessed yet
  this.guessed = false;
// A function that returns the underlying character if the letter has been guessed, 
// or a placeholder (like an underscore) if the letter has not been guessed
  // this.showLetter = function(){
  //   if (this.guessed === false ){
  //     return ' _ ';
  //   } else {
  //     return this.letter;
  //   }
  // }
  // A function that takes a character as an argument and checks it against the underlying character, 
  // updating the stored boolean value to true if it was guessed correctly
};
// Makes Letter() available in word.js

Letter.prototype.showLetter = function(){
    if (this.guessed === false ){
      return ' _ ';
    } else {
      return this.letter;
    }
  
}

 Letter.prototype.letterChecker = function() {
    var character = '';
    if(this.guessed === true) {
      character = this.letter;
    } else {
      character = ' _ ';

      return character
    }
  }
module.exports = Letter;


  
  var a = new Letter("a");
  console.log(a.showLetter());
  console.log(a.letterChecker());