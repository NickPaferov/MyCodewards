const isHappy = n => {
    const arr = []
    while (n !== 1 && arr.indexOf(n) === -1) {
        arr.push(n)
        n = String(n).split("").reduce((acc, curr) => acc + Number(curr) ** 2, 0)
    }
    return n === 1
}