const common = (a, b, c) => {
    let sum = 0
    for (let el of a) {
        if (b.includes(el) && c.includes(el)) {
            sum += el
            b.splice(b.indexOf(el), 1)
            c.splice(c.indexOf(el), 1)
        }
    }
    return sum
}