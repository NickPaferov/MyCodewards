const getGrade = (s1, s2, s3) => {
    let aver = (s1 + s2 + s3) / 3
    if (aver >= 0 && aver < 60) return 'F'
    if (aver < 70) return 'D'
    if (aver < 80) return 'C'
    if (aver < 90) return 'B'
    if (aver >= 90 && aver <= 100) return 'A'
}