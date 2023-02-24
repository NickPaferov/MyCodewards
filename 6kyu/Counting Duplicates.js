const duplicateCount = text => {
    const arr = text.toLowerCase().split("")
    return Array.from(new Set(arr.filter(el => arr.indexOf(el) !== arr.lastIndexOf(el)))).length
}