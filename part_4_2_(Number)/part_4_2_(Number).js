// // number type : 

// // def number : 

// var x = 3.14;    // A number with decimals
// var y = 3;       // A number without decimals

// console.log(typeof(x))
// console.log(y)
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

// // def number with scientific (exponent) notation:

// var x = 5e5;    // 500000
// var y = 5e-5;   // 0.00005

// console.log(x)
// console.log(y)
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

// // Integer Precision دقت در اعداد صحیح 

// var x = 999999999999999;   // x will be 999999999999999
// var y = 9999999999999999;  // y will be 10000000000000000

// var sx = '999999999999999'
// var sy = '9999999999999999'

// console.log(x)
// console.log(y)

// console.log(sx.length)
// console.log(sy.length)

// // or 

// var y = 56842547952145645795 // 56842547952145646000

// console.log(y)

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

// // decimal number precision دقت اعداد اعشاری

// var x = 0.5846246554625462644221164
// var sx = '0.5846246554625462644221164'

// console.log(x)
// console.log(sx)

// var converted_x = x.toString()

// console.log(converted_x)
// console.log(converted_x.length)

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

// // Floating Precision : اشتباه در انجام عملیاد در اعداد اعشاری

// var x = 0.2 + 0.1 ; 

// console.log(x)    // 0.30000000000000004

// // so we have : 

// var x = 0.2 + 0.1 ; 

// console.log(x == 0.3)

// // right way : 

// var x = (0.2 * 10 + 0.1 * 10) / 10 ; 

// console.log(x)

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

// // add number and string : 

// // 1 - number + number 

// var num1 = 20 ; 
// var num2 = 40 ; 

// var sum = num1 + num2 ; 

// console.log(sum)

// // --------------------------------------------

// // 2 - string + string 

// var num1 = '20' ; 
// var num2 = '40' ; 

// var sum = num1 + num2 ; 

// console.log(sum)

// // --------------------------------------------

// // 3 - string + number

// var num1 = '20' ; 
// var num2 = 40 ; 

// var sum = num1 + num2 ; 

// console.log(sum)

// // --------------------------------------------

// // 4 - string + number + number : 


// var num1 = 20 ; 
// var num2 = 40 ; 

// var sum = 'the answer is : ' + num1 + num2 ; 

// console.log(sum)

// // --------------------------------------------

// // 5 - number + number + string : 

// var num1 = 20 ; 
// var num2 = 40 ; 

// var sum = num1 + num2 + " is the sum " ; 

// console.log(sum)

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

// //  numeric operations convert string to number except sum (+)

// // work : 
// var num1 = "50"
// var num2 = "5"

// var division = num1 / num2  // 10

// console.log(division)
// // --------------------------------------------

// // work 
// var num1 = "50"
// var num2 = "5"

// var multiplied = num1 * num2  

// console.log(multiplied)
// // --------------------------------------------

// // work 
// var num1 = "50"
// var num2 = "5"

// var minus = num1 - num2 

// console.log(minus)
// // --------------------------------------------


// // -----------------------------------------------------------------------------------------------
// // -----------------------------------------------------------------------------------------------

// // what is NaN (Not a Number)

// var num1 = 15
// var str = "banana"

// var division = num1 / str

// console.log(division)

// // --------------------------------------------

// // use Number class to save string : 

// var num1 = Number("banana")

// console.log(num1)

// // --------------------------------------------
// // use NaN in numeric operations

// var notNum1 = NaN ; 
// var num1 = 10 ; 

// var sum = notNum1 + num1

// console.log(sum)

// // --------------------------------------------

// var notNum1 = NaN ; 

// console.log(typeof(NaN))
// // or 
// console.log(typeof(notNum1))

// // --------------------------------------------
// // find NaN : 

// var notNum1 = NaN 

// console.log(isNaN(notNum1))

// // --------------------------------------------

// // Infinity and -Infinity

// var division = 1 / 0 ; 

// console.log(division)

// // or 

// var division = -1 / 0 ; 

// console.log(division)

// // type 
// console.log(typeof(division))

// // -----------------------------------------------------------------------------------------------
// // -----------------------------------------------------------------------------------------------

// // Number and object : 

// var num1 = 10 ; 

// console.log(typeof(num1))

// var num2 = new Number(15) ; 

// console.log(typeof(num2))

// // --------------------------------------------

// // use === & ==

// var num1 = 15 ; 
// var num2 = new Number(15)

// console.log(num1 == num2)
// console.log(num1 === num2)

// // --------------------------------------------

// // Comparing two JavaScript objects always returns false.

// var num1 = new Number(5)
// var num2 = new Number(5)

// console.log(num1 == num2)
// console.log(num1 === num2)

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

// number Properties

// Property	            Description

// EPSILON	            The difference between 1 and the smallest number > 1.
// MAX_VALUE	        The largest number possible in JavaScript
// MIN_VALUE	        The smallest number possible in JavaScript
// MAX_SAFE_INTEGER 	The maximum safe integer (253 - 1)
// MIN_SAFE_INTEGER	    The minimum safe integer -(253 - 1)
// POSITIVE_INFINITY	Infinity (returned on overflow)
// NEGATIVE_INFINITY	Negative infinity (returned on overflow)
// NaN              	A "Not-a-Number" value

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

// // EPSILON

// var num1 = Number.EPSILON 

// console.log(num1)

// // --------------------------------------------

// // MAX_VALUE

// var num1 = Number.MAX_VALUE;

// console.log(num1)

// // --------------------------------------------
// // Number properties belong to the JavaScript Number Object.

// // wrong way : 
// var num1 
// var num2 = num1.MAX_VALUE ; 

// console.log(num2)

// // --------------------------------------------

// // MIN_VALUE

// var num1 = Number.MIN_VALUE;

// console.log(num1)

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

// Method              	Description
// toString()       	Returns a number as a string
// toExponential()	    Returns a number written in exponential notation
// toFixed()	        Returns a number written with a number of decimals
// toPrecision()   	    Returns a number written with a specified length
// ValueOf()	        Returns a number as a number    

// --------------------------------------------

// // method_1 : toString() 

// var price = 5800000
// console.log(typeof(price))
// console.log(price.toString()) ;
// console.log(typeof(price.toString()))

// console.log((500).toString())

// // or 

// console.log((10 + 20).toString())

// --------------------------------------------

// // method_2 : toExponential()

// var num1 = 4.444
// var num2 = 5.555
// var num3 = 6.666

// console.log(num1.toExponential())
// console.log(num1.toExponential(2))
// console.log(num1.toExponential(8))
// console.log(typeof(num1.toExponential()))

// // turn to number : 

// num1 = num1.toExponential()
// console.log(typeof(num1))

// num1 = new Number(num1).valueOf()
// console.log(num1)
// console.log(typeof(num1))
// // or 

// console.log(num2.toExponential(2))

// // or 

// console.log(num3.toExponential(2))

// --------------------------------------------

// // method_3 : toFixed()

// var num1 = 4.444
// var num2 = 5.555
// var num3 = 6.666

// console.log(num2.toFixed())
// console.log(num2.toFixed(0))
// console.log(num2.toFixed(2))
// console.log(num2.toFixed(4))
// console.log(num2.toFixed(6))

// // or 

// console.log(num1.toFixed(2))

// // or 

// console.log(num3.toFixed(2))


// // type of 

// num1 = num1.toFixed(2)

// console.log(num1)
// console.log(typeof(num1))

// // turn to Number : 

// num1 = new Number(num1).valueOf()

// console.log(num1)
// console.log(typeof(num1))

// --------------------------------------------
// // method_4 : toPrecision()

// var num1 = 4.444
// var num2 = 5.555
// var num3 = 6.666

// console.log(num2.toPrecision())
// console.log(num2.toPrecision(2))
// console.log(num2.toPrecision(4))
// console.log(num2.toPrecision(6))

// // or 

// console.log(num1.toPrecision(2))

// // or 

// console.log(num3.toPrecision(2))

// // type of

// num1 = num1.toPrecision()
// console.log(typeof(num1))

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

// turn number to number 

// 1 - string to number 
// 2 - object to number 

// --------------------------------------------
// // string to number : 

// var stringNum = "9898"


// // way 1 : 
// console.log(typeof(stringNum))

// var num1 = Number(stringNum)
// console.log(num1)
// console.log(typeof(num1))

// // way 2 : 

// var num1 = parseInt(stringNum)

// console.log(num1)
// console.log(typeof(num1))

// // way 3 : 

// var num1 = parseFloat(stringNum)

// console.log(num1)
// console.log(typeof(num1))

// --------------------------------------------

// // object to number : 

// var objectNum = new Number(9898)

// console.log(typeof(objectNum))

// // convert :

// var num1 = Number(objectNum)

// console.log(num1)
// console.log(typeof(num1))

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

// Method	                    Description
// Number.isInteger()	        Returns true if the argument is an integer
// Number.isSafeInteger()	    Returns true if the argument is a safe integer
// Number.parseFloat()      	Converts a string to a number
// Number.parseInt()	        Converts a string to a whole number

// --------------------------------------------

// // 1 - Number.isInteger()

// var num1 = "9898"
// var num2 = "ninety eight"
// var num3 = 98
// var num4 = new Number(98)
// var num5 = 98.98

// console.log(Number.isInteger(num1))
// console.log(Number.isInteger(num2))
// console.log(Number.isInteger(num3))
// console.log(Number.isInteger(num4))
// console.log(Number.isInteger(num5))

// --------------------------------------------

// // 2 - Number.isSafeInteger()

// var num1 = 98009800
// var num2 = 987654321123456789

// console.log(Number.isSafeInteger(num1))
// console.log(Number.isSafeInteger(num2))

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------