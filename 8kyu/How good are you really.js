const betterThanAverage = (classPoints, yourPoints) => {
    const arrPoints = [...classPoints, yourPoints]
    const averagePoint = arrPoints.reduce((prev, cur) => prev + cur) / arrPoints.length
    return yourPoints > averagePoint
}