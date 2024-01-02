const happyNumbers = x => {
    const res = []
    let nums = []
    for (let i = 1; i <= x; i++) {
        let temp = i
        while (!nums.includes(temp)) {
            nums.push(temp)
            temp = temp.toString().split("").reduce((acc, curr) => acc + (+curr) ** 2, 0)
        }
        if (temp === 1) {
            res.push(i)
            nums = []
        }
    }
    return res
}