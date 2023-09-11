// let x = "ali";

// let x = 0;
// SyntaxError: 'x' has already been declared

// ------------------------------------------

var x = "ali";
var x = 0;

// this is ok 

// ------------------------------------------

// Block Scope

{
    let x = 2;
}
// x can NOT be used here

// ------------------------------------------

{
    var x = 2;
}

// x CAN be used here
//-------------------------------------------

var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2

// ------------------------------------------

let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10

// --------------------------------------------
// const 
// --------------------------------------------


// Cannot be Reassigned
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error

// --------------------------------------------

// Correct
// const PI = 3.14159265359;

// Incorrect
// const PI;
// PI = 3.14159265359;

// ---------------------------------------------

// can do : 

// You can create a constant array:
const cars = ["ali", "reza", "mohamad"];

// You can change an element:
cars[0] = "hasan";

// You can add an element:
cars.push("mohsen");

// ----------------------------------------------

// cant do : 
// const cars = ["Saab", "Volvo", "BMW"];

// cars = ["Toyota", "Volvo", "Audi"];  

// ----------------------------------------------

// can do 

// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

// -------------------------------------------------

// cant do

const car = {type:"Fiat", model:"500", color:"white"};

car = {type:"Volvo", model:"EX60", color:"red"};