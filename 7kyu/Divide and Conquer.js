const divCon = x => {
    let numSum = x.filter(el => Number.isInteger(el)).reduce((a, b) => a + b, 0)
    let strSum = x.filter(el => !Number.isInteger(el)).map(el => Number(el)).reduce((a, b) => a + b, 0)
    return numSum - strSum
}