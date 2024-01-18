const findMiddle = str => {
    if (typeof str !== "string") return -1
    const numStringArr = str.match(/\d/g)
    if (!numStringArr) return -1
    const prodStr = numStringArr.reduce((prod, curr) => prod * +curr, 1).toString()
    const res = prodStr.slice(Math.ceil(prodStr.length / 2) - 1, Math.floor(prodStr.length / 2) + 1)
    if (+prodStr % 2 === 0 && res.length > 1 && +res[0] === 0) {
        return +res.slice(1)
    } else {
        return +res
    }
}