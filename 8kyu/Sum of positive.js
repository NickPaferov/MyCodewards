const positiveSum = (arr) => {
    let sum = 0
    let newArr = arr.filter(n => n > 0)
    for (let i = 0; i < newArr.length; i++) {
        sum += newArr[i]
    }
    return sum
}