const checkConcatenatedSum = (num, n) => {
    const absNum = Math.abs(num)
    return absNum === String(absNum).split("").map(el => +el.repeat(n)).reduce((acc, curr) => acc + curr, 0)
}