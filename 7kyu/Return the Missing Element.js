// const getMissingElement = superImportantArray => {
//     let sum = 0
//     for (let i = 1; i <= 9; i++) {
//         sum += i
//     }
//     return sum - superImportantArray.reduce((acc, curr) => acc + curr, 0)
// }

const getMissingElement = superImportantArray => {
    for (let i = 0; i <= 9; i++) {
        if (!superImportantArray.includes(i)) {
            return i
        }
    }
}