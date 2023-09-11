
// Errors in javascript : 

// The try statement defines a code block to run (to try).

// The catch statement defines a code block to handle any error.

// The finally statement defines a code block to run regardless of the result.

// The throw statement defines a custom error.

// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------

// syntax : 

// try {
//     tryStatements

//   } catch (exceptionVar) {

//     catchStatements

//   } finally {

//     finallyStatements
//   }

// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------

// another way to use : 

//  try ... catch
//  try ... catch   ... finally

// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------

// // error object : 

// // name	    Sets or returns an error name
// // message	Sets or returns an error message (a string)

// // name properties  : 

// try {
//     consol.log("Hi there !")
// } catch(err) {
//     console.log(err.name)
// }

// // message properties : 

// try {
//     consol.log("Hi there !")
// } catch(err) {
//     console.log(err.message)
// }

// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------

// // create custom errors_1 : 

// function chengeVal () {

//     try {
//         var inputValue =  document.getElementById("input_1").value

//         if (inputValue < 50) {
//             throw "عدد کوچک تر از ۵۰ است"
//         }else if (inputValue > 100) {
//             throw "عدد بزرگ تر از ۱۰۰ است"
//         }else if (inputValue > 50 && inputValue < 100) {
//             throw "عدد وارد شده صحیح است"
//         }
//     }catch(err) {
//         console.log(err)
//     }
// }

// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------

// // create custom errors_2 :

// var err = {
//     name : "" , 
//     message : ""
// }


// function chengeVal () {

//     try {
//         var inputValue =  document.getElementById("input_1").value

//         if (inputValue < 50) {
//             err.name = "failure"
//             err.message = "عدد کوچک تر از ۵۰ است"
//             throw err
//         }
//          if (inputValue > 100) {
//             err.name = "failure"
//             err.message = "عدد بزرگ تر از ۱۰۰ است"
//             throw err
//         }
//          if (inputValue > 50 && inputValue < 100) {
//             err.name = "success"
//             err.message = "عدد وارد شده صحیح است"
//             throw err
//         }

//     }catch(err) {
//         if (err.name == "success") {
//             document.getElementById("correct-container").style.display = "flex"
//             document.getElementById("correct-text").innerHTML = err.message
//             document.getElementById("err-container").style.display = "none"

//             console.log(err)
//         } else if (err.name == "failure") {
//             document.getElementById("err-container").style.display = "flex"
//             document.getElementById("err-text").innerHTML = err.message
//             document.getElementById("correct-container").style.display = "none"

//             console.log(err)
//         }
//     }
// }

// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------

//  try ... catch   ... finally


// syntax : 

// try {
//     Block of code to try
//   }
//   catch(err) {
//     Block of code to handle errors
//   }
//   finally {
//     Block of code to be executed regardless of the try / catch result
//   }

// ----------------------------------------------------------------

// // create custom errors_2 :

// var err = {
//     name : "" , 
//     message : ""
// }


// function chengeVal () {

//     try {
//         var inputValue =  document.getElementById("input_1").value

//         if (inputValue < 50) {
//             err.name = "failure"
//             err.message = "عدد کوچک تر از ۵۰ است"
//             throw err
//         }
//          if (inputValue > 100) {
//             err.name = "failure"
//             err.message = "عدد بزرگ تر از ۱۰۰ است"
//             throw err
//         }
//          if (inputValue > 50 && inputValue < 100) {
//             err.name = "success"
//             err.message = "عدد وارد شده صحیح است"
//             throw err
//         }

//     }catch(err) {
//         if (err.name == "success") {
//             document.getElementById("correct-container").style.display = "flex"
//             document.getElementById("correct-text").innerHTML = err.message
//             document.getElementById("err-container").style.display = "none"

//             console.log(err)
//         } else if (err.name == "failure") {
//             document.getElementById("err-container").style.display = "flex"
//             document.getElementById("err-text").innerHTML = err.message
//             document.getElementById("correct-container").style.display = "none"

//             console.log(err)
//         }
//     } finally {
//         document.getElementById("p01").innerHTML = inputValue
//         document.getElementById("result").style.display = "flex"
//     }
// }

// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------


// another type error : 

// Error Name   	Description

// EvalError    	An error has occurred in the eval() function
// RangeError   	A number "out of range" has occurred
// ReferenceError	An illegal reference has occurred
// SyntaxError  	A syntax error has occurred
// TypeError	    A type error has occurred
// URIError	        An error in encodeURI() has occurred

// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------

// // // RangeError : 


// var myNum = 5 ; 

// try { 
//     myNum.toPrecision(400); 
// } catch(err) {
//     console.log(err.name)
//     console.log(err.message)
// }

// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------

// // Reference Error : 

// var myNum = 15 ; 

// try {
//     myNum = anotherNum + 1 ; 
// } catch(err) {
//     console.log(err.name)
//     console.log(err.message)
// }

// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------

// // SyntaxError : 

// try {
//     eval("console.log('Hi there')")
// }catch(err) {
//     console.log(err.name)
//     console.log(err.message)
// }

// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------

// Type Error : 

var myNum = 15 ; 

try {
    myNum.toUpperCase() ; 
}catch(err) {
    console.log(err.name)
    console.log(err.message)
}

// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------

// Non-Standard Properties and Methods

// Property        	Description

// arguments       	Deprecated
// caller	        Deprecated
// columnNumber    	Firefox only
// description     	Microsoft only
// displayName     	Firefox only
// fileName	        Firefox only
// lineNumber	    Firefox only
// number          	Microsoft only
// stack	        Firefox only
// Methods	        Description
// evalError()	    Deprecated
// internalError() 	Firefox only
// toSource()	    Non Standard

// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------
