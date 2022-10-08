const sumTriangularNumbers = n => {
    let nums = []
    let num = 0
    if (n < 1) {
        return 0
    }
    for (let i = 1; i <= n; i++) {
        num += i
        nums.push(num)
    }
    return nums.reduce((a, b) => a + b)
}