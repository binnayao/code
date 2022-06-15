import * as nihao from "./c.js";
console.log(nihao);
console.log(Object.prototype.toString.call(nihao));
console.log(Reflect.apply(Object.prototype.toString, nihao, []));

// Object.getPrototypeOf();
// Reflect.getPrototypeOf();
