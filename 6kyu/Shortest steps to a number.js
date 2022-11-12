const shortestStepsToNum = num => {
    let n = num
    let steps = 0
    while (n > 1) {
        if (n % 2 === 0 && (n / 2 - 1) !== 0) {
            n = n / 2
            steps++
        } else {
            n = n - 1
            steps++
        }
    }
    return steps
}