const selReverse = (arr, lng) => {
    if (!lng) return arr
    const res = []
    for (let i = 0; i < arr.length; i += lng) {
        res.push(...arr.slice(i, i + lng).reverse())
    }
    return res
}