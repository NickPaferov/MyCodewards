const getDivisorsCnt = n => {
    let divArr = []
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divArr.push(i)
        }
    }
    return divArr.length
}