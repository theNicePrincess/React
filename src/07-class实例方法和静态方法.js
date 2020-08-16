// ES6 中 class关键字，是实现面向对象编程的新形式

function Person(name,age){
  this.name = name;
  this.age = age;
}
Person.info = 'aaaa'  // 这个就是静态属性

Person.prototype.say = function(){
  console.log('这是一个实例方法')
}


const p1 = new Person('张三',18)
console.log(p1)
p1.say()  // 这是一个实例方法

// 【静态属性】：通过构造函数直接访问到的属性就叫做静态属性
// 【静态方法】
Person.show = function(){
  console.log('这是Person的静态show方法')
}
Person.show();


class Animal{
  // 注意点1：class {} 区间内只能写 构造器，静态方法，静态属性，实例方法
  // 注意点2：class 关键字内部，还是用原来的配方实现的，我们把class
  // 类的构造器
  // 构造器的作用，每当new 这个类的时候，必然会优先执行构造器中的代码
    constructor(name,age){ 
      // name 和 age 可以称之为实例属性
        this.name = name
        this.age = age
    }

    static info = 'aaa' // 在class内部，通过static修饰的属性就是静态属性

    // 这是动物的实例方法 今后会经常用到实例方法
    jiao(){
      console.log('动物的实例方法')
    }

    static show(){
      console.log('这是 Ainmal 的静态方法')
    }

}

//创建一个Animal实例
 
const a1 = new Animal('大黄',2); 
console.log(a1)
a1.jiao();

Animal.show();
Animal.prototype.jiao();