const order = words => words.split(" ")
    .sort((a, b) => Number(a.match(/\d/g).join("")) - Number(b.match(/\d/g).join("")))
    .join(" ")