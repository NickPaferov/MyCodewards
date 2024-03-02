const setReducer = input => {
    if (input.length === 1) {
        return input[0]
    } else {
        const temp = []
        let count = 1
        for (let i = 0; i < input.length; i++) {
            if (input[i] === input[i + 1]) {
                count++
            } else {
                temp.push(count)
                count = 1
            }
        }
        return setReducer(temp)
    }
}