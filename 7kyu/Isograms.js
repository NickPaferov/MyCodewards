const isIsogram = str => {
    let arr = str.toLowerCase().split("")
    let result = 1
    for (let i = 0; i < str.length; i++) {
        arr.shift()
        if (arr.includes(str[i].toLowerCase())) {
            result = 0
        }
    }
    return !!result
}