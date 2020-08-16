
// 父类  ,可以理解为 原型对象 prototype
class Person {
  constructor(name,age){
    this.name = name ;
    this.age = age ;
  }
}

// 在 class 类中，可以食用 extends 关键字，实现子类继承父类

// 子类 美国人
class American extends Person {
  
}


const a1 = new American('Jack',23);
console.log(a1);

// 子类 中国人
class Chinese extends Person {
  
}

const c1 = new Chinese('张三',23)
console.log(c1)
