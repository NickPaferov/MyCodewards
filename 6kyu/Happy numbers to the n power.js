const isHappy = (n, pow) => {
    const res = []
    while (!res.includes(n) && n !== 1) {
        res.push(n)
        n = n.toString().split("").reduce((acc, curr) => acc + (+curr) ** pow, 0)
    }
    res.push(n)
    return res.includes(1) ? [1] : res.slice(res.indexOf(n))
}