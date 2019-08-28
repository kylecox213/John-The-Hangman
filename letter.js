
let Letter = function (character) {
    this.char = character.toUpperCase;
    this.guessed = false;
    this.toString = function () {
        if (this.guessed) {
            return this.char;
        }
        else {
            return "_";
        }

    };
    
    this.letterReveal = function (guess) {
        if (guess.toUpperCase() === this.char) {
            this.guessed = true;
        }
    }

};

module.exports = Letter;



// class Character {
//     constructor(character) {
//         this.character = character;
//         this.userGuess = false;
//         this.reveal = function (character) {
//             if (this.userGuess) {
//                 return character
//             }
//             else if (this.userGuess === false) {
//                 return "_";
//             }
//         };
//     }
// }