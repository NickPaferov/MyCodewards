// const findDup = arr => arr.find(el => arr.indexOf(el) !== arr.lastIndexOf(el))

const findDup = arr => {
    let sortedArr = arr.sort((a, b) => a - b)
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] === sortedArr[i + 1]) {
            return sortedArr[i]
        }
    }
}