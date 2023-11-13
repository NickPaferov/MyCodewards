const oddNotPrime = n => {
    const oddArr = [...Array(n)].map((_, i) => i + 1).filter(num => num % 2)
    let res = 1
    for (let j = 0; j < oddArr.length; j++) {
        for (let k = 2; k <= Math.sqrt(oddArr[j]); k++) {
            if (oddArr[j] % k === 0) {
                res++
                break
            }
        }
    }
    return res
}