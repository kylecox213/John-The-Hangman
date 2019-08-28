const Letter = require("./letter.js");

let Word = function (string) {
    this.letterArr = [];
    this.wordString = string;
    for (let s = 0; s < string.length; s++) {
        let newLetter = new Letter(string[s]);
        this.letterArr.push(newLetter);
    };

    this.render = function () {
        return this.letterArr.join(" ");
    };

    this.userGuess = function (letter) {
        for (let l = 0; l < letterArr.length; l++) {
            this.letterArr[l].letterReveal(letter);
        }
    }
};

module.exports = Word;
