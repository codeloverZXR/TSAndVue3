(() => {
  class Animal{
    name:string
    constructor(name:string){
      this.name = name
    }
    run(){
      console.log('I am ',this.name,'I can run',0,'m')
    }
  }
  class Dog extends Animal{
    constructor(name:string){
      super(name)
    }
    run(){
      console.log('I am ',this.name,'I can run',5,'m')
    }
  }
  class Pig extends Animal{
    constructor(name:string){
      super(name)
    }
    run(){
      console.log('I am ',this.name,'I can run',10,'m')
    }
  }
  const dog:Animal = new Dog('大黄')
  const pig:Animal = new Pig('八戒')
  function Runing(aml:Animal){
    aml.run()
  }
  Runing(dog)
  Runing(pig)
})()