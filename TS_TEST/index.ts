// 一个会嚯嚯别的类型的类型
let a: any;
// 一个只会影响自己的类型
let b: unknown;

// 让c的类型不再有保证，既是string 又是 number
let c: string = "abc";
a = 12;
c = a;

// 如果是unKnown，是不能直接赋值的，我们需要先判断它的类型，才可以
let d: string = "def";
b = "fed";
// d = b; // 报错
if (typeof b === "string") {
  d = b;
}

// 断言
let f: any = "2";
const mmm:string = f as string; // 两种断言的写法
const L: string = <string>f; // 另外一种

// 联合类型, mm只能是列举的这几个值之一
let mm: "a" | "b";

// 还可以使用 &
let ja: { name: string } | { age: number } = { name: "a" };
let jb: { name: string } & { age: number } = { name: "a", age: 18 };

// 类型别名 type
type MT_TYPE = 1 | 2 | 3 | 4;
let ka: MT_TYPE = 2;
