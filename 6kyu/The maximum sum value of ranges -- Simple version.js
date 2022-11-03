/*const maxSum = (arr, range) => {
    let max = -Infinity
    for (let i = 0; i < range.length; i++) {
        let sum = 0
        for (let j = range[i][0]; j <= range[i][1]; j++) {
            sum += arr[j]
        }
        if (sum > max) {
            max = sum
        }
    }
    return max
}*/

const maxSum = (arr, range) => Math.max(...range.map((el) => arr.slice(el[0], el[1] + 1).reduce((a, b) => a + b, 0)))