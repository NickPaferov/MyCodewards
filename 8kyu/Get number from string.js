// const getNumberFromString = str => +str.split("").filter(el => !isNaN(parseInt(el))).join('')

const getNumberFromString = str=> +str.replace(/\D/g, "")