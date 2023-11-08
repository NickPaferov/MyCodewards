const polydivisible = x => {
    let arr = String(x).split("")
    for (let i = 1; i <= arr.length; i++) {
        let num = +arr.slice(0, i).join("")
        if (num % i) {
            return false
        }
    }
    return true
}