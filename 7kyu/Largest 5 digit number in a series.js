const solution = digits => {
    let res = Number(digits.slice(0, 5))
    for (let i = 1; i < digits.length - 4; i++) {
        if (Number(digits.slice(i, i + 5)) > res) {
            res = Number(digits.slice(i, i + 5))
        }
    }
    return res
}