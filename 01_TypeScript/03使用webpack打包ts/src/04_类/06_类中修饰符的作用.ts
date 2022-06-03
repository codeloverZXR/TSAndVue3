(() => {
  // readonly修饰符，首先是一个关键字，对类中的属性成员进行修饰，修饰后，该属性成员就不能在外部被随意的进行修改了
  //只有构造函数中可以对只读的属性成员的数据进行修改
  // class Person {
  //   readonly name: string
  //   constructor(name: string) {
  //     this.name = name
  //   }
  //   test() {
  //     this.name = '123'//无法访问readonly修饰符属性
  //   }
  // }
  // const p1 = new Person('zxr')
  // console.log(p1.name)

  // class Person{
  //   // 这种在构造函数中的形参加入修饰符的方式相当于给这个类中加入了这种属性
  //   constructor(readonly name:string){
  //     // this.name = name 
  //   }
  //   //注意，该方法产生的只读属性是可以被类内部的方法直接访问的，但外部依然不能访问
  //   test(){
  //     console.log(this.name)
  //   }
  // }
  // const p1 = new Person('hello')
  // console.log(p1.name)
  // // p1.name = 'hi'不能访问
  // p1.test()
  class Person {
    constructor(private name:string){
      
    }
    test(){
      console.log(this.name)
    }
  }
  const p1 = new Person('ZXR')
  // console.log(p1.name)
  p1.test()
})()