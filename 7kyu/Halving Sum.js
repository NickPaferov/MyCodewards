const halvingSum = n => {
    let sum = n
    for (let i = 2; n / i >= 1; i *= 2) {
        sum += Math.floor(n / i)
    }
    return sum
}