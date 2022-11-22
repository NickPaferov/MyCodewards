const firstDup = str => {
    const arr = str.split("")
    return arr.find(el => arr.indexOf(el) !== arr.lastIndexOf(el))
}