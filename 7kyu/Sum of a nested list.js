const sumNested = arr => arr.flat(Infinity).reduce((acc, curr) => acc + curr, 0)