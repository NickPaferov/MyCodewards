const findDivsCount = (num) => {
    let countOfDivs = 0
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            countOfDivs++
            if (num / i !== i) countOfDivs++
        }
    }
    return countOfDivs
}

const countPairsInt = (diff, nMax) => {
    let pairs = 0
    for (let i = 1; i < nMax - diff; i++) {
        if (findDivsCount(i) === findDivsCount(i + diff)) {
            pairs++
        }
    }
    return pairs
}