const findMissing = (arr1, arr2) => {
    const getSum = (arr) => {
        return arr.reduce((acc, curr) => acc + curr, 0)
    }
    return getSum(arr1) - getSum(arr2)
}