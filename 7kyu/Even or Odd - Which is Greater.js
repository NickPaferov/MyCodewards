const evenOrOdd = str => {
    const arr = str.split("").map(Number)
    const evenSum = arr.filter(d => d % 2 === 0).reduce((acc, curr) => acc + curr, 0)
    const oddSum = arr.filter(d => d % 2).reduce((acc, curr) => acc + curr, 0)
    if (evenSum > oddSum) return 'Even is greater than Odd'
    if (evenSum < oddSum) return 'Odd is greater than Even'
    return 'Even and Odd are the same'
}