// const index = (array, n) => array.length > n ? Math.pow(array[n], n) : -1

const index = (array, n) => Math.pow(array[n], n) || -1