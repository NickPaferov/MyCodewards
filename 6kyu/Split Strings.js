const solution = str => {
    let res = []
    let arr = str.split("")
    if (arr.length % 2) {
        arr.push("_")
    }
    while (arr.length) {
        res.push(arr.splice(0, 2).join(""))
    }
    return res
}