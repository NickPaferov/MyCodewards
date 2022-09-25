const minSum = arr => {
    let sortedArr = [...arr].sort((a, b) => a - b)
    let sumOfProds = 0
    while (sortedArr.length) {
        sumOfProds += sortedArr.shift() * sortedArr.pop()
    }
    return sumOfProds
}