// 三个状态：PENDING、FULFILLED、REJECTED
const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";

class MyPromise {
    constructor(executor) {
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];

        let resolve = (value) => {
            if (this.status === PENDING) {
                this.status = FULFILLED;
                this.value = value;
                this.onResolvedCallbacks.forEach((fn) => fn(this.value));
                // let tmpRes = this.value; //初始值
                // for (let step of this.onResolvedCallbacks) {
                //     try {
                //         tmpRes = step(tmpRes);
                //     } catch (error) {
                //         tmpRes = undefined;
                //         const index = this.onResolvedCallbacks.indexOf(step);
                //         const errorFn = this.onRejectedCallbacks[index + 1];
                //         if (errorFn) {
                //             errorFn(errorFn); //用下一个错误处理程序处理掉错误
                //             // 处理掉后，可以继续执行下去
                //         } else {
                //             // 如果没有错误处理程序，就不会执行下去了
                //             break;
                //         }
                //     }
                // }
            }
        };

        let reject = (reason) => {
            if (this.status === PENDING) {
                this.status = REJECTED;
                this.reason = reason;
                this.onRejectedCallbacks.forEach((fn) => fn(this.reason));
                // const errorFn = this.onResolvedCallbacks[0];
                // if (errorFn) {
                // }
            }
        };

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        if (this.status === FULFILLED) {
            onFulfilled(this.value);
        }
        if (this.status === REJECTED) {
            onRejected(this.value);
        }
        if (this.status === PENDING) {
            this.onResolvedCallbacks.push(onFulfilled);
            this.onRejectedCallbacks.push(onRejected);
        }
        return this;
    }
}

const aa = new MyPromise((resolve, reject) => {
    // setTimeout(() => {
    resolve(2);
    // }, 1000);
}).then(
    (res) => {
        console.log(res, "成功");
    },
    (res) => {
        console.log(res, "失败");
    }
);

// const res = new Promise((resolve, reject) => {
//     reject(1);
// })
//     .then(
//         (params) => {
//             throw new Error("23");
//             console.log(params, 1);
//         },
//         (params) => {
//             console.log(params, 12);
//         }
//     )
//     .then(
//         (params) => {
//             console.log(params, 2);
//         },
//         (params) => {
//             console.log(params, 22);
//         }
//     )
//     .then(
//         (params) => {
//             console.log(params, 3);
//         },
//         (params) => {
//             console.log(params, 33);
//         }
//     );
