const differenceOfSquares = n => {
    let nums = []
    for (let i = 1; i <= n; i++) {
        nums.push(i)
    }
    let squareOfSum = Math.pow(nums.reduce((a, b) => a + b, 0), 2)
    let sumOfSquares = nums.map(n => Math.pow(n, 2)).reduce((a, b) => a + b, 0)
    return squareOfSum - sumOfSquares
}