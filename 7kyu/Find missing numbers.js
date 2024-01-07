const findMissingNumbers = arr => {
    const nums = []
    for (let i = arr[0]; i < arr[arr.length - 1]; i++) {
        if (!arr.includes(i)) {
            nums.push(i)
        }
    }
    return nums
}