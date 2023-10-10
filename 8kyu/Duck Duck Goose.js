// const duckDuckGoose = (players, goose) => {
//     while (goose > players.length) {
//         goose = goose - players.length
//     }
//     let index = goose - 1
//     return players[index].name
// }

const duckDuckGoose = (players, goose) => players[(goose - 1) % players.length].name