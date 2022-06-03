(() => {
  //泛型:在定义函数，接口，类的时候不能预先确定要使用的类型，而是在使用函数，接口，类的时候才能确定数据的类型
  //需求：定义一个函数，传入两个参数，第一个参数是数据，第二个参数是数量，函数的作用：根据数量产生对应数据个数的数组
  // function getArr(value: any, count: number): any[] {
  //   const arr: any[] = []
  //   for (let i = 0; i < count; i++) {
  //     arr.push(value)
  //   }
  //   return arr
  // }
  // const arr1 = getArr(123.456,3)
  // console.log(arr1)
  //实现方式二
  function getArr<T>(value: T, count: number): T[] {
    const arr: T[] = []
    for (let i = 0; i < count; i++) {
      arr.push(value)
    }
    return arr
  }
  //使用泛型的好处：可以根据输入的数据类型动态的决定参数类型和生成的数组类型
  const arr1 = getArr(123.456, 3)
  console.log(arr1)
  const arr2 = getArr('zxr',4)
  console.log(arr2)
  //使用多个泛型
  function getArr2<K,L>(value1:K,value2:L):[K,L]{
    return [value1,value2]
  }
  const arr3 = getArr2('zxr',21)
  console.log(arr3)
})()