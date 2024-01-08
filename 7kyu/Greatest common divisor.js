// const mygcd = (x, y) => {
//     let maxNum = x > y ? x : y
//     let minNum = x < y ? x : y
//     let rest
//     while (rest !== 0) {
//         rest = maxNum % minNum
//         maxNum = minNum
//         minNum = rest > 0 ? rest : minNum
//     }
//     return minNum
// }

const mygcd = (x, y) => y === 0 ? x : mygcd(y, x % y)