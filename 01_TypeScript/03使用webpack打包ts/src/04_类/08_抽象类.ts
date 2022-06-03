(() => {
  // 抽象类：包含了抽象方法（抽象方法一般不会在该类中有具体的实现）,该类也可以声明具体的方法，抽象类是不能
  // 被实例化的，它的作用就是为了被子类所继承去实现内部的抽象方法属性
  abstract class Animal {
    //抽象属性
    abstract name: string
    //抽象方法
    abstract eat()
    //实例化方法
    test() {
      console.log('hello')
    }
  }
  class Dog extends Animal{
    name = '大黄'
    eat() {
      console.log('eating')
    }
  }
  const dog = new Dog()
  console.log(dog.name)
  dog.eat()
  dog.test()
})()
