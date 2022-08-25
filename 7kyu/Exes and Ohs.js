const XO = str => {
    let arrX = str.toUpperCase().split("").filter(el => el === "X")
    let arrO = str.toUpperCase().split("").filter(el => el === "O")
    return arrX.length === arrO.length
}