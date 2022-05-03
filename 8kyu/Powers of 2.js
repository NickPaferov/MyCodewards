// const powersOfTwo = n => [...Array(n + 1)].map((_, i) => 2 ** i)

const powersOfTwo = n => {
    let arr = []
    for (let i = 0; i <= n; i++) {
        arr.push(Math.pow(2, i))
    }
    return arr
}