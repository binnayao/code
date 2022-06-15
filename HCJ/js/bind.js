Function.prototype.myBind = function () {
    const target = arguments[0];
    const rest = [].slice.call(arguments, 1);
    const fn = this;
    if (typeof fn !== "function") {
        return console.warn("请绑定至函数");
    }
    function fBound() {
        const resultParams = [...rest, ...arguments];
        return fn.call(this instanceof fBound ? this : target, ...resultParams);
    }
    fBound.prototype = Object.create(fn.prototype || Function.prototype);
    return fBound;
};
