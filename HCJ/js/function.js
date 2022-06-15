// "use strict";
/**
 * argument 调用object的方法
 * @param  {...any} args 剩余入参
 */
function fn(...args) {
    // 任何值上调用Object原生的toString()方法，都会返回一个[object NativeConstructorName]
    console.log(Object.prototype.toString.call(args)); // [object Array]
    console.log(Object.prototype.toString.call(arguments)); // [object Arguments]
    console.log({}.toString.call(arguments)); // [object Arguments]
    // 调用Object方法转换arguments
    console.log([].slice.call(arguments)); // [1, 2]
    console.log([].splice.call(arguments, 0)); // [1, 2]
}

fn(1, 2);

// ------------------------------------------------------------------------------------------

function fn1(obj) {
    arguments[0] = "ddd";
    console.log(obj);
}
fn1(222); //严格模式下不能改动到obj，打印222；非严格模型下能改动到obj，打印ddd；

// ------------------------------------------------------------------------------------------

// 严格模式下，this指向undefined；非严格模式下，this指向window
function getFnThis() {
    console.log(this, "getFnThis");
}
getFnThis();

// 判断严格模式
const isStrict = !(function () {
    return this;
})();
console.log(isStrict);

// 箭头函数，在严格非严格模式下都指向window
const getArrowFnThis = () => {
    console.log(this, "getArrowFnThis");
};
getArrowFnThis();

// ------------------------------------------------------------------------------------------

function testCall() {
    console.log(this.nihao, "什么");
}

testCall.call(null); //严格模式就是call传入的值；非严格模式，当传入null和undefined时，显示undefined
