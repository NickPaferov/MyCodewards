/*const modifyMultiply = (str,loc,num) => {
    let res = []
    let word = str.split(" ")[loc]
    for (let i = 0; i < num; i++) {
        res.push(word)
    }
    return res.join("-")
}*/

const modifyMultiply = (str,loc,num) => Array(num).fill(str.split(" ")[loc]).join("-")