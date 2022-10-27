/*const sortArray = array => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] % 2 && array[j] % 2 && array[i] > array[j]) {
                let biggerOdd = array[i]
                array[i] = array[j]
                array[j] = biggerOdd
            }
        }
    }
    return array
}*/

const sortArray = array => {
    const odd = array.filter((n) => n % 2).sort((a, b) => a - b)
    return array.map((n) => n % 2 ? odd.shift() : n)
}