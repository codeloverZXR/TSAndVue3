//基本类型
(() => {
  //布尔类型
  let flag: boolean = true
  console.log(flag)
  //数字类型
  let a1: number = 10//十进制
  let a2: number = 0b1010//二进制
  let a3: number = 0o12//八进制
  let a4: number = 0xa//十六进制
  console.log(a1)
  console.log(a2)
  console.log(a3)
  console.log(a4)
  //字符串类型
  let str1: string = '啊哈哈'
  console.log(str1)
  //拼接
  let num: number = 123
  console.log(str1 + num)
  // let tg = 100
  // tg = '222'
  // console.log(tg) //错误
  //总结：ts中变量一开始是什么类型，那么后期赋值的时候，只能使用这个类型的数据，不允许使用其它类型的数据赋值给当前的这个变量
  //例子：let str: string = 'zxr     str = 100 错误
  let num2: number = 200
  num2 = undefined
  num2 = null
  console.log(num2)
  // undefined 和 null 都可以作为其它类型的子类型，可以把undefined 和 null 赋值给其它类型的变量
  // 数组类型

  // 数组定义方式1
  //语法：let变量名:数据类型[] = [值1,值2,值3]
  let list1: number[] = [1, 2, 3, 4, 5]
  console.log(list1)

  //数组定义方式2
  //语法:let变量名:Array<数据类型> = [值1,值2,值3]
  let list2: Array<string> = ['h', 'e', 'l', 'l', 'o']
  console.log(list2)
  //注：数组定义后，里面的数据类型必须和定义数组的时候所声明的数据类型相互一致

  //数组的定义方式3：可以利用元组在一个数组里定义多种类型不同的数据
  let list3: [string, number, boolean] = ['hello', 100, true]
  console.log(list3)
  //注：在定义元组的时候，内部的数据类型的位置和数组的个数在定义元组的时候已经确定了，必须遵守否则报错
  // 枚举类型
  //枚举里面的每个数据值都可以加为元素，每个元素都有自己的编号，编号是从0开始的，依次的递增加1
  enum Color {
    red,
    green = 3,
    blue
  }
  let red: Color = Color.red
  console.log(red)
  console.log(Color.red, Color.green, Color.blue)
  console.log(Color[0])

  console.log("----------------------")
  //any类型
  let str: any = 100
  str = ['hello', '你好']
  console.log(str)
  //当一个数组中要存储多个数据，个数不确定，类型不确定,此时可以使用any类型来定义数组
  let str2: any[] = ['z', 'x', 'r', 100]
  console.log(str2)
  //缺点
  // console.log(str2[3].split(''))

  // void类型，在函数声明的时候，小括号的后面使用:void，代表的是该函数没有任何的返回值
  function show(): void {
    console.log('我是void函数')
    // return 如果要声明一个返回值，只可以是null和undefined
  }
  show()
  console.log(show())

  // object类型
  //定义一个函数，参数是object类型，返回值也是object类型
  function getobj(obj: object): object {
    console.log(obj)
    return {
      name: 'zxr',
      age: 18
    }
  }
  console.log(getobj({ name: 'xxh', age: 19 }))
  console.log(getobj(new String(123)))
  console.log(getobj(String))
  
  //联合类型（Union Types）表示取值可以为多种类型中的一种
  //需求1：定义一个函数得到一个数字或者字符串的值的字符串形式值
  function getString(list:number|string):string{
    return list.toString()
  }
  console.log(typeof getString(123));
  console.log(getString('hello'));
  // 需求2：定义一个函数得到一个数字或者字符串的长度
  function getlength(list:number|string):number{
    // 法1
    // return list.toString().length
    // 法2 利用类型断言 (指明确定这个值就是某个类型，避免编辑器报错)
    //断言指明方式1(<类型名>变量名)
    //断言指明方式2(变量名 as 类型名)
    if((<string>list).length){
      //强制指定list.length存在
      return (list as string).length
    }else{
      return list.toString().length
    }
  }
  console.log(getlength(12345))
  console.log(getlength('abcdefg'))

})()

