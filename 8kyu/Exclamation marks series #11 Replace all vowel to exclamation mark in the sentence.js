/*const replace = s => {
    const vowels = ["a", "e", "i", "o", "u"]
    let newStr = ""
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i].toLowerCase())) {
            newStr += "!"
        } else {
            newStr += s[i]
        }
    }
    return newStr
}*/

const replace = s => s.replace(/[aeoiu]/ig, "!")