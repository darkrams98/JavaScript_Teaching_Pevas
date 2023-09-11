

// // def string : 

// var str1 = "Wubba Lubba Dub Dub"

// // different way to def string : 

// var str1 = "Wubba Lubba Dub Dub"
// // or 
// var str2 = 'Wubba Lubba Dub Dub'
// // or 
// var str3 = new String("Wubba Lubba Dub Dub")
// // or 
// var str4 = String("Wubba Lubba Dub Dub")
// var str5 = String(str3)


// // but we have : 

// console.log(typeof(str1))
// console.log(typeof(str3))
// console.log(typeof(str4))
// console.log(typeof(str5))
// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------


// // // use quotes inside a string : 

// console.log("Im 'alireza' and im saying ...")
// // or 
// console.log('Im "alireza" and im saying ...')


// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

// // Length property : 

// var str1 = "Hi"
// var str2 = " Hi "
// var str3 = "        Hi         "

// console.log(str1.length)
// console.log(str2.length)
// console.log(str3)
// console.log(str3.length)

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------


// // Code      Result	        Description

// // \'      	    '	        Single quote
// // \"	        "   	    Double quote
// // \\	        \	        Backslash

// // exam : 

// console.log("I like to travel around the 'world' !")
// console.log('I like to travel around the "world" !')
// console.log('I like to travel around the \'world\' !')
// console.log("I like to travel around the \"world\" !")
// console.log("I like to travel around the \\world\\ !")

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

// //   Code   	Result

// //   \b	        Backspace
// //   \f	        Form Feed
// //   \n  	    New Line
// //   \r	        Carriage Return
// //   \t         Horizontal Tabulator
// //   \v	        Vertical Tabulator

// console.log("I like to travel around the \b world !")
// console.log("I like to travel around the \f world !")
// console.log("I like to travel around the \n world !")
// console.log("I like to travel around the \r world !")
// console.log("I like to travel around the \t world !")
// console.log("I like to travel around the \v world !")

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

// // strign compare object (== & ===) : 

// var str1 = "mohamad"
// var str2 = new String("mohamad")
// var str3 = new String("mohamad")

// // object and string
// console.log(str1 == str2)
// console.log(str1 === str2)

// console.log(typeof(str2))
// console.log(typeof(str2.valueOf()))
// // object and object 
// console.log(str2 == str3)
// console.log(str2 === str3)

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

// JavaScript String Methods

// String length
// String slice()
// String substring()
// String substr()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charAt()
// String charCodeAt()
// String split()

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

// // String length  :

// var myStr1 = "ABC"
// // or 
// var myStr2 = new String("ABC")

// console.log(myStr1.length)
// console.log(myStr2.length)

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

// Extracting String Parts
// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

// ----------------------------------------------------------------
// ----------------------------------------------------------------

// // slice(start, end)
// // slice() extracts a part of a string and returns the extracted part in a new string.

// var myStr1 = "Ali is teaching javascript"

// var myStr2 = myStr1.slice(0 , 1)
// console.log(myStr2)

// var myStr2 = myStr1.slice(1)
// console.log(myStr2)

// var myStr2 = myStr1.slice(-10)
// console.log(myStr2)

// // ----------------------------------------------------------------
// // ----------------------------------------------------------------

// // substring(start, end)
// // The difference is that start and end values less than 0 are treated as 0 in substring().

// var myStr1 = "Ali is teaching javascript"

// var myStr2 = myStr1.substring(0 , 1)
// console.log(myStr2)

// var myStr2 = myStr1.substring(3)
// console.log(myStr2)

// var myStr2 = myStr1.substring(-1 , 3)
// console.log(myStr2)

// // ----------------------------------------------------------------
// // ----------------------------------------------------------------

// // substr(start, length) (deprecated)
// // substr() is similar to slice().
// // The difference is that the second parameter specifies the length of the extracted part.

// var myStr1 = "Ali is teaching javascript"

// var myStr2 = myStr1.substr(0 , 3)
// console.log(myStr2)

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

// // String replace()
// // The replace() method replaces a specified value with another value in a string:

// var myStr1 = "My name is Mohammad and im learning javascript ,I like javascript very much"

// var myStr2 = myStr1.replace("javascript" , "python")
// console.log(myStr2)

// // replace() method is case sensitive
// var myStr2 = myStr1.replace("JAVAscript" , "python")
// console.log(myStr1)

// // To replace case insensitive, use a regular expression with an /i flag (insensitive):
// var myStr2 = myStr1.replace(/JAVAscript/i , "python")
// console.log(myStr2)

// // To replace all matches, use a regular expression with a /g flag (global match):
// var myStr2 = myStr1.replace(/javascript/g , "python")
// console.log(myStr2)

// var myStr2 = myStr1.replace(/javascript/ig , "python")
// console.log(myStr2)

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

// // String replaceAll()
// // The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.

// var myStr1 = "My name is Mohammad and im learning javascript ,I like javascript very much"

// var myStr2 = myStr1.replaceAll("javascript" , "python")
// console.log(myStr2)

// // TypeError ... use global flag (g)
// // var myStr2 = myStr1.replaceAll(/javascript/ , "python")
// // console.log(myStr2)
// // right way : 
// var myStr2 = myStr1.replaceAll(/javascript/g , "python")
// console.log(myStr2)

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

// // // String toUpperCase()
// // // String toLowerCase()
// // // A string is converted to upper case with toUpperCase():
// // // A string is converted to lower case with toLowerCase():

// var myStr1 = "javascript"

// myStr2 = myStr1.toUpperCase()
// console.log(myStr2)

// var myStr1 = "JavaScript"

// myStr2 = myStr1.toLowerCase()
// console.log(myStr2)

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

// // String concat()
// // concat() joins two or more strings:

// var myStr1 = "java"
// var myStr2 = "script"

// // way 1
// var myStr3 = myStr1 + " " + myStr2
// console.log(myStr3)

// // way 2
// var myStr3 = myStr1.concat(myStr2)
// console.log(myStr3)

// // or 
// var myStr3 = myStr1.concat(" " , myStr2)
// console.log(myStr3)

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

// // String trim()
// // String trimStart()
// // String trimEnd()

// // The trim()            method removes whitespace from both sides of a string:
// // The trimStart()       method works like trim(), but removes whitespace only from the start of a string.
// // The trimEnd()         method works like trim(), but removes whitespace only from the end of a string.

// // ----------------------------------------------------------------
// // ----------------------------------------------------------------

// // String trim()

// var myStr1 = "   Hi there   "
// console.log(myStr1)

// var myStr2 = myStr1.trim()
// console.log(myStr2)

// // ----------------------------------------------------------------
// // ----------------------------------------------------------------

// // String trimStart()

// var myStr1 = "   Hi there   "
// console.log(myStr1)

// var myStr2 = myStr1.trimStart()
// console.log(myStr2)

// // ----------------------------------------------------------------
// // ----------------------------------------------------------------

// // String trimEnd()

// var myStr1 = "   Hi there   "
// console.log(myStr1)

// var myStr2 = myStr1.trimEnd()
// console.log(myStr2)

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

// // String padStart()
// // String padEnd()

// // The padStart() method pads a string with another string:
// // The padEnd() method pads a string with another string:

// // ----------------------------------------------------------------
// // ----------------------------------------------------------------
// // String padStart()

// var myStr1 = "A"

// var myStr2 = myStr1.padStart(5 , " ")
// console.log(myStr2)
// var myStr2 = myStr1.padStart(5 , ".")
// console.log(myStr2)
// var myStr2 = myStr1.padStart(5 , "i")
// console.log(myStr2)

// // ----------------------------------------------------------------
// // ----------------------------------------------------------------
// // String padEnd()

// var myStr2 = myStr1.padEnd(5 , ".")
// console.log(myStr2)

// var myStr2 = myStr1.padEnd(5 , "i")
// console.log(myStr2)

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

// // Extracting String Characters
// // There are 3 methods for extracting string characters:

// // charAt(position)
// // charCodeAt(position)
// // Property access [ ]

// // ----------------------------------------------------------------
// // ----------------------------------------------------------------

// // charAt(position)
// // The charAt() method returns the character at a specified index (position) in a string:

// var myStr1 = "Saman is working"

// var myChar1 = myStr1.charAt(0)
// console.log(myChar1)
// var myChar1 = myStr1.charAt(1)
// console.log(myChar1)

// var myChar1 = myStr1.charAt(100)
// console.log(myChar1)

// // ----------------------------------------------------------------
// // ----------------------------------------------------------------

// // charCodeAt(position)

// // The charCodeAt() method returns the unicode of the character at a specified index in a string:
// // The method returns a UTF-16 code (an integer between 0 and 65535).

// var myStr1 = "Saman is working"

// var myChar1 = myStr1.charCodeAt(0)
// console.log(myChar1)
// var myChar1 = myStr1.charCodeAt(7)
// console.log(myChar1)

// // ----------------------------------------------------------------
// // ----------------------------------------------------------------

// // Property access [ ]

// var myStr1 = "I want travel to shiraz"

// var myChar1 = myStr1[0]
// console.log(myChar1)

// var myChar1 = myStr1[100]
// console.log(myChar1)


// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

// // Converting a String to an Array

// // A string can be converted to an array with the split() method:

// // ----------------------------------------------------------------
// // ----------------------------------------------------------------

// // split()

// var myStr1 = "Javascript,Python,Flutter,Dart"
// var myStr2 = "Javascript Python Flutter Dart"
// var myStr3 = "Javascript|Python|Flutter|Dart"

// var myStr4 = myStr1.split(",")
// console.log(myStr4)

// var myStr4 = myStr2.split(" ")
// console.log(myStr4)

// var myStr4 = myStr3.split("|")
// console.log(myStr4)

// var myStr1 = "javascript"
// var myStr2 = myStr1.split("")
// console.log(myStr2)

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
