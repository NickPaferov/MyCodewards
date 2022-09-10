const mxdiflg = (a1, a2) => {
    if (a1.length === 0 || a2.length === 0) {
        return -1
    }
    let arrL1 = a1.map(el => el.length)
    let arrL2 = a2.map(el => el.length)
    return Math.max(Math.max(...arrL1) - Math.min(...arrL2), Math.max(...arrL2) - Math.min(...arrL1))
}