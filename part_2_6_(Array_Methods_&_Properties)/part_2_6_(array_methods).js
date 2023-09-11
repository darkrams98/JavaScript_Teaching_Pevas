
// // join method : 
// // def : The join() method joins array elements into a string.

// var courses = ["C++" , "C" , "java" , "javascript" , "python"]

// // use : 

// var joinedCourses = courses.join("....")

// console.log(joinedCourses)

// --------------------------------------------------------------
// // push and pop 
// // def : push : The push() method adds a new element to an array (at the end):
// // def : pop : The pop() method removes the last element from an array:

// // push : 

// var courses = ["C++" , "C" , "java" , "javascript" , "python"]

// courses.push("flutter")

// console.log(courses)

// // -----------------------
// // pop : 


// console.log(courses)

// // or 

// var removedCourse = courses.pop()

// console.log(removedCourse)
// console.log(courses)
// -----------------------------------------------------------------

// // shift() : 
// // def : The shift() method removes the first array element and "shifts" all other elements to a lower index.

// var courses = ["C++" , "C" , "java" , "javascript" , "python"]

// courses.shift();
// console.log(courses)

// // or : 

// var shiftedCourse = courses.shift();

// console.log(shiftedCourse)
// console.log(courses)

// -----------------------------------------------------------------

// // unshift()
// // def : The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

// var courses = ["C++" , "C" , "java" , "javascript" , "python"]

// courses.unshift("flutter")

// console.log(courses)

// ------------------------------------------------------------------

// // length property

// var courses = ["C++" , "C" , "java" , "javascript" , "python"]

// console.log(courses.length)

// // or 
// var newLength = courses.push("flutter")
// console.log(newLength)
// // or 

// var courses = ["C++" , "C" , "java" , "javascript" , "python"]

// var newLength = courses.unshift("flutter")
// console.log(newLength)

// -----------------------------------------------------------------

// // delete 
// // def : Array elements can be deleted using the JavaScript operator delete.
// // warning : Using delete leaves undefined holes in the array.

// var courses = ["C++" , "C" , "java" , "javascript" , "python"]

// delete courses[1]

// console.log(courses)
// console.log(typeof(courses[1]))

// ----------------------------------------------------------------

// // concat : 
// // The concat() method creates a new array by merging (concatenating) existing arrays:

// var front = ["javascript", "react" , "angular", "flutter", "jquery", "swift"]
// var back = ["C++", "C" , "C#", "java", "python", "javascript"]

// var programLang = front.concat(back)

// console.log(programLang)

// // or 
// var programLang = back.concat(front)

// console.log(programLang)

// // ------- multi concat ------- 

// var jsLib = ["React" , "Veu" , "Angular" ]

// var multiConcat = front.concat(jsLib , back)

// console.log(multiConcat)

// ----------------------------------------------------------------

// // The splice() method can be used to add new items to an array:

// var fruits1 = ["سیب", "انگور", "کیوی", "موز"]
// console.log(fruits1)

// var fruits2 = ["پرتقال" , "خیار"] ;

// // --------------
// // Add 
// fruits1.splice(2 , 0 , fruits2)

// console.log(fruits1)
// // --------------
// // or
// var fruits1 = ["سیب", "انگور", "کیوی", "موز"]

// para1 = 2 ;
// para2 = 0 ;
// fruits1.splice(para1 , para2 , "پرتقال" , "خیار")

// console.log(fruits1)
// // // --------------

// // para1 : defines the position where new elements should be added
// var fruits1 = ["سیب", "انگور", "کیوی", "موز"]
// para1 = 3 ; 
// fruits1.splice(para1 , para2 , fruits2)

// console.log(fruits1)
// // --------------

// // para2 : defines how many elements should be removed.
// var fruits1 = ["سیب", "انگور", "کیوی", "موز"]

// para2 = 1 ; 
// fruits1.splice(para1 , para2 , fruits2)
// console.log(fruits1)
// // ---------------
// // use splice for remove elements with out undefind holes
// var fruits1 = ["سیب", "انگور", "کیوی", "موز"]

// fruits1.splice(1 , 2)
// console.log(fruits1)

// -----------------------------------------------------------------------
// slice()
// def : The slice() method slices out a piece of an array into a new array.

para1 = 0
para2 = 0 
var courses = ["C++", "C" , "C#", "java", "python", "javascript"]

// para1 : slices out a part of an array starting from array element para1
para1 = 2 
var slicedCourse = courses.slice(para1)

console.log(courses)
console.log(slicedCourse)

// para2 : selects elements from the start argument, and up to (but not including) the end argument.
para2 = 5
var slicedCourse = courses.slice(para1 , para2)
 
// log 
console.log(slicedCourse)

// -----------------------------------------------------------------------


// JavaScript Array Methods and Properties 


// concat()     	Joins arrays and returns an array with the joined arrays
// constructor  	Returns the function that created the Array object's prototype
// copyWithin() 	Copies array elements within the array, to and from specified positions
// entries()	    Returns a key/value pair Array Iteration Object
// every()      	Checks if every element in an array pass a test
// fill()	        Fill the elements in an array with a static value
// filter()     	Creates a new array with every element in an array that pass a test
// find()	        Returns the value of the first element in an array that pass a test
// findIndex()	    Returns the index of the first element in an array that pass a test
// forEach()    	Calls a function for each array element
// from()	        Creates an array from an object
// includes()	    Check if an array contains the specified element
// indexOf()	    Search the array for an element and returns its position
// isArray()	    Checks whether an object is an array
// join()	        Joins all elements of an array into a string
// keys()	        Returns a Array Iteration Object, containing the keys of the original array
// lastIndexOf()	Search the array for an element, starting at the end, and returns its position
// length	        Sets or returns the number of elements in an array
// map()	        Creates a new array with the result of calling a function for each array element
// pop()	        Removes the last element of an array, and returns that element
// prototype	    Allows you to add properties and methods to an Array object
// push()	        Adds new elements to the end of an array, and returns the new length
// reduce()     	Reduce the values of an array to a single value (going left-to-right)
// reduceRight()	Reduce the values of an array to a single value (going right-to-left)
// reverse()	    Reverses the order of the elements in an array
// shift()	        Removes the first element of an array, and returns that element
// slice()	        Selects a part of an array, and returns the new array
// some()	        Checks if any of the elements in an array pass a test
// sort()	        Sorts the elements of an array
// splice()     	Adds/Removes elements from an array
// toString()	    Converts an array to a string, and returns the result
// unshift()	    Adds new elements to the beginning of an array, and returns the new length
// valueOf()	    Returns the primitive value of an array





















