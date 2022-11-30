const numberOfPairs = (gloves) => Array.from(new Set(gloves))
    .map(uniq => Math.floor(gloves.filter(glov => glov === uniq).length / 2))
    .reduce((a, b) => a + b, 0)