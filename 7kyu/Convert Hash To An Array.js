// const convertHashToArray = hash => {
//     const arr = []
//     for (let key in hash) {
//         arr.push([key, hash[key]])
//     }
//     return arr.sort()
// }

const convertHashToArray = hash => Object.entries(hash).sort()