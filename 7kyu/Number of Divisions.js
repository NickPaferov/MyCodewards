const divisions = (n, divisor) => {
    let i = 0
    while (n >= divisor) {
        n = Math.floor(n / divisor)
        i++
    }
    return i
}