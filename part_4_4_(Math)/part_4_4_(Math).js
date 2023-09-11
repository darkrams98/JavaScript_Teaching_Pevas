

// Math : 
// The JavaScript Math object allows you to perform mathematical tasks on numbers.

// -----------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------

// note : 

// The Math Object
// Unlike other objects, the Math object has no constructor.

// The Math object is static.

// All methods and properties can be used without creating a Math object first.

// -----------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------

// // Math : 

// console.log(Math)

// // Math.properties : 

// Math.E        // returns Euler's number
// Math.PI       // returns PI
// Math.SQRT2    // returns the square root of 2
// Math.SQRT1_2  // returns the square root of 1/2
// Math.LN2      // returns the natural logarithm of 2
// Math.LN10     // returns the natural logarithm of 10
// Math.LOG2E    // returns base 2 logarithm of E
// Math.LOG10E   // returns base 10 logarithm of E

// // console.log

// console.log(Math.E)
// console.log(Math.PI)
// console.log(Math.SQRT2)
// console.log(Math.SQRT1_2)
// console.log(Math.LN2)
// console.log(Math.LN10)
// console.log(Math.LOG2E)
// console.log(Math.LOG10E)

// -----------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------

// Math Methods

// Math.round(x)	            Returns x rounded to its nearest integer
// Math.ceil(x)	                Returns x rounded up to its nearest integer
// Math.floor(x)	            Returns x rounded down to its nearest integer
// Math.trunc(x)	            Returns the integer part of x (new in ES6)
// Math.random(x)               returns a random number between 0 (inclusive), and 1 (exclusive):
// Math.log(x)                  returns the natural logarithm of x.
// Math.log2(x)                 returns the base 2 logarithm of x
// Math.log10(x)                returns the base 10 logarithm of x.
// Math.abs(x)	                Returns the absolute value of x
// Math.acos(x)	                Returns the arccosine of x, in radians
// Math.acosh(x)	            Returns the hyperbolic arccosine of x
// Math.asin(x)	                Returns the arcsine of x, in radians
// Math.asinh(x)	            Returns the hyperbolic arcsine of x
// Math.atan(x)	                Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
// Math.atan2(y, x)	            Returns the arctangent of the quotient of its arguments
// Math.atanh(x)	            Returns the hyperbolic arctangent of x
// Math.cbrt(x)	                Returns the cubic root of x
// Math.ceil(x)	                Returns x, rounded upwards to the nearest integer
// Math.cos(x)	                Returns the cosine of x (x is in radians)
// Math.cosh(x)	                Returns the hyperbolic cosine of x
// Math.exp(x)	                Returns the value of Ex
// Math.floor(x)	            Returns x, rounded downwards to the nearest integer
// Math.log(x)	                Returns the natural logarithm (base E) of x
// Math.max(x, y, z, ..., n)	Returns the number with the highest value
// Math.min(x, y, z, ..., n)	Returns the number with the lowest value
// Math.pow(x, y)	            Returns the value of x to the power of y
// Math.random()	            Returns a random number between 0 and 1
// Math.round(x)	            Rounds x to the nearest integer
// Math.sign(x)	                Returns if x is negative, null or positive (-1, 0, 1)
// Math.sin(x)	                Returns the sine of x (x is in radians)
// Math.sinh(x)	                Returns the hyperbolic sine of x
// Math.sqrt(x)	                Returns the square root of x
// Math.tan(x)	                Returns the tangent of an angle
// Math.tanh(x)	                Returns the hyperbolic tangent of a number
// Math.trunc(x)	            Returns the integer part of a number (x)

// -----------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------

// Number to Integer

// Math.round(x)	Returns x rounded to its nearest integer
// Math.ceil(x)	    Returns x rounded up to its nearest integer
// Math.floor(x)	Returns x rounded down to its nearest integer
// Math.trunc(x)	Returns the integer part of x (new in ES6)

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// // Math.round(x)

// console.log(Math.round(2.6))
// console.log(Math.round(2.5))
// console.log(Math.round(2.4))

// // ------------------------------------------------------------------------------------
// // ------------------------------------------------------------------------------------

// // Math.ceil(x)

// console.log(Math.ceil(4.6))
// console.log(Math.ceil(4.5))
// console.log(Math.ceil(4.1))
// console.log(Math.ceil(4.01))
// console.log(Math.ceil(-4.9))

// // ------------------------------------------------------------------------------------
// // ------------------------------------------------------------------------------------
// // Math.floor(x)

// console.log(Math.floor(4.9))
// console.log(Math.floor(4.1))
// console.log(Math.floor(-4.1))

// // ------------------------------------------------------------------------------------
// // ------------------------------------------------------------------------------------

// // Math.trunc(x)

// console.log(Math.trunc(4.6))
// console.log(Math.trunc(4.5))
// console.log(Math.trunc(4.4))
// console.log(Math.trunc(-4.5))

// -----------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------

// // Math.sign(x)

// console.log(Math.sign(5))
// console.log(Math.sign(0))
// console.log(Math.sign(-5))

// -----------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------

// // Math.pow(x, y)

// console.log(Math.pow(8, 2))

// -----------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------

// // Math.sqrt(x)

// console.log(Math.sqrt(64))

// -----------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------

// // Math.abs()

// console.log(Math.abs(5))
// console.log(Math.abs(0))
// console.log(Math.abs(-5))

// -----------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------

// // Math.sin()

// // returns the sine (a value between -1 and 1) of the angle x (given in radians) 
// // به رادیان خروجی میدهد

// console.log(Math.sin(0))
// console.log(Math.sin(30))
// console.log(Math.sin(90))
// console.log(Math.sin(180))
// console.log(Math.sin(270))
// console.log(Math.sin(360))

// // or : 

// // Angle in radians = Angle in degrees x PI / 180.

// console.log(Math.sin(0 * Math.PI / 180))
// console.log(Math.sin(30 * Math.PI / 180))
// console.log(Math.sin(90 * Math.PI / 180))
// console.log(Math.sin(180 * Math.PI / 180))
// console.log(Math.sin(270 * Math.PI / 180))
// console.log(Math.sin(360 * Math.PI / 180))

// -----------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------

// // Math.cos()

// // returns the sine (a value between -1 and 1) of the angle x (given in radians) 
// // به رادیان خروجی میدهد

// console.log(Math.cos(0))
// console.log(Math.cos(30))
// console.log(Math.cos(90))
// console.log(Math.cos(180))
// console.log(Math.cos(270))
// console.log(Math.cos(360))

// // or : 

// // Angle in radians = Angle in degrees x PI / 180.

// console.log(Math.cos(0 * Math.PI / 180))
// console.log(Math.cos(30 * Math.PI / 180))
// console.log(Math.cos(90 * Math.PI / 180))
// console.log(Math.cos(180 * Math.PI / 180))
// console.log(Math.cos(270 * Math.PI / 180))
// console.log(Math.cos(360 * Math.PI / 180))

// -----------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------

// // Math.max()

// console.log(Math.max(100 , 50 , 0 , -50 , -100))
// console.log(Math.max(-200 , -150 , -100 , -50 , -1))

// -----------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------

// // Math.min()

// console.log(Math.min(100 , 50 , 0 , -50 , -100))
// console.log(Math.min(-200 , -150 , -100 , -50 , -1))

// -----------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------

// // Math.random(x)

// console.log(Math.random())

// -----------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------

// // A deeper look to Math.random()

// console.log(Math.random())

// // ----------------------------------------------------------------
// // ----------------------------------------------------------------

// // random number 0 - 9

// console.log(Math.random() * 10)
// console.log(Math.floor(Math.random() * 10))

// // ----------------------------------------------------------------
// // ----------------------------------------------------------------

// // random number 0 - 10

// console.log(Math.random() * 11)
// console.log(Math.floor(Math.random() * 11))

// // ----------------------------------------------------------------
// // ----------------------------------------------------------------

// // random number 0 - 99

// console.log(Math.random() * 100)
// console.log(Math.floor(Math.random() * 100))

// // ----------------------------------------------------------------
// // ----------------------------------------------------------------

// // random number 0 - 100

// console.log(Math.random() * 101)
// console.log(Math.floor(Math.random() * 101))

// // ----------------------------------------------------------------
// // ----------------------------------------------------------------

// // random number 1 - 10
// console.log(Math.floor(Math.random() * 10) + 1)

// // number number 1 - 100
// console.log(Math.floor(Math.random() * 100) + 1)

// -----------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------

// // A Proper Random Function

// // This JavaScript function always returns a random number between min (included) and max (excluded):

// function getRndInteger_1(min, max) {
//     return Math.floor(Math.random() * (max - min) ) + min;
// }

// console.log(getRndInteger_1(10 , 20)) // 10 - 19 


// // This JavaScript function always returns a random number between min and max (both included):

// function getRndInteger_2(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }

// console.log(getRndInteger_2(10 , 20)) // 10 - 20 

// -----------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------
