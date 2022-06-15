"use strict";
class Person {
    constructor() {
        this.name = "binna";
    }
    sayName() {
        return this.name;
    }
}
Person.age = 18;
const person = new Person();
console.log(person.name);
console.log(Person.age);
/**
 * 抽象类
 *    生来就是专门用来继承的类
 *    抽象类可以添加抽象方法
 *      抽象方法智能定义在抽象类中
 *      并且之类必须对抽象方法进行重写
 *    抽象类的constructor不能被重写
 */
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    // age: number;
    // constructor(name: string, age: number) {
    //   super(name);
    //   this.age = age;
    // }
    sayHello() {
        console.log(this.name + "汪汪汪");
    }
}
const dog1 = new Dog("旺财");
dog1.sayHello();
const obj = {
    name: "name",
    age: 18,
};
const obj2 = {
    name: "张三",
    age: 23,
    gender: "男",
};
// 定义类时，可以使类去实现一个接口
// 实现接口就是使类满足接口的要求
class MyClass {
    constructor(name) {
        this.name = name;
    }
    sayHello() { }
}
class PersonNew {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value > 0) {
            this._age = value;
        }
    }
}
class A {
    // 可以直接将属性定义在构造函数中
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const genericArrowFn = (a) => {
    return "d";
};
const genericNormalShowFn = function (a) {
    return "d";
};
// 函数类型，这个有点看不懂了
let IdGenerator;
function genericNormalFn(a) {
    return "d";
}
IdGenerator = genericNormalFn;
console.log(2);
const sem = { name: "linker", age: 33 };
const sem2 = { name: "d", age: 32 };
