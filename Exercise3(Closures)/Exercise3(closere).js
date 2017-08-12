function makePassword(password) {
    return function guess(passwordGuess) {
        return (passwordGuess === password);
    };
}

var tryGuess = makePassword("secret");
console.log("Guessing 'nope': " + tryGuess("nope"));
console.log("Guessing 'secret': " + tryGuess("secret"));