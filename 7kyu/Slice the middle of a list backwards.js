const reverseMiddle = array => array
    .slice(Math.floor(array.length / 2) - 1, Math.ceil(array.length / 2) + 1)
    .reverse()