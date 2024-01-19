// const hasUniqueChars = str => str === Array.from(new Set(str.split(""))).join("")

const hasUniqueChars = str => str.length === new Set(str).size