const avgArray = arr => {
    const res = []
    for (let i = 0; i < arr[0].length; i++) {
        let sum = 0
        for (let subArr of arr) {
            sum += subArr[i]
        }
        res.push(sum / arr.length)
    }
    return res
}