/*const getMiddle = s => {
    let middle = ""
    if (s.length % 2 === 0) {
        middle += s[s.length / 2 - 1] + s[s.length / 2]
    } else {
        middle += s[Math.floor(s.length / 2)]
    }
    return middle
}*/

const getMiddle = s => {
    let middle = Math.floor(s.length / 2)
    return s.length % 2 === 0
        ? s.slice(middle - 1, middle + 1)
        : s.slice(middle, middle + 1)
}