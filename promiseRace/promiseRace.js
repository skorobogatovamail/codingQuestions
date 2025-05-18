function race(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            Promise.resolve(promise)
                .then(data => resolve(data))
                .catch(error => reject(error))
        })

    })
}