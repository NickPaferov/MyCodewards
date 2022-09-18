const findDigit = (num, nth) => {
    if (nth < 1) {
        return -1
    }
    if (Math.abs(num).toString().length < nth) {
        return 0
    }
    return +num.toString().split("").reverse()[nth - 1]
}