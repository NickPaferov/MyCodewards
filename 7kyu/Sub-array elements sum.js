const elementsSum = (arr, d) => arr
    .map((subArr, i) => subArr[arr.length - 1 - i])
    .reduce((acc, curr) => acc + (curr !== undefined ? curr : (d !== undefined ? d : 0)), 0)