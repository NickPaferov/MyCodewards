const invertHash = hash => {
    const obj = {}
    for (let key in hash) {
        obj[hash[key]] = key
    }
    return obj
}