const adjacentElementsProduct = array => {
    let arrProds = []
    for (let i = 0; i < array.length - 1; i++) {
        arrProds.push(array[i] * array[i + 1])
    }
    return Math.max(...arrProds)
}