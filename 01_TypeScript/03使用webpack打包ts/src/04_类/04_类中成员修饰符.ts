//修饰符(类中成员的修饰符)：主要是描述类中的成员(属性，构造函数，方法)的可访问性
//类中的成员都有自己的默认访问属性，public
//public 公共的，类中成员默认修饰符，代表的是共有的，任何实例化对象都可以访问到该成员
//private 私有的,类中成员使用该修饰符修饰，那么外部不可以直接访问该成员包括子类
//protected 受保护的，类中成员使用该修饰符修饰，外部不可以直接访问到该成员但子类可以进行访问
(() => {
  class Person{
    // name:string
    // private name:string
    protected name:string
    constructor(name:string){
      this.name = name
    }
    sayName(){
      console.log('My name is',this.name)
    }
  }
  class Student extends Person{
    constructor(name:string){
      //调用父类构造函数
      super(name)
    }
    sayDadName(){
      console.log(this.name)
    }
  }
  const p1 = new Person('zxr')
  // console.log(p1.name)
  p1.sayName()
  const s1 = new Student('xxh')
  s1.sayDadName()
})()