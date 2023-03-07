const formatWords = words => {
    if (Array.isArray(words)) {
        const arr = words.filter(word => word)
        const sentence = arr.join(", ")
        return sentence.split("").map((el, i) => i === sentence.lastIndexOf(",") ? " and" : el).join("")
    }
    return ""
}