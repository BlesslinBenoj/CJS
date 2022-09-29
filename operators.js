"arithmetic operators "
/*
let number1 = 5
let number2 = 50


console.log(number1 + number2)
console.log(number1 - number2)
console.log(number1 * number2)
console.log(number1 / number2)
console.log(number1 ** number2)
console.log(number1 % number2)



//increment


console.log(++number1)
console.log(number1)

//decrement

console.log(--number1)
console.log(number1)
*/

"asignment operators"
/*
let x = 5

//x = x + 5

x += 5
x -= 5
x *= 5
x /= 5

console.log(x)

*/

"comparision operators"
/*
let x = 5

console.log(x > 6)
console.log(x < 6)
console.log(x <= 6)
console.log(x >= 5)

*/

"equality operators"


//strict equality operator
console.log(1 === 1);
console.log('1' === 1);




//lose equality operator

console.log(1 == 1);
console.log('1' ==1);

"ternary operator"

let age = 21;

let type = age > 18 ? "Adult ticket" : "Child ticket"

console.log(type);




"logical operator"

let highIncome = true;
let CIBILScore = false;


let eligibleperson = highIncome || CIBILScore

let applicationstatus = !eligibleperson


console.log("Loan status: " + eligibleperson);
console.log("Application status: " + applicationstatus);

"operator precedence"

let x = 2 + 5 * 10;

console.log(x);

let x = (2 + 5) * 10;

console.log(x);
