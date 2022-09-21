// const solve = arr => Array.from(new Set(arr.reverse())).reverse()

const solve = arr => arr.filter((el, i) => i === arr.lastIndexOf(el))