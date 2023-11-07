// const onlyOne = (...args) => args.indexOf(true) !== -1 && args.indexOf(true) === args.lastIndexOf(true)

const onlyOne = (...args) => args.filter(Boolean).length === 1