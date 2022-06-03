(() => {
  // 接口是对象状态（属性）和行为（方法）的抽象（描述）
  // 接口：是一种类型，是一种规范，是一种规则，是一个能力，是一种约束
  // 需求：创建人的对象，需要对人的属性进行一定的约束
  // id是number类型，必须有，只读的
  // name是string类型，必须有
  // age是number类型，必须有
  // sex是string类型，可以没有
  // 定义一个接口，该接口作为p1对象的类型使用，限定或者约束对象中的属性数据
  interface IPerson {
    readonly id: number
    name: string
    age: number
    sex?: string
  }
  // 定义一个对象，该对象的类型就是定义的IPerson接口类型
  const p1: IPerson = {
    id: 123,
    name: 'zxr',
    age: 21
  }
  p1.name = 'xxh'
  p1.sex = 'girl'
  console.log(p1)

})()
