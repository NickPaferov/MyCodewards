const total = arr => {
    let res = 0
    let divisors = []
    for (let i = 2; i < arr.length; i++) {
        for (let j = 2; j <= i; j++) {
            if (i % j === 0) {
                divisors.push(j)
            }
        }
        if (divisors.length === 1) {
            res += arr[i]
        }
        divisors = []
    }
    return res
}