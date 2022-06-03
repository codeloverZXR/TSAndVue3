(() => {
  function say(str){
    console.log(str)
  }
  let message = 'hello TS'
  say(message)
}) ()
//总结：ts的文件如果直接书写js语法的代码，那么在html文件中直接引入
// ts文件，在谷歌浏览器中是可以直接使用的

// 如果ts文件中有了ts的语法代码，那么需要把这个ts文件编译成js文件，
// 在html文件中引入编译生成的js文件来使用

// ts文件中的函数中的形参，如果使用了某个类型进行修饰，那么最终在编译
// 的js文件时没有这个类型

// ts文件中的变量使用的时let进行修饰，编译的js文件中的修饰符变成var