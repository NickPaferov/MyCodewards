const SubstringTest = (str1, str2) => {
    for (let i = 0; i < str1.length - 1; i++) {
        if (str2.toLowerCase().includes(str1.toLowerCase().slice(i, i + 2))) {
            return true
        }
    }
    return false
}