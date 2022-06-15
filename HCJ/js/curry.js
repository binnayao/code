function curry() {
    const preArg = [...arguments];
    const _curry = function () {
        const nextArg = [].slice.call(arguments);
        const currentArg = [].concat.call(preArg, nextArg);
        return curry(...currentArg);
    };
    _curry.toString = function () {
        return preArg.reduce((pre, current) => pre + current, 0);
    };
    return _curry;
}

var a = curry(1, 2)(2)(5)(1, 2, 3);
console.log(a);

function curryNormal() {
    const fn = arguments[0];
    const reset = [].splice.call(arguments, 1);
    const _curry = function () {
        return curryNormal.apply(null, [fn, ...reset, ...arguments]);
    };
    _curry.toString = function () {
        return fn.apply(null, reset);
    };
    return _curry;
}

function normal() {
    const param = [].splice.call(arguments, 0);
    return param.reduce((prev, current) => prev + current, 0);
}

const hello = curryNormal(normal);
console.log(hello(1)(2)(3)(7));

// console.log(normal(1, 2));
