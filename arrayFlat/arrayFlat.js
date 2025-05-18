function flat(arr, depth = 1) {
    if (depth <= 0) return arr.slice();

    const res = [];

    arr.forEach(el => {
        if (Array.isArray(el)) {
            res.push(...flat(el, depth - 1))
        } else {
            res.push(el)
        }
    })

    return res
}
