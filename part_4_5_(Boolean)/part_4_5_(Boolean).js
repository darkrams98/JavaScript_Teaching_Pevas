
// Boolean : 
// A JavaScript Boolean represents one of two values: true or false.

// Very often, in programming, you will need a data type that can only have one of two values, like

// YES / NO
// ON / OFF
// TRUE / FALSE

// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------

// // define bool value : 
// var myBool = false ; 

// console.log(typeof(myBool))

// // or 

// var myBool = new Boolean(false)

// console.log(typeof(myBool))

// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------

// // compare object boolean 

// var myBool1 = new Boolean(false)
// var myBool2 = new Boolean(false)

// console.log(myBool1.valueOf() == myBool2.valueOf())
// console.log(myBool1 === myBool2)

// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------

// // convert Boolean object to Boolean datatype : 

// // -----------------------------------------------------------------
// // -----------------------------------------------------------------

// // convert object to Boolean :

// var myBool = new Boolean(true)

// console.log(typeof(myBool))

// var convertedBool = myBool.valueOf()
// console.log(typeof(convertedBool))

// // or : 

// var convertedBool = Boolean(myBool)
// console.log(typeof(convertedBool))

// // -----------------------------------------------------------------
// // -----------------------------------------------------------------

// // convert bolean to object 

// var myBool = true ; 

// console.log(typeof(myBool))

// var convertedObject = new Boolean(myBool)
// console.log(typeof(convertedObject))



// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------

// var myBool = new Boolean()
// console.log(myBool)
// console.log(typeof(myBool))

// // and 

// console.log(Boolean)
// console.log(typeof(Boolean))

// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------

// // The Boolean() Function 

// // exam : 

// console.log(Boolean(1 > 2))
// console.log(Boolean(1 < 2))

// // OR : 

// console.log(1 > 2)
// console.log(1 < 2)

// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------

// // operator (==)

// console.log(20 == 2 * 10)

// // or 

// var myNum1 = 10 ; 
// var myNum2 = 15 ; 

// var result = new Boolean(myNum1 + 5 == myNum2)
// console.log(result)
// console.log(result.valueOf())

// // or 

// var result = new Boolean()
// result = myNum1 + 5 == myNum2

// console.log(result)

// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------

// // Everything With a "Value" is True

// console.log(Boolean(0.000001))
// console.log(Boolean(-0.000001))
// console.log(Boolean(7 + 7 - 4))
// console.log(Boolean("Ali"))

// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------

// // Everything Without a "Value" is False

// console.log(Boolean(0))
// console.log(Boolean(-0))
// console.log(Boolean(""))

// var myVar
// console.log(myVar)
// console.log(Boolean(myVar))
// console.log(Boolean(null))
// console.log(Boolean(NaN))

// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------

// // note : 
// // compare object with boolean

// var myBool1 = true
// var myBool2 = new Boolean(true)

// // == operator : 

// console.log(myBool1 == myBool2)

// // === operator : 

// console.log(myBool1 === myBool2)

// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------

// // compare object with object 

// var myBool1 = new Boolean(false)
// var myBool2 = new Boolean(false)

// // == operator
// console.log(myBool1 == myBool2)

// // === operator 
// console.log(myBool1 === myBool2)

// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------

// JavaScript Boolean Methods and Properties

// constructor	    Returns the function that created JavaScript's Boolean prototype
// prototype	    Allows you to add properties and methods to the Boolean prototype
// toString()	    Converts a boolean value to a string, and returns the result
// valueOf()	    Returns the primitive value of a boolean

// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------

// // constructor	    Returns the function that created JavaScript's Boolean prototype

// // Definition and Usage
// // The constructor property returns the function that created the Boolean prototype.

// // For JavaScript booleans the constructor property returns:

// var myBool = new Boolean(false) 
// var boolConstructor = myBool.constructor ; 

// console.log(boolConstructor)

// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------

// // prototype	    Allows you to add properties and methods to the Boolean prototype

// // prototype : متد های داخلی آبجکت ها 

// // -----------------------------------------------------------------
// // -----------------------------------------------------------------

// // exam : 
// // Make a new method for JavaScript booleans:

// Boolean.prototype.isLogedIn = function () {
//     if (this.valueOf() == true ) {
//         return "اجازه ورود داده شد"
//     }else {
//         return "لطفا وارد شوید"
//     }
// }

// // use created prototype 

// var logIn = new Boolean(true) ; 
// var x = new Boolean(false)

// console.log(logIn)
// console.log(logIn.isLogedIn())
// console.log(x.isLogedIn())

// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------

// // toString()	    Converts a boolean value to a string, and returns the result

// var myBool = false ; 
// var myBool = new Boolean(false)

// console.log(myBool)
// console.log(typeof(myBool))

// var myBoolStr = myBool.toString()
// console.log(myBoolStr)
// console.log(typeof(myBoolStr))

// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------

// // valueOf()	    Returns the primitive value of a boolean

// var myBool = new Boolean(true)

// console.log(myBool)
// console.log(typeof(myBool))

// console.log(myBool.valueOf())
// console.log(typeof(myBool.valueOf()))
// ---------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------
