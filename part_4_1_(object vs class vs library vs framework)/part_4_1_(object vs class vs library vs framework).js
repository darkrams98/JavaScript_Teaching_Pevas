
// class : 

// what is class : 

// A JavaScript class is not an object.
// It is a template for JavaScript objects.

// --------------------------------------------------------------

// // syntax_1

// class ClassName {
//     constructor() { ... }
//   }

// ---------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------

// // def blank object : 

// var person = {name : "" , age : "" , city : ""}
// var car = {name : "" , model : "" , year : ""}
// var course = {name : "" , teacher : "" , price : ""}
// var phone = {model : "" , year : "" , android : ""}
// var tv = {model : "" , year : "" , screen : ""}

// // initialise object : 

// var person1 = {name : "ali" , age : "15" , city : "Tehran"}
// var person2 = {name : "mohamad" , age : "17" , city : "Qom"}

// // or 

// var person1 = {}
// person1.name = "ali"
// person1.age = "15"
// person1.city = "Tehran"

// ---------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------


// // def class : 

// class Person {}
// class Car {}
// class Course {}
// class Phone {}
// class Tv {}

// ---------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------

// // create complete class : 

// class Person {
//     constructor (name , age , city) {
//         this.name = name ; 
//         this.age = age ; 
//         this.city = city
//         this.description = name + " is " + age + " years old and was born in " + city + " city" 
//     }
// }

// // log 
// console.log(Person)
// console.log(typeof(Person))

// // create two person : 
// var person1 = new Person("ali" , "18" , "Tehran")
// var person2 = new Person("mohamad" , "15" , "Qom")

// // or 
// var person4 = new Person()
// console.log(person4)

// // log
// console.log(person1)
// console.log(typeof(person1))

// // log properties : 
// console.log(person1.description)
// console.log(person2.description)

// ---------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------

// // another exam : (with custom value)

// class Animal {
//     constructor () {
//         this.Kingdom = "Animalia"
//         this.Phylum = "Chordata"
//         this.clade = "Amniota"
//         this.class = "Mammalia"
//     }
// }

// class Cow extends Animal {
//     constructor (code , gender , kid) {
//         super()
//         this.code = code ; 
//         this.gender = gender ; 
//         this.kid = kid ; 
//     }
// }

// // create new object : 
// var cow1 = new Cow(154 , "male" , 0)
// var cow2 = new Cow(158 , "female" , 2)

// // log
// console.log(cow1)
// console.log(cow2)

// ---------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------

// // class Methods : 

// class Person {
//     constructor (name , age , city) {

//         this.education = "bachelor"
        
//         this.name = name ; 
//         this.age = age ; 
//         this.city = city
//     }

//     introduce() {
//         console.log("Hi ... Im " + this.name + " from " + this.city)
//     }
// }

// // log class 
// console.log(Person)

// // create object
// var person1 = new Person("ali" , "25" , "Tehran")
// var person2 = new Person("x" , "y" , "z")

// // log object
// console.log(person1)
// person1.introduce()


// ---------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------

// // class Methods with parameter

// class House {
//     constructor(area , bedroom , parking , price) {

//         this.area = area ; 
//         this.bedroom = bedroom ; 
//         this.parking = parking ;
//         this.price = price ; 
//     }
//     buy(buyerٔName) {
//         return buyerٔName + " buy this house for " + this.price
//     }
// }

// var house1 = new House("150m" , 3 , 0 , "1500000T")

// console.log(house1)
// console.log(house1.buy("ali"))

// ---------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------

// // default value (مقدار پیش فرض)
 
// class Circle {
    
//     constructor(diameter) {
//         this.diameter = diameter
//     }

// }

// // create object 
// var circle1 = new Circle()

// // log
// console.log(circle1)


// // define class 
// class Square {

//     constructor(length) {
//         this.length = (length != undefined) ? length : 0
//     }
    
// }

// // create object 
// var square1 = new Square()

// // log 
// console.log(square1)

// ---------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------

// // use variable to create and save class 

// var myClass1 = class {
//     constructor(prop1 , prop2) {
//         this.prop1 = prop1
//         this.prop2 = prop2
//     }
// }

// console.log(myClass1)
// console.log(typeof(myClass1))

// ---------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------

// // getter and setter : 

// var Course = class {
//     constructor (name , teacher , time) {
        
//         this.name = (time != undefined) ? name : 0 
//         this.teacher = (time != undefined) ? teacher : 0
//         this.time = (time != undefined) ? time : 0

//         this.price = ""
//         this.episodes = 0
//         this.status = 1
//     }

//         // setters 
//         setPrice (price) {
//             this.price = price  
//         }
//         setEpisodes (episodes) {
//             this.episodes = episodes
//         }
//         setStatus (status) {
//             this.status = status 
//         }
    
//         // getters 
//         getPrice () {
//             return this.price
//         }
    
// }

// // create an object
// var course1 = new Course("javascript" , "Amir" , 100)

// // log
// console.log(course1)

// // use setter : 
// course1.setPrice("500000T")
// // or 
// course1.price = "600000T"

// // get price value 
// console.log(course1.price)
// // or 
// console.log(course1.getPrice())

// ---------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------
