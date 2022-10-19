const toCamelCase = str => {
    let arr = str.split(/_|-/)
    let res = arr[0]
    for (let i = 1; i < arr.length; i++) {
        res = res + arr[i][0].toUpperCase() + arr[i].slice(1)
    }
    return res
}