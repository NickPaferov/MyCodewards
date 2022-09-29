const maxRot = n => {
    let arrOfNums = [n]
    let helper = String(n).split("")
    for (let i = 0; i < helper.length - 1; i++) {
        let num = helper.splice(i, 1)
        helper.push(num[0])
        arrOfNums.push(Number(helper.join("")))
    }
    return Math.max(...arrOfNums)
}