// const count = string => {
//     const obj = {}
//     const arr = Array.from(new Set(string))
//     for (let i = 0; i < arr.length; i++) {
//         let count = 0
//         for (let j = 0; j < string.length; j++) {
//             if (arr[i] === string[j]) {
//                 count++
//             }
//         }
//         obj[arr[i]] = count
//     }
//     return obj
// }

const count = string => {
    const obj = {}
    for (let i = 0; i < string.length; i++) {
        if (obj.hasOwnProperty(string[i])) {
            obj[string[i]]++
        } else {
            obj[string[i]] = 1
        }
    }
    return obj
}