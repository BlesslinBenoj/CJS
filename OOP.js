//OBJECT ORIENTED PROGRAMMING IN JA


let person = {

  name: "Blesslin benoj",
  age: 21,
  interest: ["creating,learning new things."],
  address: {
    city: "chennai",
    state: "tamil nadu",

  },
  greeting: function () {
    //let msg = "my name is "+ name +" i love "+ interest;
    let msg = `my name is ${this.name},i love ${this.interest}`;

    console.log(msg);
  },
};

console.log(person.greeting());
