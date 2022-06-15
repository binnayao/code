function* gen() {
    yield 1;
    yield pr();
    yield 2;
}

function pr() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(123);
        }, 3000);
    });
}

const result = gen();

console.log(result.next());
console.log(result.next());
