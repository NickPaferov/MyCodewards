// const sumSquareEvenRootOdd = ns => +ns
//     .map(n => n % 2 ? Math.sqrt(n) : Math.pow(n, 2))
//     .reduce((acc, curr) => acc + curr, 0)
//     .toFixed(2)

const sumSquareEvenRootOdd = ns => +ns
    .reduce((acc, curr) => acc + (curr % 2 ? Math.sqrt(curr) : Math.pow(curr, 2)), 0)
    .toFixed(2)