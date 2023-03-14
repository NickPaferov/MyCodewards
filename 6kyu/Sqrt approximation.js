const sqrtApproximation = number => {
    for (let i = 0; i <= number; i++) {
        if (i * i === number) {
            return i
        }
        if (i * i > number) {
            return [i - 1, i]
        }
    }
}