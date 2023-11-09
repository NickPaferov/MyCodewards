const checkRoot = string => {
    const arr = string.split(",")
    const prod = arr.reduce((acc, curr) => acc * curr, 1)
    if (arr.some(isNaN) || arr.length !== 4 || !prod) {
        return "incorrect input"
    }
    if (arr.some((el, i) => i > 0 && el - arr[i - 1] !== 1)) {
        return "not consecutive"
    }
    const sqRoot = Math.sqrt(prod + 1)
    return `${prod + 1}, ${sqRoot}`
}