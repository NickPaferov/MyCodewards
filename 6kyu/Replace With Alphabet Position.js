const alphabetPosition = text => text.toLowerCase()
    .split("")
    .filter(el => /[a-z]/.test(el))
    .map(el => el.charCodeAt(0) - 96).join(" ")