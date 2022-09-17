const switcher = x => {
    let alph = "zyxwvutsrqponmlkjihgfedcba!? "
    return x.map(el => alph[Number(el - 1)]).join("")
}