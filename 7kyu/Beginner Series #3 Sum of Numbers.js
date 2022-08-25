const getSum = (a, b) => {
    let min = Math.min(a, b)
    let max = Math.max(a, b)
    let sum = 0
    if (min === max) {
        sum = min
    } else {
        for (let i = min; i <= max; i++) {
            sum += i
        }
    }
    return sum
}