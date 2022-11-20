/*const isIntArray = arr => {
    if (!Array.isArray(arr)) {
        return false
    }
    const nums = arr.filter(el => Number.isInteger(el))
    return nums.length === arr.length
}*/

const isIntArray = arr => Array.isArray(arr) && arr.every(Number.isInteger)