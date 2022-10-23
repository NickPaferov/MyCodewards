/*const uniqueInOrder = iterable => {
    let arr = Array.from(iterable)
    let res = [arr[0]]
    if (!iterable.length) {
        res = []
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            res.push(arr[i])
        }
    }
    return res
}*/

const uniqueInOrder = iterable => Array.from(iterable).filter((el,i) => el !== iterable[i-1])