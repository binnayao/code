// console.log(this, "B", a);

// export default { a: 1 };
// (function () {
//     "use strict";
//     const a = new Function("return this")();
//     console.log(a);
// })();

function tco(f) {
    var value;
    var active = false;
    var accumulated = [];

    return function accumulator() {
        debugger;
        accumulated.push(arguments);
        if (!active) {
            active = true;
            while (accumulated.length) {
                value = f.apply(this, accumulated.shift());
            }
            active = false;
            return value;
        }
    };
}

var sum = tco(function (x, y) {
    if (y > 0) {
        return sum(x + 1, y - 1);
    } else {
        return x;
    }
});

sum(1, 7);

const obj = {};
const s1 = Symbol("s1");
const s2 = Symbol("s2");

obj[s1] = "s11";
obj[s2] = "s22";

const symbolAry = Object.getOwnPropertySymbols(obj);

symbolAry.map((v) => obj[v]);
