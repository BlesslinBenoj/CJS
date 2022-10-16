

function Person (name , age){

  this.name = name;
  this.greeting = function(){

    console.log(`My name is ${this.name}`);

  }

}

Person.call({} , "Blesslin","21")
Person.apply({} , ["Blesslin","21"])


const person = new Person("Blesslin");