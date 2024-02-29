const sortMyString = str => {
    const even = str.split("").filter((el, i) => i % 2 === 0).join("")
    const odd = str.split("").filter((el, i) => i % 2 !== 0).join("")
    return `${even} ${odd}`
}