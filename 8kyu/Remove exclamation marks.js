// const removeExclamationMarks = string => string.split("").filter(el => el !== "!").join("")

const removeExclamationMarks = string => string.replace(/!/g, "")