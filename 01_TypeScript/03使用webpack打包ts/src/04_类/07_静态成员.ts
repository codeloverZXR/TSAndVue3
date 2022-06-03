(() => {
  //静态成员：在类中通过static修饰的属性或者方法，那么就是静态的属性和方法，也称之为：静态成员
  //静态成员只能通过类去直接访问修改
  class Person{
    //类中有一个内置的name属性，所以不可以直接用static去修饰name属性
    static name1:string = 'xxh'
    constructor(name:string){
      // this.name1 = name//不能使用this去访问，因为this指的是实例化对象
      Person.name1 = name//只能通过类去访问
    }
    //静态方法
    static sayHello(){
      console.log('Hello')
    }
  }
  const p1 = new Person('zxr')
  // console.log(p1.name1)//无法直接访问类中静态属性
  console.log(Person.name1)
  // p1.sayHello()//无法直接访问类中静态方法
  Person.sayHello()
})()