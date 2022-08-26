/*const removeSmallest = numbers => {
    let arr = [...numbers]
    let min = Math.min(...arr)
    arr.splice(arr.indexOf(min), 1)
    return arr
}*/

const removeSmallest = numbers => numbers.filter((n, i) => i !== numbers.indexOf(Math.min(...numbers)))