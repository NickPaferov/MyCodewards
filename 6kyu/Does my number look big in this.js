const narcissistic = value => {
    let nums = String(value).split("").map(Number)
    return nums.map(n => Math.pow(n, nums.length)).reduce((a, b) => a + b) === value
}