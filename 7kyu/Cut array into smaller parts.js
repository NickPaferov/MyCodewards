const makeParts = (arr, chunkSize) => {
    let res = []
    while (arr.length) {
        res.push(arr.splice(0, chunkSize))
    }
    return res
}