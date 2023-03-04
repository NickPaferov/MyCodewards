// const countRepeats = str => {
//     const arr = []
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== str[i + 1]) {
//             arr.push(str[i])
//         }
//     }
//     return str.length - arr.length
// }

const countRepeats = str => str.length - str.split("").filter((el, i, arr) => el !== arr[i + 1]).length