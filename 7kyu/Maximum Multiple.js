/*const maxMultiple = (divisor, bound) => {
    for (let i = bound; i > 0; i--) {
        if (i % divisor === 0) {
            return i
        }
    }
}*/

// const maxMultiple = (divisor, bound) => Math.floor(bound / divisor) * divisor

const maxMultiple = (divisor, bound) => bound - bound % divisor