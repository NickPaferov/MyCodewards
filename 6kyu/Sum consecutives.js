const sumConsecutives = arr => {
    const res = []
    let el = 0
    for (let i = 0; i < arr.length; i++) {
        el += arr[i]
        if (arr[i] !== arr[i + 1]) {
            res.push(el)
            el = 0
        }
    }
    return res
}