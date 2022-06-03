(() => {
  //如果我们直接对一个泛型参数取length属性，会报错，因为这个泛型根本就不知道它有这个属性
  //定义一个接口，用来约束将来的某个类型中必须要有length这个属性
  interface ILength{
    //接口中有一个属性length
    length:number
  }
  //让自定义的T类型继承这个接口，这样T类型就必须满足拥有这个接口的一些属性
  function getLength<T extends ILength>(x:T):number{
    return x.length
  }
  console.log(getLength<string>('hello'))
})()