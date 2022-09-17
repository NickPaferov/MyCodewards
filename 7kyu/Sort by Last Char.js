// const last = x => x.split(" ").sort((a, b) => a[a.length - 1] < b[b.length - 1] ? -1 : 1)

const last = x => x.split(" ").sort((a, b) => a.slice(-1) < b.slice(-1) ? -1 : 1)