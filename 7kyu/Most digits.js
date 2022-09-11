const findLongest = array => {
    let arrLng = array.map(el => el.toString().length)
    let max = Math.max(...arrLng)
    let index = arrLng.indexOf(max)
    return array[index]
}