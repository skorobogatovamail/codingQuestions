function shuffle(arr) {
    // modify the arr inline to change the order randomly
    for (let i = arr.length - 1; i > 0; i -= 1) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]
    }
    return arr
}

const arr = [1, 2, 3, 4]
console.log(shuffle(arr))