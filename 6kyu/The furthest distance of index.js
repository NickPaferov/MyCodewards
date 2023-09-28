const furthestDistance = (arr, k) => {
    let diff = -1
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let currentDiff = Math.abs(i - j)
            if (Math.abs(arr[i] - arr[j]) >= k && currentDiff > diff) {
                diff = currentDiff
            }
        }
    }
    return diff
}