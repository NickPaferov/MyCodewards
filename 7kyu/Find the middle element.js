/*const gimme = triplet => {
    let min = Math.min(...triplet)
    let max = Math.max(...triplet)
    let el = triplet.filter(el => el !== min && el !== max)[0]
    return triplet.indexOf(el)
}*/

const gimme = triplet => triplet.indexOf(triplet.concat().sort((a, b) => a - b)[1])