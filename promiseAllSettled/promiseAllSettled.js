function allSettled(promises) {
    const res = [];
    let settled = 0
    return new Promise((resolve, reject) => {
        if (promises.length === 0) resolve(res)

        promises.forEach((promise, idx) => {
            Promise.resolve(promise)
                .then(value => {
                    res[idx] = { value, status: 'fulfilled' }
                    settled += 1

                    if (settled === promises.length) resolve(res)
                })
                .catch(reason => {
                    res[idx] = { reason, status: 'rejected' }
                    settled += 1
                    if (settled === promises.length) resolve(res)
                })
        })

    })
}