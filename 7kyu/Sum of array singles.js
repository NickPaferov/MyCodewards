const repeats = arr => arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el)).reduce((a, b) => a + b, 0)