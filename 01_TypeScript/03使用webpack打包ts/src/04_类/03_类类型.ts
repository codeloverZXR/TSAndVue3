// 类 类型：类的类型，类的类型也可以通过接口实现
(() => {
  // 定义一个接口
  interface IFly{
    // 该方法没有任何的实现(此方法必须在实现该接口的类中进行实现)
    fly()
  }
  class Fly implements IFly{
    fly() {
      console.log('I can fly')
    }
  }
  const p1 = new Fly()
  p1.fly()
  console.log('-----------------------------')
  interface ISwim{
    swim()
  }
  // 一个类可以实现多个接口(一个类可以被多个接口所约束)
  class FlyandSwim1 implements IFly,ISwim{
    fly() {
      console.log('I can fly')
    }
    swim() {
      console.log('I can swim')
    }
  }
  const p2 = new FlyandSwim1()
  p2.fly()
  p2.swim()
  console.log('-----------------------------')
  //一个接口可以继承其它的多个接口
  interface IFlyAndISwim extends IFly,ISwim{
    flyAndSwim()
  }
  class FlyandSwim2 implements IFlyAndISwim{
    fly() {
      console.log('I can fly')
    }
    swim() {
      console.log('I can swim')
    }
    flyAndSwim() {
      console.log('I can fly and swim')
    }
  }
  const p3 = new FlyandSwim2()
  p3.fly()
  p3.swim()
  p3.flyAndSwim()
  //总结：接口和接口之间叫做继承（extends），类和接口之间叫做实现（implements）
})()