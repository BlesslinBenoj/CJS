

//dynamic objects


const person = {

  name : "Blesslin benoj"

}

person.age = 21;
person.greeting = function(){}


delete person.age;
delete person.greeting;

console.log(person);