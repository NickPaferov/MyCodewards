const high = sentence => {
    const scoreArr = sentence.split(" ").map(w => w.split("").reduce((a, b) => a + (b.charCodeAt(0) - 96), 0))
    return sentence.split(" ")[scoreArr.indexOf(Math.max(...scoreArr))]
}