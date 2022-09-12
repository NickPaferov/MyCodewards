/*const productArray = numbers => {
    let products = []
    for (let i = 0; i < numbers.length; i++) {
        products.push((numbers.reduce((a, b) => a * b)) / numbers[i])
    }
    return products
}*/

const productArray = numbers => numbers.map(el => numbers.reduce((a, b) => a * b) / el)