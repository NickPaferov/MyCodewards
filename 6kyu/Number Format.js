const numberFormat = number => {
    const arr = number.toString().split("").reverse()
    let res = ""
    let temp = ""
    for (let i = 0; i < arr.length; i++) {
        temp += arr[i]
        if (temp.length === 3 && Number.isInteger(+arr[i + 1])) {
            res += `${temp},`
            temp = ""
        }
    }
    if (temp.length) {
        res += temp
    }
    return res.split("").reverse().join("")
}