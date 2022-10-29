const getLengthOfMissingArray = (arrayOfArrays) => {
    if (!Array.isArray(arrayOfArrays) || !arrayOfArrays.length) {
        return 0
    }
    let arr = arrayOfArrays.map(n => n ? n.length : 0).sort((a, b) => a - b)
    if (arr.includes(0)) {
        return 0
    }
    for (let i = 0; i < arr.length - 1; i++) {
        if ((arr[i + 1] - arr[i]) !== 1) {
            return arr[i] + 1
        }
    }
}