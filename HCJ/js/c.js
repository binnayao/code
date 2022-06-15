// 闭包
function test() {
    var a = 1;
    var c = 2;
    function increase() {
        debugger;
        var b = 2;
        // a++;
        // return a;
    }
    increase();
}
test();

// function Super() {
//     this.a = 1;
//     this.b = 2;
// }
// Super.prototype.printA = function () {
//     console.log(a);
//     return this.a;
// };

// function Sub() {
//     Super.call(this, ...arguments);
//     this.b = 3;
// }

// const SuperPrototype = Object.create(Super.prototype);
// SuperPrototype.contructor = Sub;
// Sub.prototype = SuperPrototype;

// const instance = new Sub();
