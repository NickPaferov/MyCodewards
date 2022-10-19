function digitalRoot(n) {
    if (n < 10) {
        return n
    } else {
        return digitalRoot(String(n).split("").map(Number).reduce((a, b) => a + b, 0))
    }
}