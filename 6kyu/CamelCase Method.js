String.prototype.camelCase = function () {
    return this.split(" ").map(el => el.slice(0, 1).toUpperCase() + el.slice(1)).join("")
}