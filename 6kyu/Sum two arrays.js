const addArrays = (array1, array2) => {
    if (!array1.length && !array2.length) return []
    if (array1.length && !array2.length) return array1
    if (!array1.length && array2.length) return array2
    const arrayToNumber1 = parseInt(array1.join(""))
    const arrayToNumber2 = parseInt(array2.join(""))
    const sum = arrayToNumber1 + arrayToNumber2
    const arr = sum.toString().split("")
    if (arr[0] === "-") {
        arr[1] = arr[0] + arr[1]
        arr.shift()
    }
    return arr.map(Number)
}