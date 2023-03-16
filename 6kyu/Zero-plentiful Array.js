const zeroPlentiful = arr => {
    const res = []
    let i = 0
    let count = 0
    while (i < arr.length) {
        while (arr[i] === 0) {
            count++
            i++
        }
        if (count >= 1) {
            res.push(count)
        }
        count = 0
        i++
    }
    return res.every(el => el >= 4) ? res.length : 0
}