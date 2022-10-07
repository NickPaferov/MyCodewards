// const tea42 = input => String(input).split("").map(el => el === "2" ? "t" : el).join("")

const tea42 = input => String(input).replace(/2/g, "t")