function any(promises) {
    let rejected = 0;
    const errors = []
    return new Promise((resolve, reject) => {
        promises.forEach((promise, idx) => {
            Promise.resolve(promise)
                .then(data => resolve(data))
                .catch(error => {
                    rejected += 1;
                    errors[idx] = error
                    if (rejected === promises.length) {
                        reject(new AggregateError('No Promise in Promise.any was resolved', errors))
                    }
                })
        })
    })
}