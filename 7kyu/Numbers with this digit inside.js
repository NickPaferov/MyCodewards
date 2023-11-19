const numbersWithDigitInside = (x, d) => {
    const nums = []
    for (let i = 1; i <= x; i++) {
        if (String(i).includes(d)) {
            nums.push(i)
        }
    }
    return [
        nums.length,
        nums.reduce((acc, curr) => acc + curr, 0),
        nums.length ? nums.reduce((acc, curr) => acc * curr, 1) : 0
    ]
}