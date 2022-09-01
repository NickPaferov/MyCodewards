const sumDigits = number =>
    String(Math.abs(number))
        .split("")
        .map(el => Number(el))
        .reduce((a, b) => a + b)