(() => {
  //利用泛型接口实现用户的增删改查
  //定义用户类
  class User {
    id?: number
    name: string
    age: number
    constructor(name: string, age: number, id?: number) {
      this.name = name
      this.age = age
      this.id = id
    }
  }
  //定义一个泛型接口，可以根据传入的用户类型去动态决定操作哪种用户

  //<T>指明要操作哪种类型的用户
  interface IBaseCRUD<T> {
    //定义该类型用户的存储数组
    data: Array<T>
    //指明函数必须传入这种类型的用户，且返回该增加的用户
    addUser: (t: T) => T
    //
    findUserById: (id: number) => T
  }
  //定义操作用户类
  class UserCRUD implements IBaseCRUD<User>{
    data: Array<User> = []
    addUser(user: User): User {
      //如果没有传入userid则生成随机的id
      if(!user.id){user.id = Date.now() + Math.random()}
      this.data.push(user)
      return user
    }
    findUserById(id: number): User {
      return this.data.find(user => user.id === id)
    }
  }
  const userCRUD = new UserCRUD()
  console.log(userCRUD)
  userCRUD.addUser(new User('zxr',21))
  userCRUD.addUser(new User('xxh',20,12345))
  console.log(userCRUD.data)
  const us = userCRUD.findUserById(12345)
  console.log(us)
})()