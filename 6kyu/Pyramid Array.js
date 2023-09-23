const pyramid = n => {
    const arr = []
    for (let i = 1; i <= n; i++) {
        let subArr = []
        for (let j = 1; j <= i; j++) {
            subArr.push(1)
        }
        arr.push(subArr)
    }
    return arr
}