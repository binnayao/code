// function nihao() {
//     this[Symbol.for("foo")] = 2;
// }

// nihao();

// function nihao1() {
//     console.log();
// }
// nihao1();
// var obj = new Proxy(
//     { m: 1 },
//     {
//         get: function (target, propKey, receiver) {
//             console.log(`getting ${propKey}!`);
//             return Reflect.get(target, propKey, receiver);
//         },
//         set: function (target, propKey, value, receiver) {
//             // console.log(JSON.stringify(target), JSON.stringify(receiver));
//             console.log(`setting ${propKey}!`);
//             return Reflect.set(target, propKey, value, receiver);
//         },
//     }
// );

// obj.count = 1;
// ++obj.count;

// var twice = {
//     apply(target, ctx, args) {
//         console.log(target, ctx, args);
//         return Reflect.apply(...arguments) * 2;
//     },
// };
// function sum(left, right) {
//     return left + right;
// }
// var proxy = new Proxy(sum, twice);
// proxy(1, 2); // 6
// proxy.call(null, 5, 6); // 22
// proxy.apply(null, [7, 8]); // 30
const p = new Proxy(function () {}, {
    construct: function (target, args, nm) {
        console.log("called: " + args.join(", "), nm, p);
        return { value: args[0] * 10 };
    },
});

new p(1).value;
