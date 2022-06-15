// "use strict";
function fn1() {
    console.log(this, "fn1");
    return function () {
        console.log(this, "fn1闭包");
    };
}

const tmp = fn1();
tmp();

(function () {
    "use strict";
    function fn2() {
        console.log(this, "fn2");
        return () => {
            console.log(this, "fn2闭包");
        };
    }
    fn2();
    fn2()();
})();
