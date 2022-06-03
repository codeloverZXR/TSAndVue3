(() => {
  //js中的函数
  // //函数的声明
  // function fun1(num1,num2){
  //   return num1 + num2
  // }
  // //函数的定义
  // const fun2 = function (num1,num2) {
  //   return num1 + num2
  // }
  //ts中的函数,需要指明传入的参数类型和函数返回值类型
  //函数的声明
  function fun1(num1: string, num2: string): string {
    return num1 + num2
  }
  //函数的定义
  const fun2 = function (num1: number, num2: number): number {
    return num1 + num2
  }
  //完整写法
  const fun3: (num1: number, num2: number) => number = function (num1: number, num2: number): number {
    return num1 + num2
  }
})()