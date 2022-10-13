const findDeletedNumber = (arr, mixArr) => {
    for (let i = 0; i < arr.length; i++) {
        if (!mixArr.includes(arr[i])) {
            return arr[i]
        }
    }
    return 0
}