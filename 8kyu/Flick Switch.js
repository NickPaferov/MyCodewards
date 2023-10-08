const flickSwitch = arr => {
    let res = []
    let value = true
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'flick') {
            value = !value
        }
        res.push(value)
    }
    return res
}