const p0 = Promise.resolve(3)
const p1 = 45
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('yay')
    }, 1000)
})


function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        const res = [];
        let completed = 0;

        promises.forEach((promise, idx) => {
            Promise.resolve(promise)
                .then((data) => {
                    res[idx] = data
                    completed += 1;
                    if (completed === promises.length) resolve(res)
                })
                .catch((error) => reject(error))
        });
    })
}

promiseAll([p0, p1, p2]).then(console.log)




function all(promises) {
    const res = [];
    let completed = 0
    return new Promise((resolve, reject) => {
        if (promises.length === 0) resolve(res);
        promises.forEach((promise, idx) => {
            Promise.resolve(promise)
                .then(data => {
                    res[idx] = data
                    completed += 1
                    if (completed === promises.length) resolve(res)
                })
                .catch(error => reject(error))
        })
    })
}

// async function all(promises) {
//   let result = []
//   for(let promise of promises){
//     result.push(await promise)
//   }
//   return result;
// }