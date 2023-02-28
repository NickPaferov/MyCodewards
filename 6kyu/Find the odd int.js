const findOdd = arr => {
    const uniqNumbers = Array.from(new Set(arr))
    for (let i = 0; i < uniqNumbers.length; i++) {
        let count = 0
        for (let j = 0; j < arr.length; j++) {
            if (uniqNumbers[i] === arr[j]) {
                count++
            }
        }
        if (count % 2) {
            return uniqNumbers[i]
        }
    }
}