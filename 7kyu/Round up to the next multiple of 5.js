/*const roundToNext5 = n => {
    while (n % 5 !== 0) {
        n++
    }
    return n
}*/

const roundToNext5 = n => Math.ceil(n / 5) * 5