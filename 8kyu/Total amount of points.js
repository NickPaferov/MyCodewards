const points = games => {
    let total = 0
    for (let i = 0; i < games.length; i++) {
        if (Number(games[i][0]) > Number(games[i][2])) {
            total += 3
        }
        if (Number(games[i][0]) === Number(games[i][2])) {
            total += 1
        }
    }
    return total
}