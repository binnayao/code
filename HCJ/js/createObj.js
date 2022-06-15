// 使用构造函数创建对象
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = new Person("张三", 12);
person1 instanceof Object; //true
person1 instanceof Person; //true
person1.constructor === Person; //true

// 工厂模式创建对象，不能判定一个对象的类型，面向对象，不知道是什么具体的对象，只是知道它是一个对象
function FactoryFn(name, age) {
  const obj = new Object();
  obj.name = name;
  obj.age = age;
  return obj;
}
const factoryFn1 = FactoryFn("张三", 12);

// 原型方法
function ProtoFn() {}
ProtoFn.prototype.name = "张三";
ProtoFn.prototype.remark = "法外狂徒";
ProtoFn.prototype.showRemark = function () {
  // 这里使用箭头函数不行
  console.log(this.name);
};
const personZs = new ProtoFn();
Object.keys(personZs); //[]
Object.keys(ProtoFn.prototype); //["name", "remark", "showRemark"]
Object.keys(PersonZs.__proto__); //["name", "remark", "showRemark"]
Object.getOwnPropertyNames(ProtoFn.prototype); //["constructor", "name", "remark", "showRemark"]
personZs.hasOwnProperty("name"); //true
"name" in personZs; //true
for (let i in personZs) {
  console.log(i);
} //"name" "age" "showRemark"
