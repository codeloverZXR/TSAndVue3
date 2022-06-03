(() => {
  class Person{
    firstName:string
    lastName:string
    constructor(firstName:string,lastName:string){
      this.firstName = firstName
      this.lastName = lastName
    }
    //读取器----负责读取数据
    get FullName(){
      console.log('get方法调用')
      return this.firstName +'_'+this.lastName
    }
    //设置器----负责设置数据（修改）
    set FullName(str:string){
      console.log('set方法调用')
      const names = str.split('_')
      this.firstName = names[0]
      this.lastName = names[1]
    }
  }
  const p1 = new Person('z','xr')
  console.log(p1.firstName)
  console.log(p1.lastName)
  console.log(p1.FullName)
  p1.FullName = 'x_xh'
  console.log(p1.firstName)
  console.log(p1.lastName)
  console.log(p1.FullName)
})()