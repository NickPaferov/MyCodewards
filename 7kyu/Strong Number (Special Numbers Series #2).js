const strong = n => {
    let arr = String(n).split("").map(item => +item)
    let factOfNums = arr.map(el => {
        let prod = 1
        for (let i = 1; i <= el; i++) {
            prod *= i
        }
        return prod
    })
    if (factOfNums.reduce((a, b) => a + b, 0) === n) {
        return "STRONG!!!!"
    } else {
        return "Not Strong !!"
    }
}