const arrAdder = (arr) => {
    let sentense = ""
    for (let i = 0; i < arr[0].length; i++) {
        for (let j = 0; j < arr.length; j++) {
            sentense += arr[j][i]
        }
        sentense += " "
    }
    return sentense.trim()
}