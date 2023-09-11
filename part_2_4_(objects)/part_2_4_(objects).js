

// assigns a simple value to a variable

// let personName = "ali"

// create objects : 

// var person = {name : "ali" , born : "Tehran" , city : "shiraz" , age : 18 , father : "hasan"}
// let person = {name : "ali" , born : "Tehran" , city : "shiraz" , age : 18 , father : "hasan"}
// const person = {name : "ali" , born : "Tehran" , city : "shiraz" , age : 18 , father : "hasan"}


// or : 

// const person = {
//     name : "ali" ,
//     born : "Tehran" , 
//     city : "shiraz" , 
//     age : 18 ,
//     father : "Hasan",
// };

//  You can access object properties in two ways:

// way 1 : 
// objectName.propertyName
// console.log(person.name)

// way 2 : 
// console.log(person["name"])

// --------------------------------------------------------------
// --------------------------------------------------------------

// objects with methods : 

const person = {
    firstName : "Mohamad" ,
    lastName : "Dadashi" , 
    born : "Qom" , 
    age : 18 ,
    city : "Alborz" , 
    father : 'Saman',

    fullName : function () {
        return this.firstName + " " + this.lastName ; 
        console.log()
    },
    walk : function () {
        console.log('Im walking')
    } ,
    introduce : function () {
        console.log("Im" + this.fullName() + "nice to meet you !")
    },
    wearShoes : function () {
        console.log("Im wearing shoes")
    },
    fallInLove : function () {
        console.log('I love you')
    },

}

// ---------------------------------------------------------
// You access an object method

var fullName = person.fullName() ; 
console.log(person.fullName())

// wrong way : 

var fullName = person.fullName ; 

// ---------------------------------------------------------

// blank object : 
// const car = {name : "" , model : "" , speed : 0}

// set value : 
// car.name = "پراید"
// car.model = "132"
// car.speed = 120 ; 

// or 
// car["name"] = "پراید" ; 
// car["model"] = "132";
// car["speed"] = 120 ; 

// log : 

// console.log(car)
// console.log(typeof(car))
// ---------------------------------------------------------
// var result 
// function loadData(callback) {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onload = function() {
//         result = JSON.parse(this.response) ; 
//         callback(result)
//       } 
//     xhttp.open("GET", "https://reqres.in/api/products/3");
//     xhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
//     xhttp.setRequestHeader('Access-Control-Allow-Origin','*');
//     xhttp.send(); 
//   }
// loadData(logData)



// // log data 

// function logData (data) {
//     console.log(data)
//     console.log(data.data)
//     console.log(data.data.id)
// }
// ---------------------------------------------------------
// data types in javascript 

// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

// ---------------------------------------------------------

// everything are object : 


nameVar   = new String() ; 

ageVar    = new Number() ; 
console.log(typeof(ageVar))

isLogedIn = new Boolean() ; 
// 
courses   = new Array() ; 

// ---------------------------------------------------------




