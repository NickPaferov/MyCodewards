const createIterator = function (func, n) {
    return function (x) {
        for (let i = 1; i <= n; i++) {
            x = func(x)
        }
        return x
    }
}