//函数重载：函数名字相同，函数的参数及个数不同
(() => {
  //需求：定义一个add函数，它可以接收两个string类型的参数进行拼接，也可以接收2个number类型的参数进行相加
  function add(x: string, y: string): string
  function add(x: number, y: number): number
  function add(x: string | number, y: string | number): string | number {
    // return x + y
    if (typeof x === 'string' && typeof y === 'string') {
      return x + y
    } else if (typeof x === 'number' && typeof y === 'number') {
      return x + y
    }
  }
  //我们的需求只有上两种情况，而输出却有四种情况，可以利用函数重载去除其中两种情况
  console.log(add('z', 'xr'))
  console.log(add(11, 12))
  //加入重载函数后报错
  // console.log(add(11, 'zxr'))
  // console.log(add('xxh', 11))
})()