// function nihao() {
//     this.name = 1;
// }
// const obj = new nihao();
// const a = [];

// Object.prototype.toString.call(obj);

// Object.prototype.toString.call(obj, 1, 2, 3);

// Function.prototype.myBind = function () {
//     const fn = this;
//     const [target, ...res] = arguments;
//     if (typeof fn !== "function") {
//         return new Error("绑定对象必须是函数");
//     }
//     // target调用环境，fn原函数，res剩余入参
//     function fBound() {
//         const param = [...res, ...arguments];
//         // 如果要new，那么this要指向新建的对象
//         const fnObj = this instanceof fBound ? this : target;
//         return fn.call(fnObj, ...param);
//     }
//     // 但是实际new的是fBound，无法使用instanceof来判断new出来的对象是否是myBind的实例
//     fBound.prototype = Object.create(fn.prototype || Function.prototype);
//     return fBound;
// };

// function TT() {
//     this.name = 1;
//     this.age = 2;
// }
// function TTF() {
//     this.sex = 3;
// }

// const tmp = TT.myBind(TTF, 1, 2, 3);
// const nihao = new tmp();

// function myNew() {
//     const [target, ...res] = arguments;
//     // const obj = Object.create(target.prototype);
//     const obj = {};
//     obj.__proto__ = target.prototype;
//     target.call(obj, ...res);
//     return obj;
// }

// function add() {
//     const [fn, ...res] = arguments;
//     function _curry() {
//         param = res.concat([...arguments]);
//         return add.call(null, ...[fn, ...param]);
//     }
//     _curry.toString = function () {
//         return fn.apply(null, res);
//     };
//     return _curry;
// }

// function source() {
//     const param = [].slice.call(arguments);
//     return param.reduce(function (pre, next) {
//         return pre + next;
//     }, 0);
// }

// const h12 = add(source, 1, 2);
// console.log(h12(3));
