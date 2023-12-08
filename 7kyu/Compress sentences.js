const compress = sentence => {
    const words = sentence.toLowerCase().split(" ")
    const uniqWords = Array.from(new Set(words))
    return words.map(word => uniqWords.indexOf(word)).join("")
}