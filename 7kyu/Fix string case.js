const solve = s => {
    let lowerCount = s.split("").filter(el => el === el.toLowerCase()).length
    let upperCount = s.split("").filter(el => el === el.toUpperCase()).length
    return lowerCount < upperCount ? s.toUpperCase() : s.toLowerCase()
}