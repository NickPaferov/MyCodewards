const countCorrectCharacters = (correctWord, guess) => {
    if (correctWord.length !== guess.length) {
        throw new Error("The lengths don't match")
    }
    let matches = 0
    for (let i = 0; i < correctWord.length; i++) {
        if (correctWord[i] === guess[i]) {
            matches++
        }
    }
    return matches
}