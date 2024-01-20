const splitInParts = (str, partLength) => {
    const arr = []
    const letters = str.split("")
    while (letters.length) {
        let el = letters.splice(0, partLength).join("")
        arr.push(el)
    }
    return arr.join(" ")
}