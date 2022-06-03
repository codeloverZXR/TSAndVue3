(() => {
  //可选参数：函数在声明的时候，内部的参数使用了?进行修饰，表示这个参数可以传入也可以不传入
  //默认参数：函数在声明的时候，内部的参数有了自己的默认值，不传入值时则函数会使用这个默认值
  //剩余参数(rest参数)：剩余参数是放在函数声明的时候所有的参数的最后
  //需求：
  //定义一个函数，传入姓氏和名字，可以得到姓名
  //如果不传入任何内容，则返回默认的姓氏
  //如果只传入姓氏，那么只返回姓氏
  //如果传入姓氏和名字，则返回姓名
  const getFullName = function (firstName: string = 'z', lastName?: string): string {
    if (lastName) {
      return firstName + '_' + lastName
    } else {
      return firstName
    }
  }
  console.log(getFullName())
  console.log(getFullName('诸葛'))
  console.log(getFullName('诸葛', '孔明'))
  const test = function (str1: string, str2: string, ...args:string[]) {
    console.log(str1)
    console.log(str2)
    console.log(args)
  }
  test('a','b','c','d','e','f')
})()