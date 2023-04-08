const maximizePoints = (team1, team2) => {
    const sortedTeam1 = [...team1].sort((a, b) => a - b)
    const sortedTeam2 = [...team2].sort((a, b) => a - b)
    let res = 0
    for (let i = 0; i < sortedTeam2.length; i++) {
        for (let j = 0; j < sortedTeam1.length; j++) {
            if (sortedTeam1[j] > sortedTeam2[i]) {
                res++
                sortedTeam1.splice(j, 1)
                break
            }
        }
    }
    return res
}