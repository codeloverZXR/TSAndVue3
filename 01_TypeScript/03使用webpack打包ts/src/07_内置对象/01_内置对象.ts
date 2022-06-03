(() => {
  //1.ECMAScript的内置对象
  let b: Boolean = new Boolean(true)
  let n: Number = new Number(123)
  let s: String = new String('hello')
  let d: Date = new Date()
  let r: RegExp = /^1/
  let e: Error = new Error('error message')
  console.log(b)
  console.log(n)
//2.bom，dom内置对象
  const div:HTMLElement = document.getElementById('test')
  const div:NodeList = document.querySelectorAll('div')
  document.addEventListener('click',(event:MouseEvent) => {

  })
  const fragment:DocumentFragment = document.createDocumentFragment()
})()