/*const remember = str => {
    const arr = str.split("")
    const allRepeats = arr.filter(el => arr.indexOf(el) !== arr.lastIndexOf(el))
    const repeats = []
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]) && !repeats.includes(arr[i])) {
            repeats.push(arr[i])
        }
    }
    for (let j = 0; j < repeats.length; j++) {
        allRepeats.splice(allRepeats.indexOf(repeats[j]), 1)
    }
    return Array.from(new Set(allRepeats))
}*/

const remember = str => str.split("")
    .filter((el, i, arr) => i !== arr.indexOf(el))
    .filter((el, i, arr) => i === arr.indexOf(el))