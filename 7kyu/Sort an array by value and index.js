const sortByValueAndIndex = array => array
    .map((el, i) => [el, el * (i + 1)])
    .sort((a, b) => a[1] - b[1])
    .map(subArr => subArr[0])