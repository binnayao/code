Function.prototype.myApply = function () {
    const len = arguments.length;
    const fn = this;

    if (len === 0) {
        return fn();
    }

    let target = arguments[0];
    let reset = arguments[1];
    if (!reset) {
        reset = [];
    } else if (!Array.isArray(reset)) {
        return console.warn("第二个参数，请传入数组");
    }

    const isStrict = (function () {
        return true === undefined;
    })();

    if (!isStrict) {
        if ([null, undefined].includes(target)) {
            target = (function () {
                return this;
            })();
        } else {
            const targetType = typeof target;
            if (["bigint", "symbol"].includes(targetType)) {
                target = Object(target);
            } else {
                target = new target.constructor(target);
            }
        }
    } else {
        // 严格模式下，不需要做任何的处理
    }
    const sy = Symbol();
    target[sy] = fn;
    return target[sy](...reset);
};
