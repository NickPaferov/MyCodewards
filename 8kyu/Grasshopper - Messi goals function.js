function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return [...arguments].reduce((acc, num) => acc + num, 0)
}