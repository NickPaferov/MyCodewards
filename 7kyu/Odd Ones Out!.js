const oddOnesOut = nums => {
    const obj = {}
    nums.forEach(num => {
        if (obj[num]) {
            obj[num]++
        } else {
            obj[num] = 1
        }
    })
    return nums.filter(num => obj[num] % 2 === 0)
}