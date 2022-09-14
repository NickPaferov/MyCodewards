// const reverseLetter = str => str.split("").filter(el => /[a-z]/i.test(el)).reverse().join("")

const reverseLetter = str => str.match(/[a-z]/gi).reverse().join("")