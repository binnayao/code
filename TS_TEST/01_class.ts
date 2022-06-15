class Person {
  readonly name: string = "binna";
  static age: number = 18;
  sayName() {
    return this.name;
  }
}

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
abstract class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract sayHello(): void;
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

// 描述一个对象的类型
type myType = {
  name: string;
  age: number;
};

const obj: myType = {
  name: "name",
  age: 18,
};

// 接口用来定义一个类的结构
interface myInterface {
  name: string;
  age: number;
}
// 接口用来定义一个类结构，用来定义一个类中应该包含哪些属性和方法，同时接口也可以当成类型去使用

// 我们不能定义两个相同名字的 type， 但是可以定义两个相同名字的 interface 接口，相同名字的 interface 定义的属性和方法是可以叠加的

interface myInterface {
  gender: string;
}

const obj2: myInterface = {
  name: "张三",
  age: 23,
  gender: "男",
};

// 接口可以在定义类的时候去限制类的结构
// 接口中所有的属性都不能有实际的值
// 接口只定义对象的结构，而不考虑实际的值
//    在接口中的所有的方法都是抽象方法
interface myInter {
  name: string;
  sayHello(): void;
}

// 定义类时，可以使类去实现一个接口
// 实现接口就是使类满足接口的要求
class MyClass implements myInter {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello(): void {}
}

class PersonNew {
  private _name: string;
  private _age: number;
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }
  get name() {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get age() {
    return this._age;
  }
  set age(value: number) {
    if (value > 0) {
      this._age = value;
    }
  }
}

class A {
  // 可以直接将属性定义在构造函数中
  constructor(public name: string, public age: number) {}
}



// 这个看着很特殊，是定义函数的接口
interface GenericIdentityFn<T> {
  (arg: T): T;
}

const genericArrowFn: GenericIdentityFn<string> = (a: string) => {
  return "d";
};

const genericNormalShowFn: GenericIdentityFn<string> = function (a: string) {
  return "d";
};


// 函数类型，这个有点看不懂了
let IdGenerator: (chars: string) => string;
function genericNormalFn(a: string): string {
  return "d";
}
IdGenerator = genericNormalFn;

console.log(2)



interface PersonPerson {
  name: string;
  age: number;
}

const sem: PersonPerson = {name: "linker", age: 33};
type SEM = typeof sem;
const sem2: SEM = {name: "d", age: 32};



