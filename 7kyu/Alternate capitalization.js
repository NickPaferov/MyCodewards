// const capitalize = word => {
//     const letters = word.split("")
//     const firstEl = letters.map((ltr, i) => i % 2 ? ltr : ltr.toUpperCase()).join("")
//     const secondEl = letters.map((ltr, i) => i % 2 ? ltr.toUpperCase() : ltr).join("")
//     return [firstEl, secondEl]
// }

const capitalize = word => {
    return [0, 1].map(el => word.split("").map((ltr, i) => i % 2 === el ? ltr.toUpperCase() : ltr).join(""))
}