const solve = n => {
    for (let i = 1; i < n; i++) {
        if (Math.sqrt(Math.pow(i, 2) + n) % 1 === 0) {
            return Math.pow(i, 2)
        }
    }
    return -1
}