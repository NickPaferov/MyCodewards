const pipeFix = numbers => {
    let newArr = []
    let min = numbers[0]
    let max = numbers.slice(-1)[0]
    for (let i = min; i <= max; i++) {
        newArr.push(i)
    }
    return newArr
}