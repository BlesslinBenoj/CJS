function createPerson(name){

  return {

    name,
    greeting() {

      let msg = `My name is ${this.name}`;
      console.log(msg);

    }
  };
}

let blesslin = createPerson("Blesslin");
let jerry = createPerson("Jerry")

blesslin.greeting();
jerry.greeting();