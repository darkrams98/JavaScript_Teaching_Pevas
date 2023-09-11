
// for (expression 1; expression 2; expression 3) {
//     // code block to be executed
//   }
//   Expression 1 is executed (one time) before the execution of the code block.

//   Expression 2 defines the condition for executing the code block.
  
//   Expression 3 is executed (every time) after the code block has been executed.

// ------------------------------------------------------------------

// for_in : 
// def : The JavaScript for in statement loops through the properties of an Object:

// for_of : 
// def : The JavaScript for of statement loops through the values of an iterable object.

// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

// // for_in in an object :

// // structure

// // for (key in object) {
//   // code block to be executed
// // }

// const car = {name:"پراید", model:"132", speed:100}; 
// var txt = "";

// for (let x in car) {
//   txt += car[x] + " ";
//   console.log(x)
// }

// console.log(txt)

// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

// // for_in in an array : 

// // structure : 

// // for (variable in array) {
// //     code
// //   }

// const numbers = [400, 500, 600, 700, 800];

// var text = "";

// for (let x in numbers) {
//   text += numbers[x] + " "; 
//   console.log(x)
// }

// console.log(text)

// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
// // itrating in array with simple for :  

// var numbers = [400, 500, 600, 700, 800];
// var text = "";

// for (let i = 0 ; i < numbers.length ; i++){
    
//     text += numbers[i] + " "

// }

// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

// // for_in another way : 

// var numbers = [400, 500, 600, 700, 800];

// var txt = "";
// numbers.forEach(myFunction);

// function myFunction(value, index, array) {
//   txt += " " + value ;

//   console.log(index)
//   console.log(value)
//   console.log(array)
// }
// console.log(txt)

// --------------------------------------------------------------------------------------

// // or 

// var numbers = [400, 500, 600, 700, 800];

// var txt = "";
// numbers.forEach(myFunction);

// function myFunction(value) {
//   txt += value;

//   console.log(value)
// }

// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

// // for-of structure : 

// // for (variable of iterable) {
// //     // code block to be executed
// //   }

// // itrating in an array 

// const cars = ["سمند", "پژو", "هیوندا"];

// var text = "";

// for (let x of cars) {
//   text += x + " ";
//   console.log(x)
// }

// console.log(text)

// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

// // for-of in string : 

// let lang = "JavaScript";
// let text = "";

// for (let x of lang) {
//   text += x + " ";
//   console.log(x)
// }

// console.log(text)

// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

// // review 

// var alphabet = ["a" , "b" , "c"]
// var phone = {brand : "apple" , memory : "64" , waterResistant : true}

// // iterating : 

// // iterating Array --- normal for 

// for (let i = 0 ; i < alphabet.length ; i++) {
//     console.log(alphabet[i])
// }

// --------------------------------------------------------------------------------------

// var alphabet = ["a" , "b" , "c"]
// var phone = {brand : "apple" , memory : "64" , waterResistant : true}

// // iterating object --- normal for

// console.log(phone)
// console.log(Object.entries(phone))

// var objLength = Object.entries(phone).length
// console.log(objLength)

// for (let i = 0 ; i < objLength ; i++) {
//     let myObj = Object.entries(phone)[i]
    
//     console.log(myObj[0] + ":" + " " + myObj[1])
// }

// --------------------------------------------------------------------------------------

// var alphabet = ["a" , "b" , "c"]
// var phone = {brand : "apple" , memory : "64" , waterResistant : true}

// // Array --- for-in 
// for (let x in alphabet) {

//     console.log("index is : " + x + " value is : " + alphabet[x])
// }

// --------------------------------------------------------------------------------------

// var alphabet = ["a" , "b" , "c"]
// var phone = {brand : "apple" , memory : "64" , waterResistant : true}

// // object --- for-in 

// // get properties : 
// for (let x in phone) {
//     console.log(x)
// }

// // get properties value 

// // wrong way :
// for (let x in phone) {
//     console.log(phone.x)
// }
// // true way : 
// for (let x in phone) {
//     console.log(phone[x])
// }

// --------------------------------------------------------------------------------------

// var alphabet = ["a" , "b" , "c"]
// var phone = {brand : "apple" , memory : "64" , waterResistant : true}

// // array for-of 
// for (let x of alphabet) {
//     console.log(x)
// }

// // wron way : 
// // object for-of :
// for (let x of phone) {
//     console.log(x)
// }
// // or 
// for (let x of phone) {
//     console.log(phone[x])
// }

// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

// iterating on array in an object : 

// data : 
var obj1 = {
    name : "ali" , 
    age : 18 , 
    city : "Tehran" , 
    languages : ["Farsi" , "English" , "Turkish" , "Greece"] 
}

// --------------------------------------------------------------------------------------


// // use normal for : 
// objLength = Object.entries(obj1).length
// console.log(objLength)
// console.log(Object.entries(obj1))

// for (let i = 0 ; i < objLength ; i++) {
    
//     myObj = Object.entries(obj1)[i]

//     console.log(myObj)
//     console.log("property " + ": " + myObj[0] + " -- value " + ' : ' + myObj[1])

//     if (Array.isArray(myObj[1]))  {
//         var arrayValue = myObj[1]

//         for (let x = 0 ; x < myObj[1].length ; x++){
//             console.log("lang " + x + " : " + arrayValue[x])    
//         }
//     }
// }

// --------------------------------------------------------------------------------------

// // with for_in and for_of 

// for (let prop1 in obj1) {
//     console.log(prop1)
//     console.log(obj1[prop1])

//     if (Array.isArray(obj1[prop1])) {

//         for (let prop2 in obj1[prop1]) {
//             console.log("index : " + prop2 + " value " + " : " + obj1[prop1][prop2])
//         }
//     }
// }
// --------------------------------------------------------------------------------------

// // or 

// for (let prop1 in obj1) {

//     console.log("prop : " + prop1 + "-- value : " + obj1[prop1])

//     if (Array.isArray(obj1[prop1])) {

//         for (let prop2 of obj1[prop1]) {
//             console.log(prop2)
//         }
//     }
// }


// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

// iterating on object in an array 

// data :

var myArray = [
    {name : "ali" , age : "12" , city : "Tehran"},
    {name : "ali1" , age : "13" , city : "Tehran"},
    {name : "ali2" , age : "14" , city : "Tehran"},
    {name : "ali3" , age : "15" , city : "Tehran"},
    {name : "ali4" , age : "16" , city : "Tehran"},
    {name : "ali5" , age : "17" , city : "Tehran"},
    {name : "ali6" , age : "18" , city : "Tehran"},
    {name : "ali7" , age : "19" , city : "Tehran"},
    {name : "ali8" , age : "20" , city : "Tehran"}
]

// --------------------------------------------------------------------------------------

// // normal for : 

// for (let i = 0 ; i < myArray.length ; i++) {

    
//     let objLength = Object.entries(myArray[i]).length
//     let myObj = Object.entries(myArray[i])

//     console.log(myObj)

//     for (let x = 0 ; x < objLength ; x++ ) {
//         console.log("prop : " + myObj[x][0] + " -- value : " + myObj[x][1])
//     }
// } 

// --------------------------------------------------------------------------------------

// // for_in : 

// for (let index in myArray) {
//     console.log(index)
//     console.log(myArray[index])

//     for (let prop in myArray[index]) {
//         console.log("prop : " + prop + " value : " + myArray[index][prop])
//     }
// }

// --------------------------------------------------------------------------------------

// for_of : 

for (let val of myArray) {

    console.log(val)

    for (let prop in val) {
        console.log("prop : " + prop + " value : " + val[prop])
    }
}

