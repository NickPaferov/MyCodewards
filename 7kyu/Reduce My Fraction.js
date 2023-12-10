const reduce = fraction => {
    const [numerator, denominator] = fraction
    for (let i = Math.min(...fraction); i > 0; i--) {
        if (numerator % i === 0 && denominator % i === 0) {
            return [numerator / i, denominator / i]
        }
    }
}