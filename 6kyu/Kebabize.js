const kebabize = str => {
    const arr = str.replace(/\d/g, "").split("")
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i].toUpperCase()) {
            arr[i - 1] = `${arr[i - 1]}-`
        }
    }
    return arr.map(el => el.toLowerCase()).join("")
}