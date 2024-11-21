function Master() {
    return 'origin'
}

console.log("hello")

function race(arr) {
    return new Promise((res, rej) => {
        for (const p of arr) {
            return p.then((val) => res(val), (err) => rej(err))
        }
    })
}