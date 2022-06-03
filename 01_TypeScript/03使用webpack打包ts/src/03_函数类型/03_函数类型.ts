// 为了使用接口表示函数类型，我们需要给接口定义一个调用签名
//他就像是一个只有参数列表和返回值类型的函数定义，参数列表里的每个参数都需要名字和类型

(() => {
  interface ISerchFunc {
    (a: string, b: string): boolean
  }
  const searchFunc = function (a: string, b: string): boolean {
    return a.search(b) > -1

  }
  console.log(searchFunc('123', '1'))
})()