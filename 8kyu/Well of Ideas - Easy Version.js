function well(x) {
    const res = x.filter(i => i === 'good').length
    if (res > 2) {
        return 'I smell a series!'
    }
    if (res > 0) {
        return 'Publish!'
    } else {
        return 'Fail!'
    }
}
