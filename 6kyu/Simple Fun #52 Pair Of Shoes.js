const pairOfShoes = shoes => {
    const left = shoes.filter(s => s[0] === 0).map(s => s[1]).sort((a, b) => a - b).join("")
    const right = shoes.filter(s => s[0] === 1).map(s => s[1]).sort((a, b) => a - b).join("")
    return left === right
}