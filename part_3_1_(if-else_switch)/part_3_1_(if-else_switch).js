

// this codes : 
// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed

// -----------------------------------------------------------------------------------

// // if Structure : 

// if (condition) {
//     //  block of code to be executed if the condition is true
//   }


// ? operator 

// variablename = (condition) ? value1:value2 

// let age = 18 ; 
// let permission = (age >= 18) ? "true" : "false"
// console.log(permission)

// // with if  : 
// var result ;
// if (age > 18) {
//     result = true ; 
// }else { 
//     result = false ; 
// }
// ----------------------------------------------------------------------------------------
// // exam : 

// var boolVar = false;

// if (boolVar == true) {
//   console.log("boolVar is" + " " + boolVar)
// } else {
//   console.log("boolVar is" + " " + boolVar)
// }

// ------------------------------------------------------------------------------------

// // multi condition
// var age = 15;
// var permisson

// if (age > 20) {
//   permisson = "you can log in"
// } else if (age < 10) {
//   permisson = "call your parent"
// } else {
//   permisson = "wait to ask"
  
// }
// console.log(permisson)

// ------------------------------------------------------------------------------------

// // switch case : 
// var now = new Date().getDay()
// var day;
// switch (now) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }

// console.log(day)
// -----------------------------------------------------------------------------------
// // nested if 
// // شرط تو در تو
// // nested if Structure : 

// if (condition) {
//   if (condition) {
//     if (condition) {

//     }else if (condition) {

//     }else{

//     }
//   }else if (condition) {

//   }else {

//   }
// }else if (condition){

// }else {

// }
// -----------------------------------------------------------------------------------
// // use swich or if ? 
// // switch : اگر تعداد حالت های یک متغییر را بخواهیم بررسی کنیم 
// // if : اگر بخواهیم چندین عبار را بررسی کنیم . 

// var username    = "a"
// var password    = "a"
// var repassword  = "b"
// var email       = "a"

// var signIn

// if (username != "" && password != "" && repassword != "" && email != "") {
//   if (password == repassword) {
//     signIn = true
//     console.log(signIn)
//   }else {
//     signIn = false
//     console.log(signIn)
//     console.log("please enter same password !")
//   }
// }else if (email == "alireza.moghadasi.h@gmail.com") {
//   console.log("administer")
// }else {
//   console.log("you cant sign in ! plz fill the inputs")
// }
// -----------------------------------------------------------------------------------

// // exam : 

// uppercase regex  
var pattern_1 = /[A-Z]/
// number regex
var pattern_2 = /[1-9]/

function register() {

  // with javascript

  var username = document.getElementById("username").value;
  var email = document.getElementById("email-input").value;
  var password = document.getElementById("password").value;
  var repassword = document.getElementById("repassword").value;

  // // with jquery

  // var username = $("#username").val()
  // var email = $("#email-input").val()
  // var password = $("#password").val()
  // var repassword = $("#repassword").val()

  // --------------------------------------------------------------------------------------
  // check password :  

  if (password == "") {
    document.getElementById("password-error-1").style.display = 'inline-block' ; 
  }else if (!(pattern_1.test(password))) {
    document.getElementById("password-error-2").style.display = 'inline-block';
  }else if (!(pattern_2.test(password))) {
    document.getElementById("password-error-3").style.display = 'inline-block';
  }else if (!(password.length >= 8)) {
    document.getElementById("password-error-4").style.display = 'inline-block';
  }
}

