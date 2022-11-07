const findMissing = list => {
    let step = (list[list.length - 1] - list[0]) / list.length
    let arr = []
    if (step < 0) {
        for (let i = list[0]; i >= list[list.length - 1]; i += step) {
            arr.push(i)
        }
    } else {
        for (let i = list[0]; i <= list[list.length - 1]; i += step) {
            arr.push(i)
        }
    }
    return arr.reduce((a, b) => a + b, 0) - list.reduce((a, b) => a + b, 0)
}