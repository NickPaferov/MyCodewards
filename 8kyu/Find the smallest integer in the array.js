/*class SmallestIntegerFinder {
    findSmallestInt(args) {
        return args.reduce((prev, curr) => prev < curr ? prev : curr)
    }
}*/

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args)
    }
}