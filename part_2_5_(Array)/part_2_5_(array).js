

// // normal way : 

// let course1 = "C++";
// let course2 = "javascript";
// let course3 = "python";

// // // define array : 

// var courses = ["C++" , "javascript" , "python"]

// // log : 

// console.log(courses)
// console.log(typeof(courses))

// ---------------------------- another way -----------------------

// var courses = new Array()
// console.log(typeof(courses))

// courses = ["C++" , "javascript" , "python"]

// // or 

// courses = [
//     'C++' , 
//     'javascript' , 
//     'python'
// ]

// console.log(courses)
// ----------------------------------------------------------------

// // define blank array : 
// define blank array : 
// var myArray = []
// // or 
// var myArray = new Array() ; 

// ----------------------------------------------------------------

// var courses = ["C++" , "javascript" , "python"]

// course1 = courses[0] ; 
// course2 = courses[1] ; 
// course3 = courses[2] ; 

// // log 

// console.log(course1 + "  " + course2 + "  " , course3)
// ----------------------------------------------------------------

// chenge an array element : 

// var cars = ["پراید" , "سمند" , "۲۰۶"]

// cars[0] = "وانت"
// // log
// console.log(cars)
// ---------------------------------------------------------------


// 1 - you can have variables of different types in the same array : 

// var course = ["C++" , 34 , Date.now()]
// console.log(course)

// ---------------------------------------------------------------

// 2 - you can have function in an array : 

// myFunc1 = function () {
//     console.log("Im first function in an Array")
// }
// myFunc2 = function () {
//     console.log("Im sec function in an Array")
// }

// // define blank array : 
// var myArray = []
// // or 
// var myArray = new Array() ; 

// myArray[0] = myFunc1
// myArray[1] = myFunc2

// // log array 
// console.log(myArray)

// // call functions 
// // Method 1 :‌
// myArray[0]()
// myArray[1]()

// // method 2 : 
// var func = myArray[0]
// func()

// ------------------------------------------------------------

// // you can have object in an array : 

// // define Array :  

// var courses = []; 

// // define objects :

// var course_1 = {
//     name : "artificial intelligence" , 
//     time : 400 , 
//     producer : "Alireza" , 
//     episodes : 50 ,
//     Price : "500000T"
// }

// var course_2 = {
//     name : "machine learning" , 
//     time : 500 , 
//     producer : "Alireza" , 
//     episodes :  29,
//     Price : "400000T"
// }

// courses = [course_1 , course_2]

// // log 

// console.log(courses)
// console.log(typeof(courses))
// console.log(courses[0])

// -------------------------------------------------------------

// // Array properties and Methods : 

// var courses = ["C++" ,"C" , "PHP", "Flutter" , "javascript" , "python"]

// // 1 - length properties: 

// console.log(courses.length)

// // 2 - sort method : 

// var alphabet = ["C" , "A" , "B"]
// var numbers = [3 , 1 , 2]

// console.log(alphabet[0])
// console.log(numbers[0])

// // sort method : 

// alphabet.sort()
// // or 
// numberSorted = numbers.sort()

// console.log(alphabet[0])
// console.log(numberSorted[0])

// -----------------------------------------------------------------

// // Accessing the First Array Element

// var fruits = ["Banana", "Orange", "Apple", "Mango"];

// var fruit = fruits[0];

// // Accessing the last Array Element 

// var fruits = ["Banana", "Orange", "Apple", "Mango"];

// var fruit = fruits[fruits.length - 1];

// ----------------------------------------------------------------------

// // Add new element to array : 

// // way 1 : 

// var alphabet = ["A" , "B" , "C"]

// alphabet.push("D")

// console.log(alphabet)

// // way 2 : 

// var alphabet = ["A" , "B" , "C"]

// alphabet[alphabet.length] = "D"

// console.log(alphabet)

// // undefied holes in Array : 

// var alphabet = ["A" , "B" , "C"]

// alphabet[10] = "D"

// console.log(alphabet)
// console.log(alphabet[5])
// ------------------------------------------------------------------

// // Array with one element : 

// var myNumber = [50] ; 
// console.log(myNumber)

// // wrong way : 

// var myNumber = new Array(50)
// console.log(myNumber)

// ------------------------------------------------------------------

// // Recognize an Array 

// var alphabet = ["A" , "B" , "C"]

// // wrong way : 
// console.log(typeof(alphabet))

// // way 1 : 
// console.log(Array.isArray(alphabet))

// // way 2 : 
// console.log(alphabet instanceof Array)

// -------------------------------------------------------------------

var result 
function loadData(callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        result = JSON.parse(this.response) ; 
        callback(result)
      } 
    xhttp.open("GET", "https://dummyjson.com/products");
    xhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
    xhttp.setRequestHeader('Access-Control-Allow-Origin','*');
    xhttp.send(); 
  }
loadData(logData)



// log data 

function logData (data) {
    console.log(data.products)
}