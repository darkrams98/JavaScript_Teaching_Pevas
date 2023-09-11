
// JavaScript Search Methods

// String indexOf()
// String lastIndexOf()
// String search()
// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

// // indexOf()
// // The indexOf() method returns the index of (position of) the first occurrence of a string in a string:

// var myStr1 = "My name is Mohammad and im learning javascript ,I like javascript very much"

// console.log(myStr1.indexOf("javascript"))

// console.log(myStr1.indexOf("python"))

// console.log(myStr1.indexOf("javascript" , 37))

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

// // lastIndexOf()
// // The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

// var myStr1 = "My name is Mohammad and im learning javascript ,I like javascript very much"

// console.log(myStr1.lastIndexOf("javascript"))

// console.log(myStr1.lastIndexOf("python"))

// console.log(myStr1.lastIndexOf("javascript" , 35))

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

// // search()
// // The search() method searches a string for a string (or a regular expression) and returns the position of the match:

// var myStr1 = "My name is Mohammad and im learning Javascript ,I like javascript very much"

// console.log(myStr1.search("javascript"))

// console.log(myStr1.search(/javascript/i))

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

// // match()
// // The match() method returns an array containing the results of matching a string against a string (or a regular expression).

// var myStr1 = "My name is Mohammad and im learning javascript ,I like javascript very much"

// console.log(myStr1.match("script"))

// console.log(myStr1.match(/script/))

// console.log(myStr1.match(/script/g))


// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

// // matchAll() 
// // The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).

// var myStr1 = "My name is Mohammad and im learning javascript ,I like javascript very much"

// var iterator = myStr1.matchAll("script")
// console.log(iterator)
// console.log(Array.from(iterator))

// var iterator = myStr1.matchAll(/script/g)
// console.log(iterator)
// console.log(Array.from(iterator))

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

// // includes()
// // The includes() method returns true if a string contains a specified value , Otherwise it returns false.

// var myStr1 = "My name is Mohammad and im learning javascript ,I like javascript very much"

// console.log(myStr1.includes("name"))

// console.log(myStr1.includes("name" , 5))

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

// // startsWith()
// // The startsWith() method returns true if a string begins with a specified value, Otherwise it returns false:

// var myStr1 = "javascript is a lovely language"

// console.log(myStr1.startsWith("javascript"))

// console.log(myStr1.startsWith("Javascript"))

// // use with parameter : 
// console.log(myStr1.startsWith("lovely" , 15))
// console.log(myStr1.startsWith("lovely" , 16))

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

// // endsWith()
// // The endsWith() method returns true if a string ends with a specified value, Otherwise it returns false:

// var myStr1 = "javascript is a lovely language"

// console.log(myStr1.endsWith("language"))

// // use with parameter : 

// console.log(myStr1.endsWith("is", 13))

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

// JavaScript Template Literals

// Synonyms:

// Template Literals
// Template Strings
// String Templates
// Back-Tics Syntax

// --------------------------------------------------------------------------------------------------------------

// // define string : 

// var myStr = "Hi there"

// var myStr = 'Hi there'

// var myStr = `Hi there`

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

// // Multiline Strings

// // // wrong way : 
// // var myStr = "My name is Mohammad and im learning javascript ,
// // I like javascript very much"

// // right way : 
// var myStr = 
// `My name is Mohammad 
// and im learning javascript ,
// I like javascript very much` ;

// console.log(myStr)

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

// // Variable Substitutions

// var firstName = "Mohsen"
// var lastNmae = "Chavoshi"

// console.log(`My name is ${firstName}` + " " + `${lastNmae}`)

