const squares = (x, n) => {
    const arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(x)
        x *= x
    }
    return arr
}