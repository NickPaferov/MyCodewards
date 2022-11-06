const isPrime = num => {
    let divs = 0
    if (num < 2) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            divs++
        }
    }
    return divs === 0
}