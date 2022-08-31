// const findNextSquare = sq => Number.isInteger(Math.sqrt(sq)) ? Math.pow(Math.sqrt(sq) + 1, 2) : -1

const findNextSquare = sq => Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2)