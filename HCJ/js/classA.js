// // 模块A
// const a = 1;
// var b = 2;
// console.log(this, "A");
// export default a;

// // ====================================

// // 模块B
// import a from "A";
// var a = 3;
// console.log(this, "B");

// (function () {
//     "use strict";
//     const b = 4;
//     console.log(this);
//     (function () {
//         "use strict";
//         console.log(this, "A", b);
//     })();
// })();

import B from "./classB.js";
const a = 12;
console.log(this, "B", a, B);
export default { b: 1 };
