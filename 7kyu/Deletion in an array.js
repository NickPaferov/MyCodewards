const deleteValues = (arr, pred) => {
    for (let i = 0; i < arr.length; i++) {
        if (pred(arr[i])) {
            arr.splice(i, 1)
            i--
        }
    }
    return arr
}