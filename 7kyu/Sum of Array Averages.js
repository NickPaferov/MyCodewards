const sumAverage = arr => {
    let tempArr = arr.map(subArr => subArr.reduce((a, b) => a + b, 0) / subArr.length)
    return Math.floor(tempArr.reduce((a, b) => a + b, 0))
}