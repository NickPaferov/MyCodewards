const cubeOdd = arr => {
    let arrNums = arr.filter(el => Number.isInteger(el))
    if (arrNums.length === arr.length) {
        return arr.filter(n => n % 2).reduce((acc, curr) => acc + Math.pow(curr, 3), 0)
    } else {
        return undefined
    }
}