const mergeArrays = (a, b) => {
    const arr = []
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
        if (a[i]) {
            arr.push(a[i])
        }
        if (b[i]) {
            arr.push(b[i])
        }
    }
    return arr
}