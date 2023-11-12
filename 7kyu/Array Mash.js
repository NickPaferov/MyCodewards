const arrayMash = (array1, array2) => {
    const res = []
    for (let i = 0; i < array1.length; i++) {
        res.push(array1[i], array2[i])
    }
    return res
}