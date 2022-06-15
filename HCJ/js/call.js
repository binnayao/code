// "use strict";
// 手写call
/**
 * 一下实现call的方法有缺陷
 * 已知：在严格模式下，第一个参数，传的是什么，调用函数内的this就是这个
 * 已知：在非严格模式下，第一个参数，传入undefined和null，调用函数内的this是window（全局对象），传入的是别的变量时，会变成包装对象
 * 以下代码，无法实现严格在严格模式下，传入1，但是不变成包装对象的调用
 * @returns
 */
Function.prototype.myCall = function () {
    const len = arguments.length;
    const sourceFn = this;

    if (len === 0) {
        return sourceFn();
    }

    let target = arguments[0];
    const resArgument = [].slice.call(arguments, 1);

    // 严格模式下, function执行时候的this指向undefined; 非严格模式下，就指向window，以此判断是否是严格模式
    const isStrict =
        (function () {
            return this;
        })() === undefined;

    if (!isStrict) {
        // 非严格模式下，如果target为null或者undefined，则target为window
        if ([null, undefined].includes(target)) {
            target = (function () {
                return this;
            })();
        } else {
            const targetType = typeof target;
            //转换成包装对象
            if (["bigint", "symbol"].includes(targetType)) {
                target = Object(target);
            } else {
                target = new target.constructor(target);
            }
        }
    }

    const sy = Symbol();
    target[sy] = sourceFn;
    return target[sy](...resArgument);
};

function testFn() {
    console.log(this, this.toFixed, arguments);
}
const testObj = { a: "testObj" };

testFn.call(1, 2);
testFn.myCall(1, 2);

testFn.myCall(undefined, 1, 2); //严格模式下会报错
testFn.call(undefined, 1, 2); //严格模式下会报错

testFn.myCall();
testFn.call();

testFn.myCall(null); //严格模式下会报错
testFn.call(null); //严格模式下会报错

// testFn.myCall(testObj);
// testFn.call(testObj);

// testFn.myCall(testObj, 1, 2);
// testFn.call(testObj, 1, 2);

// 普通函数的this： 指向它的调用者，如果没有调用者则默认指向window
// 箭头函数的this: 指向箭头函数定义所处的对象，而不是箭头函数使用时所在的对象，默认使用父级的this
