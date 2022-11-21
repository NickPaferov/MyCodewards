const stringTransformer = str => str.split(" ").reverse().join(" ")
    .split("")
    .map(el => el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase())
    .join("")