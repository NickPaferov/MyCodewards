const insideOut = str => {
    const arr = str.split(" ")
    return arr.map(word => {
        let leftPart = word.split("").slice(0, Math.floor(word.length / 2)).reverse().join("")
        let middlePart = word[Math.floor(word.length / 2)]
        let rightPart = word.split("").slice(Math.ceil(word.length / 2)).reverse().join("")
        return word.length % 2 ? leftPart + middlePart + rightPart : leftPart + rightPart
    }).join(" ")
}