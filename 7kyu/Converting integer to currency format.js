// const toCurrency = price => price
//     .toString()
//     .split("")
//     .reverse()
//     .reduce((acc, curr, i) => i % 3 === 0 ? `${curr},` + acc : curr + acc)

const toCurrency = price => price
    .toString()
    .split("")
    .reverse()
    .map((el, i) => i % 3 === 0 && i > 0 ? `${el},` : el)
    .reverse()
    .join("")