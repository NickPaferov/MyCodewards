const deleteDigit = n => {
    let max = 0
    let arr = String(n).split("")
    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr.slice(0, i).concat(arr.slice(i + 1)).join(""))
        max = Math.max(num, max)
    }
    return max
}