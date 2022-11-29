const toWeirdCase = string => string.split(" ")
    .map(w => w.split("").map((el, i) => i % 2 === 0 ? el.toUpperCase(0) : el.toLowerCase()).join(""))
    .join(" ")