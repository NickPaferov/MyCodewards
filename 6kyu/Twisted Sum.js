const twistedSum = n => {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += (i < 10) ? i : String(i).split("").reduce((a, b) => Number(a) + Number(b), 0)
    }
    return sum
}