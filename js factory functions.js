function createPerson(name){

  return {

    name : name,
    greeting : function(){
      let msg = `My name is ${this.name}`;
      console.log(msg);

    }
  };
}

let Blesslin = createPerson("Blesslin");
let Jerry = createPerson("jerry")

Blesslin.greeting();
Jerry.greeting();