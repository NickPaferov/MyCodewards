const spinWords = string => string.split(" ")
    .map(word => word.length < 5 ? word : word.split("").reverse().join(""))
    .join(" ")