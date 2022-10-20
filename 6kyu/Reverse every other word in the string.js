const reverse = str => str.split(" ")
    .filter(el => el.trim())
    .map((el, i) => i % 2 !== 0 ? el.split("").reverse().join("") : el)
    .join(" ")