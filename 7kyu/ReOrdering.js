// const reOrdering = text => {
//     const words = text.split(" ")
//     for (let i = 0; i < words.length; i++) {
//         if (words[i][0] === words[i][0].toUpperCase()) {
//             const firstWord = words.splice(i, 1)
//             words.unshift(firstWord)
//             break
//         }
//     }
//     return words.join(" ")
// }

const reOrdering = text => {
    const words = text.split(" ")
    const firstWord = words.find(word => word[0] === word[0].toUpperCase())
    return [firstWord, ...words.filter(word => word !== firstWord)].join(" ")
}