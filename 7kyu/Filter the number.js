const filterString = value => +value.split("").map(el => Number(el)).filter(el => Number.isInteger(el)).join("")