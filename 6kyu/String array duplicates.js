const dup = s => s.map(w => w.split("").filter((el, i, arr) => el !== arr[i - 1]).join(""))