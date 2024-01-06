const capitals = word => word
    .split("")
    .map((el, i) => el === el.toUpperCase() ? i : null)
    .filter(el => el !== null)