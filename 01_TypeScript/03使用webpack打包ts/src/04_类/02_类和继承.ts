(() => {
  class Person {
    name: string
    age: number
    sex: string
    constructor(name: string, age: number, sex: string) {
      this.name = name
      this.age = age
      this.sex = sex
    }
    sayHello() {
      console.log('我叫', this.name, '今年', this.age, '岁', '性别', this.sex)
    }
  }
  const p1 = new Person('zxr', 21, '男')
  p1.sayHello()
  class Student extends Person {
    id:string
    constructor(name: string, age: number, sex: string, id: string) {
      super(name, age, sex)
      this.id = id
    }
  hobbies(){
    console.log('这是我的爱好')
    super.sayHello()
  }
  }
  const s1 = new Student('xxh',21,'女','111')
  s1.hobbies()
  //总结：类和类之间如果要有继承关系，使用extends关键字
  //子类中可以调用父类中的构造函数，使用的是super关键字（包括调用父类中定义的方法，也可以使用super.父类方法名的方式）
  //子类中可以重写父类中的方法
})()