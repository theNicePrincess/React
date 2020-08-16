// ES6 中 class关键字，是实现面向对象编程的新形式

function Person(name,age){
  this.name = name;
  this.age = age;
}
Person.info = 'aaaa'  // 这个就是静态属性

const p1 = new Person('张三',18)
console.log(p1)

// 【静态属性】：通过构造函数直接访问到的属性就叫做静态属性




class Animal{
  // 类的构造器
  // 构造器的作用，每当new 这个类的时候，必然会优先执行构造器中的代码
    constructor(name,age){ 
      // name 和 age 可以称之为实例属性
        this.name = name
        this.age = age
    }

    static info = 'aaa' // 在class内部，通过static修饰的属性就是静态属性
}

//创建一个Animal实例
 
const a1 = new Animal('大黄',2);
console.log(a1);
console.log(a1.name);
console.log(a1.age);
console.log(Animal.info) // info 是 Ainmal的静态属性