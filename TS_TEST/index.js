"use strict";
// 一个会嚯嚯别的类型的类型
let a;
// 一个只会影响自己的类型
let b;
// 让c的类型不再有保证，既是string 又是 number
let c = "abc";
a = 12;
c = a;
// 如果是unKnown，是不能直接赋值的，我们需要先判断它的类型，才可以
let d = "def";
b = "fed";
// d = b; // 报错
if (typeof b === "string") {
    d = b;
}
// 断言
let f = "2";
const mmm = f; // 两种断言的写法
const L = f; // 另外一种
// 联合类型, mm只能是列举的这几个值之一
let mm;
// 还可以使用 &
let ja = { name: "a" };
let jb = { name: "a", age: 18 };
let ka = 2;
