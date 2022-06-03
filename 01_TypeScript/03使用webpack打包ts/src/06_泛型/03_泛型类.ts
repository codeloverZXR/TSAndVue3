(() => {
  class Person<T>{
    message: T
    add: (x: T, y: T) => T
  }
  const p1 = new Person<string>()
  p1.message = 'hello'
  p1.add = function (x, y) {
    return x + y
  }
  console.log(p1.add('zxr', 'xxh'), p1.message)
  const p2 = new Person<number>()
  p2.message = 11
  p2.add = function (x, y) {
    return x + y
  }
  console.log(p2.add(11, 12), p2.message)
})()