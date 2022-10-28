const findOutlier = integers => {
    let odd = integers.filter(n => n % 2)
    if (odd.length === 1) {
        return odd[0]
    } else {
        return integers.filter(n => n % 2 === 0)[0]
    }
}