// function a() {
//     let c = 1;
//     console.log(aaa());
//     console.log(bbb());
//     function aaa() {
//         console.log(1);
//     }
//     const bbb = function () {
//         console.log(2);
//     };
// }

// a();

// function test() {
//     console.log(handleResize);
//     handleResize();
// }

// test(); // 会报错

// const handleResize = () => {
//     console.log(`count is 1`);
// };

// test(); // 能正常工作

// class A {
//     name = 1;
//     // constructor(){
//     //     this.name =2;
//     // }
//     getName() {
//         if (this) {
//             console.log(this.name);
//         }
//     }
// }

// const aa = new A();
// aa.getName();
// console.log(aa);

// const { getName } = aa;
// getName();

// (function () {
//     console.log(this);
// })();

// const cc = {
//     name: 2,
//     getName: getName,
// };

// cc.getName();

// class A {
//     constructor(name, age) {
//         this.name = name ?? 1;
//         this.age = age ?? 2;
//     }
//     getName() {
//         console.log(this.name);
//     }
// }

// class B extends A {
//     constructor() {
//         super();
//         console.log(this, this.name);
//     }
// }

// const aa = new B();

// Promise.prototype.myFinally = function (callback) {
//     let p = this.constructor;
//     console.log(p);
// };

// const a = new Promise((resolve, reject) => {});

// a.myFinally();

const promiseA = new Promise((resolve, reject) => {
    console.log("promiseA start");
    // resolve(1);
    reject(1);
}).then((res) => {
    console.log("promiseA", res);
    return res;
});

const promiseB = new Promise((resolve, reject) => {
    console.log("promiseB start");
    // resolve(2);
    reject(2);
}).then((res) => {
    console.log("promiseB", res);
    return res;
});

const promiseC = new Promise((resolve, reject) => {
    console.log("promiseC start");
    // resolve(3);
    reject(3);
}).then((res) => {
    console.log("promiseC", res);
    return res;
});

Promise.all([promiseA, promiseB, promiseC])
    .then((res) => {
        console.log(res, 1);
    })
    .catch((res) => {
        console.log(res, 2);
    });

Promise.any([promiseA, promiseB, promiseC])
    .then((res) => {
        console.log(res, "..");
    })
    .catch((e) => {
        console.log(e, "//\\");
    });

function a() {}

function myPromise() {
    this.resolve = () => {};
}

myPromise.prototype.then = function () {};

myPromise.resolve = () => {};

class A {
    constructor() {
        this.a = 2;
    }
    static b = 2;
}
A.b = 3;

const p = Promise.reject("出错了");

p.then(null, function (s) {
    console.log(s, "dsd");
});

console.log("-----------------");
function nihaojj() {}
nihaojj.prototype[Symbol.iterator] = function* () {
    yield "1";
    yield "2";
    yield "3";
};
console.log("-----------------");
class RangeIterator {
    constructor(start, stop) {
        console.log(this);
        this.value = start;
        this.stop = stop;
        super.age = 2;
    }
    static sex = 3;

    [Symbol.iterator]() {
        console.log(this, "shenme");
        return this;
    }

    next() {
        var value = this.value;
        if (value < this.stop) {
            this.value++;
            return { done: false, value: value };
        }
        return { done: true, value: undefined };
    }
}

const range = new RangeIterator(0, 3);

for (var value of range) {
    console.log(value, "iterator"); // 0, 1, 2
}

const tmpAry = [{ nihao: 1 }];
while (tmpAry.length) {
    tmpAry.shift();
    console.log(2, "dmdn");
}

function klkjk() {
    [1, 2, 3, 4].forEach((v) => {
        if (v === 2) {
            return;
        } else {
            console.log(v);
        }
    });
}

function* demo() {
    // console.log('Hello' + yield); // SyntaxError
    // console.log('Hello' + yield 123); // SyntaxError

    console.log("Hello" + (yield)); // OK
    console.log("Hello" + (yield 123)); // OK
}
