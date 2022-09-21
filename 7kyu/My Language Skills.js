const myLanguages = results => {
    for (let key in results) {
        if (results[key] < 60) {
            delete results[key];
        }
    }
    return Object.keys(results).sort((a, b) => results[b] - results[a])
}