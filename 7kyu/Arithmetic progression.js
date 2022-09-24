const arithmeticSequenceElements = (a, d, n) => {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(a + d * i)
    }
    return arr.join(", ")
}