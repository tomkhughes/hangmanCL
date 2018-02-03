var Word = require('./word.js');


//  The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it
var randWord;
var wordBank = ['ZEBRA', 'LION','TIGER', 'BEAR'];

randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log('this is randWord :' +randWord)

var startGame = function(){
	console.log('Guess a letter: \n') 
	console.log()
	for(var i = 0; i < randWord.length; i++) {
	var currentWord = new Word(randWord);
 	console.log('CURRENT WORD: ' + currentWord);

  }
}

startGame();

// Prompts the user for each guess and keeps track of the user's remaining guesses

// var inquirer = require("inquirer");

// var startGame = function() {
// 	inquirer.prompt([
//       {
//         name: "wordtoGuess",
//         message: "Guess a letter:"
//       }, {
//         name: "position",
//         message: "What is your current position?"
//       }, {
//         name: "age",
//         message: "How old are you?"
//       }, {
//         name: "language",
//         message: "What is your favorite programming language?"
//       }
//     ])
// }
