const findSequences = n => {
    let res = []
    for (let i = 1; i <= n; i++) {
        let temp = []
        let sum = 0
        let el = i
        while (sum <= n) {
            sum += el
            temp.push(el)
            el++
            if (sum === n && temp.length > 1) {
                res.push(temp)
                break
            }
        }
    }
    return res.reverse()
}