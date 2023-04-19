const digits = (num) => {
    const res = []
    const nums = String(num).split("").map(el => Number(el))
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            res.push(nums[i] + nums[j])
        }
    }
    return res
}