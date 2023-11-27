const reverseSlice = str => {
    const res = []
    const temp = str.split("").reverse().join("")
    for (let i = 0; i < temp.length; i++) {
        res.push(temp.slice(i))
    }
    return res
}