
// function promiseAll(promises) {
//     return new Promise((resolve, reject) => {
//         const res = [];
//         let completed = 0;

//         promises.forEach((promise, index) => {
//             Promise.resolve(promise)
//                 .then((data) => {
//                     res[index] = data
//                     completed += 1;
//                     if (completed === promises.length) {
//                         resolve(res);
//                     }
//                 })
//                 .catch((error) => reject(error));
//         });
//     });
// }


// const p0 = Promise.resolve(3)
// const p1 = 42
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('foo')
//     })
// })

// // Promise.all([p0, p1, p2]).then(console.log)
// promiseAll([p0, p1, p2]).then(console.log)







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