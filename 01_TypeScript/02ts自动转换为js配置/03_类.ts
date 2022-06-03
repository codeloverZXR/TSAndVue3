(() => {
  interface IPerson {
    firstName: string
    lastName: string
  }
  class Person {
    firstName: string
    lastName: string
    fullName: string
    constructor(firstName, lastName){
      this.firstName = firstName
      this.lastName = lastName
      this.fullName = firstName + '_' + lastName
    }
  }
  function getFullName(person:IPerson){
    return person.firstName + '-----' +person.lastName
  }
  const p1 = new Person('张','欣睿')
  console.log(p1.fullName)
  console.log(getFullName(p1))
  
})()