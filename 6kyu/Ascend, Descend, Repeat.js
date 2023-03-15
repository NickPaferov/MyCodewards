// const ascendDescend = (length, minimum, maximum) => {
//     if (length === 0 || maximum < minimum) return ""
//     let res = ""
//     if (minimum === maximum) {
//         while (res.length < length) {
//             res += minimum
//         }
//     }
//     while (res.length < length) {
//         for (let i = minimum; i <= maximum; i++) {
//             if (res.length < length) {
//                 res += i
//             }
//         }
//         for (let j = maximum - 1; j > minimum; j--) {
//             if (res.length < length) {
//                 res += j
//             }
//         }
//     }
//     return res.substring(0, length)
// }

const ascendDescend = (length, minimum, maximum) => {
    let res = ""
    for (let i = minimum; i <= maximum; i++) {
        res += i;
    }
    for (let i = maximum - 1; i > minimum; i--) {
        res += i;
    }
    return res.repeat(length).slice(0, length);
}