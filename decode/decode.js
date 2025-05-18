function decode(message) {
    let i = 0;
    let j = 0;
    let res = ''

    while (message[i] && message[i][j]) {
        res += message[i][j]
        message[i + 1] ? i++ : i--;
        j++
    }

    return res;
}

const message = [
    ['I', 'B', 'C', 'A', 'L', 'K', 'A'],
    ['D', 'R', 'F', 'C', 'A', 'E', 'A'],
    ['G', 'H', 'O', 'E', 'L', 'A', 'D']
]

console.log(decode(message))