// -----------------------------------------------------
// Arithmetic Operators
// -----------------------------------------------------

// Assign the value 5 to x
// var x = 5;
// console.log(x)
// Assign the value 2 to y
// var y = 2;
// console.log(y)
// Assign the value x + y to z:
// var z = x + y;
// console.log(z)

// var z = x - y ; 
// console.log(z)

// var z = x * y ; 
// console.log(z)

// var z = x ** y ;
// console.log(z)
// Math.pow(x , y)

// var z = x / y ; 
// console.log(z)

// var z = x % y ;
// console.log(z)

// var z = x++
// console.log(z)

// x = 5 ; 
// var z = ++x
// console.log(z)

// var z = y--
// console.log(z)

// y = 2 ; 
// var z = --y
// console.log(z)

// روش دیگر :‌
// ----------------------------------------------------
// Assignment Operators
// ----------------------------------------------------
// var y = 2 ; 
// var x = 5;
// x += y ; 
// console.log(x)

// var x = 5
// x -= y ; 
// console.log(x)

// var x = 5
// x *= y ; 
// console.log(x)

// var x = 5
// x **= y ; 
// console.log(x)

// var x = 5
// x /= y ; 
// console.log(x)

// var x = 5 ;
// x %= y ; 
// console.log(x)

// ----------------------------------------------------
// add string to string (+)

// let text1 = "mohhamad";
// let text2 = "hasan";
// let text3 = text1 + " " + text2;
// console.log(text3)

// --------------------------------------------------

// var x = 5 + 5;
// console.log(x)
// var y = 5 + 5 + "5";
// console.log(y)
// console.log(typeof(y))
// var z = "Hello" + 5;
// console.log(z)

// -------------------------------------------------
// javascript Comparison Operators : 
// -------------------------------------------------

// var x = 5 ; 
// var y = 10 ; 
// var z = 5 ; 
// var s = "5" ; 

// var name1 = "ali"
// var name2 = "ali"
// ==

// console.log(name1 == name2)
// console.log(x == z)
// console.log(x == s)


// or

// if (x == y) {
//     console.log(true)
// }else {
//     console.log(false)
// }


// ===

// console.log(x === y)
// console.log(x === z)
// console.log(x === s)

// != not equal


// console.log(x != y)
// console.log(x != z)
// console.log(x != s)

// !== not equal value or not equal type

// console.log(x !== y)
// console.log(x !== z)
// console.log(x !== s)

// > & < & >= & <=

// console.log(x < y)
// console.log(x > z)
// console.log(x > s)
// console.log(x >= y)
// console.log(x >= z)
// console.log(x <= s)

// ------------------------------------------------------------
// Conditional Operators
// ------------------------------------------------------------

// ? operator 

// variablename = (condition) ? value1:value2 

// let age = 18 ; 
// let permission = (age >= 18) ? "true" : "false"
// console.log(permission)

// with if  : 
// var result ;
// if (age > 18) {
//     result = true ; 
// }else { 
//     result = false ; 
// }


// ?? operator : 

// var exam = null; // or undefined
// var text = "missing";
// var result = exam ?? text;
// console.log(result)


// .? operator : 

// Create an object:
// const car = {type:"132", model:"1390", color:"white"};

// Ask for car name:

// var carName = car.name ; 
// console.log(carName)

// var carName = car?.name ; 
// console.log(carName)

// var carType = car?.type ;
// console.log(carType) 

// ----------------------------------------------
// JavaScript Logical Operators
// ----------------------------------------------

//  AND
//  true  && true  = true 
//  false && true  = false 
//  false && false = false 
//  true && true && true && false = false 

var x = 6 ; 
var y = 3 ; 

// console.log(x < 10 && y > 1)
// console.log(x < 10 && y < 1)
// console.log(x < 10 && y > 1 && x == 6 && y != 3)

// --------------------------------------------
//  OR : 
//  true  && true  = true 
//  false && true  = true 
//  false && false = false 
//  true && true && true && false = true 


// console.log(x == 5 || y == 5)
// console.log(x == 6 || y == 0)
// console.log(x == 0 || y == 3)
// console.log(x == 6 || y == 3)
// --------------------------------------------

// NOT : 

console.log(!(x === y))
console.log(!(x > y))

// -------------------------------------------------
// JavaScript Type Operators
// -------------------------------------------------

// use : 

// 1 - Converting Strings to Numbers
// 2 - Converting Numbers to Strings
// 3 - Converting Dates to Numbers
// 4 - Converting Numbers to Dates
// 5 - Converting Booleans to Numbers
// 6 - Converting Numbers to Booleans
// -------------------------------------------------

// 1 - Converting Strings to Numbers

// console.log(typeof(Number("3.14")))
// console.log(Number(Math.PI))
// console.log(Number("    "))
// console.log(Number("") )
// console.log(Number("99 88"))
// console.log(Number("mohamad"))

// another number methods  : parseFloat() & parseInt()	

// 2 - Converting Numbers to Strings
var x = 100 ;
console.log(typeof(String(x)))
console.log(String(100))
console.log(String(100 + 50))
console.log(String(((100 + 50) * 60 * 50) ** 2))

// another way 

// console.log(x.toString())
// console.log((100).toString())

// ---------------------------------------------------