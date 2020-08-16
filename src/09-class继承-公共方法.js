
// 父类  ,可以理解为 原型对象 prototype
class Person {
  constructor(name,age){
    this.name = name ;
    this.age = age ;
  }

  // 打招呼的实例方法
  sayHello(){
    console.log('hello everyone')
  }

}

// 在 class 类中，可以食用 extends 关键字，实现子类继承父类

// 子类 美国人
class American extends Person {
  // 问题一：为什么一定要在construtor中调用super()
  //    答：因为如果一个子类 通过extends关键字继承了父类，那么在子类的constructor构造函数中必须先调用一下 super()
  // 问题二：super()是什么东西？
  //    答：super() 是一个函数，而且它是父类的构造器，子类中的 super（）其实就是父类中constructor构造器的引用。
  // 问题三：为什么调用了 super() 后 a1实例里面的name和age都变成了undefined了？
  constructor(name,age){
    super(name,age)
  }
}


const a1 = new American('Jack',23);
console.log(a1);
a1.sayHello();

// 子类 中国人
class Chinese extends Person {
  constructor(name,age,IDNumber){
    // 语法规范，在子类中 this 只能在super() 之后使用
    super(name,age)
    this.IDNumber = IDNumber;
  }
}

const c1 = new Chinese('张三',23,'130621999****')
console.log(c1)
