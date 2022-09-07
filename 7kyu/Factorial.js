const factorial = n => {
    if (n < 0 || n > 12) {
        throw new RangeError()
    }
    return n > 0 ? n * factorial(n - 1) : 1
}