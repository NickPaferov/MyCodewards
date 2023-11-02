const mostFrequentItemCount = collection => {
    let res = 0
    const obj = collection.reduce((acc, prop) => {
        if (acc.hasOwnProperty(prop)) {
            acc[prop] += 1
        } else {
            acc[prop] = 1
        }
        return acc
    }, {})
    for (let key in obj) {
        if (obj[key] > res) {
            res = obj[key]
        }
    }
    return res
}