const dontGiveMeFive = (start, end) => {
    let resArr = []
    for (let i = start; i <= end; i++) {
        if (!String(i).includes("5")) {
            resArr.push(i)
        }
    }
    return resArr.length
}