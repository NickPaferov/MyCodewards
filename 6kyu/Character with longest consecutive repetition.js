const longestRepetition = str => {
    const arr = ["", 0]
    let repeat = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            repeat++
        } else {
            if (repeat + 1 > arr[1]) {
                arr[0] = str[i]
                arr[1] = repeat + 1
            }
            repeat = 0
        }
    }
    return arr
}