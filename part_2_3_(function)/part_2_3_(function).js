// create function : 

// function function name (para , para) {    }



// non-parameter non-return function : 

// function consoleLog () {
//     console.log("Im your first function")
// }
// call function : 
// consoleLog() ; 
// --------------------------------------------------------

// non-parameter function  :

// function getValue () {
//     return "value"
// }
// // call function : 
// console.log(getValue())
// // or 
// let value = getValue() ; 
// console.log(value)
// --------------------------------------------------------
// return multiple value : 

// function getMultiValue () {
//     var num1 = 56 ; 
//     var num2 = 60 ; 
//     var sum = num1 + num2 ; 

//     return [num1 , num2 , sum] ; 
// }
// console.log(getMultiValue())
// var result = getMultiValue()
// console.log(result)

// --------------------------------------------------------
// non-return function : 

// function showMeWhatYouGot (para1 , para2) {
//     console.log(para1 + " " + para2)
// }
// call : 

// showMeWhatYouGot("ali" , "reza")

// --------------------------------------------------------
// parameter function : 

// sum function : 

// function sumFunc (num1 , num2) {
//     return num1 + num2 ;
// }
// console.log(sumFunc(5 , 5))

// ---------------------------------------------------
// another way : 

// function sumFunc (num1 , num2) {
//     return num1 + num2 ;
// }
// var result = sumFunc(5 , 4)
// console.log(result)


// --------------------------------------------------------
// use parameter finction without parameter :

// function toCelsius(fahrenheit) {
//     return (5/9) * (fahrenheit-32);
// }
// var result = toCelsius(60) ; 
// console.log(result)

// call with out parameter : 
// console.log(toCelsius)
// var result = toCelsius()
// console.log(result)

// --------------------------------------------------------


function varScoping() {
    var x = 1;
  
    if (true) {
      var x = 2;
      console.log(x); // will print 2
    }
  
    console.log(x); // will print 2
  }
  
  function letScoping() {
    let x = 1;
  
    if (true) {
      let x = 2;
      console.log(x); // will print 2
    }
  
    console.log(x); // will print 1
  }

  varScoping()
  letScoping()
// ---------------------------------------------------------


// arrow function :

// method 1 

// function sumFunc (num1 , num2) {
//    return num1 + num2
// }
// showValue(5 , 6)
// -------------------
// method 2 

// sumFunc = function (num1 , num2) {
//     return num1 + num2
//  }
//  showValue(5 , 6)
//  ------------------
// method 3 

// let sumFunc = (num1 , num2) => num1 + num2 ; 
// console.log(sumFunc(5 , 6))

