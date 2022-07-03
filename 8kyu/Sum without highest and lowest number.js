const sumArray = array => {
    if (!Array.isArray(array) || array.length < 3) {
        return 0
    } else {
        return array.sort((a, b) => a - b).slice(1, -1).reduce((acc, curr) => acc + curr, 0)
    }
}