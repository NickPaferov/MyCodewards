const sortByArea = array =>
    [...array].sort((a, b) => (Array.isArray(a) ? a[0] * a[1] : Math.PI * Math.pow(a, 2)) -
        (Array.isArray(b) ? b[0] * b[1] : Math.PI * Math.pow(b, 2)))