// RegExp class : 

// JavaScript Regular Expressions

// A regular expression is a sequence of characters that forms a search pattern.
// The search pattern can be used for text search and text replace operations.
// A regular expression can be a single character, or a more complicated pattern.

// syntax : 

// /pattern/modifiers;

// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------

// // create RegExp : 

// var myRegExp = /alireza/
// var myRegExp = /[0-9]/

// // or 

// var myRegExp = new RegExp(/Alireza/)
// var myRegExp = new RegExp(/[0-9]/)

// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------

// // what is RegExp : 

// console.log(RegExp)
// console.log(typeof(RegExp))

// var myRegExp1 = new RegExp(/Mohammad/)
// var myRegExp2 = /Mohammad/

// console.log(myRegExp1)
// console.log(typeof(myRegExp1))

// console.log(myRegExp2)
// console.log(typeof(myRegExp2))

// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------

// use string methods with RegExp : 

// 1 - search()
// 2 - replace()

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// // search()

// var myStr = "pevas is the best site to learn programming. website : pevas.ir"

// // search() without RexExp : 
// console.log(myStr.search("pevas"))
// // search is case sensitive
// console.log(myStr.search("PEVAS"))

// // searce() with RegExp() 
// console.log(myStr.search(/pevas/))
// // use i (Regular Expression Modifiers)
// console.log(myStr.search(/PEVAS/i))

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// // replace 

// var myStr = "pevas is the best site to learn programming.(pevas , pevas) I like PEVAS very much"

// // use replace() without RegExp 
// console.log(myStr.replace("pevas" , "Stack Overflow"))
// // replace() is case sensitive
// console.log(myStr.replace("PEVAS" , "Stack Overflow"))

// // replace() with RegExp() 
// console.log(myStr.replace(/pevas/ , "Stack Overflow"))
// // use g (Regular Expression Modifiers)
// console.log(myStr.replace(/pevas/g , "Stack Overflow"))
// // use g and i (Regular Expression Modifiers)
// console.log(myStr.replace(/pevas/gi , "Stack Overflow"))

// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Regular Expression Modifiers

// Modifier	            Description

// i	                Perform case-insensitive matching	
// g	                Perform a global match (find all matches rather than stopping after the first match)	
// m	                Perform multiline matching

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// // m modifier : 

// var myStr = "javaScript is a popular language and" + "javaScript programmers are well paid !"

// let result = myStr.matchAll(/javaScript/gm);
// console.log(result)
// console.log(Array.from(result))

// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Regular Expression Patterns
// Brackets are used to find a range of characters:

// Expression	        Description	

// [abc]	            Find any of the characters between the brackets	
// [0-9]	            Find any of the digits between the brackets	
// (x|y)	            Find any of the alternatives separated with |

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// // [ABC] Patterns one char

// // var myRegExp = new RegExp(/[A]/)
// var myRegExp = /[L]/
// var myStr = "Wubby Lubby Dub Dub"

// console.log(myStr.match(myRegExp))
// // or 
// console.log(myRegExp.test(myStr))

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------


// // [ABC] Patterns 2 char

// var myRegExp = /[Lu]/
// var myStr = "Wubby Lubby Dub Dub"

// console.log(myStr.match(myRegExp))

// // or 
// console.log(myRegExp.test(myStr))

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// // [ABC] Patterns 2 char + g (global modifier)

// var myRegExp = /[Lu]/g
// var myStr = "Wubby Lubby Dub Dub"

// console.log(myStr.match(myRegExp))
// console.log(Array.from(myStr.matchAll(myRegExp)))

// // or 
// console.log(myRegExp.test(myStr))

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// // [ABC] Patterns 2 char + g (global modifier)

// var myRegExp = /[Lubby]/
// var myStr = "Wubby Lubby Dub Dub"

// console.log(myStr.match(myRegExp))

// // or 
// console.log(myRegExp.test(myStr))

// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------

// // [0-9]	            Find any of the digits between the brackets	

// var myRegExp1 = /[0-9]/
// var myRegExp2 = /[0-9]/g
// var myRegExp3 = /[09]/

// var myStr1 = "My name is Ali"
// var myStr2 = "My phone number is 09123456789"

// console.log(myStr1.match(myRegExp1))

// console.log(myStr2.match(myRegExp1))
// console.log(myStr2.match(myRegExp2))
// console.log(myStr2.match(myRegExp3))


// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------

// // (x|y)	            Find any of the alternatives separated with |

// var myStr = "javascript , python , flutter , c++ , c# , javascript , java , js , py"

// var myRegExp = /(javascript|python)/g

// console.log(myStr.match(myRegExp))
// console.log(Array.from(myStr.matchAll(myRegExp)))

// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Metacharacters are characters with a special meaning:

// Metacharacter	        Description

// \d	                    Find a digit	
// \s	                    Find a whitespace character	
// \b	                    Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b	
// \uxxxx	                Find the Unicode character specified by the hexadecimal number xxxx

// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------

// // Metacharacter (\d) Find a digit	 

// var myStr = "90% percent likely to be true"
// var myRegExp = /\d/g

// console.log(myStr.match(myRegExp))
// console.log(Array.from(myStr.matchAll(myRegExp)))

// console.log(myRegExp.test(myStr))

// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------

// // Metacharacter (\s) Find a whitespace character	 

// var myStr = "90% percent likely to be true"
// var myRegExp = /\s/g

// console.log(myStr.match(myRegExp))
// console.log(Array.from(myStr.matchAll(myRegExp)))

// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------

// // Metacharacter (\b) Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b 

// var myStr = "hello, look at here !"
// var myRegExp1 = /\blo/
// var myRegExp2 = /\lo\b/

// console.log(myStr.match(myRegExp1))
// console.log(myStr.match(myRegExp2))

// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Quantifier	        Description	

// n+	                Matches any string that contains at least one n
// n*	                Matches any string that contains zero or more occurrences of n
// n?	                Matches any string that contains zero or one occurrences of n

// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------

// // n+	                Matches any string that contains at least one n

// var myStr = "hello world !"

// var myRegExp = /l+/g

// console.log(myStr.match(myRegExp))
// console.log(Array.from(myStr.matchAll(myRegExp)))

// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------

// method_1 : test()

// The test() method is a RegExp expression method.
// It searches a string for a pattern, and returns true or false, depending on the result.

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// var myStr = "JavaScript can be used for server-side programming like Java language."
// var pattern = /java/ig

// console.log(pattern.test(myStr))

// // or 

// console.log(/java/ig.test(myStr))

// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------

// var myStr = "JavaScript can be used for server-side programming like Java language."
// var pattern = /java/ig

// console.log(pattern.exec(myStr))

// // or 

// console.log(/java/ig.exec(myStr))

// // null output 
// console.log(/python/.exec(myStr))

// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Metacharacter	    Description

// .	                Find a single character, except newline or line terminator
// \w	                Find a word character
// \W	                Find a non-word character
// \d	                Find a digit
// \D	                Find a non-digit character
// \s	                Find a whitespace character
// \S	                Find a non-whitespace character
// \b	                Find a match at the beginning/end of a word, beginning like this: \bHI, end like this: HI\b
// \B	                Find a match, but not at the beginning/end of a word
// \0	                Find a NULL character
// \n	                Find a new line character
// \f	                Find a form feed character
// \r	                Find a carriage return character
// \t	                Find a tab character
// \v	                Find a vertical tab character
// \xxx	                Find the character specified by an octal number xxx
// \xdd	                Find the character specified by a hexadecimal number dd
// \udddd	            Find the Unicode character specified by a hexadecimal number dddd

// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Quantifier	            Description

// n+	                    Matches any string that contains at least one n
// n*	                    Matches any string that contains zero or more occurrences of n
// n?	                    Matches any string that contains zero or one occurrences of n
// n{X}	                    Matches any string that contains a sequence of X n's
// n{X,Y}	                Matches any string that contains a sequence of X to Y n's
// n{X,}	                Matches any string that contains a sequence of at least X n's
// n$	                    Matches any string with n at the end of it
// ^n	                    Matches any string with n at the beginning of it
// ?=n	                    Matches any string that is followed by a specific string n
// ?!n	                    Matches any string that is not followed by a specific string n

// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Property	                Description

// constructor	            Returns the function that created the RegExp object's prototype
// global	                Checks whether the "g" modifier is set
// ignoreCase           	Checks whether the "i" modifier is set
// lastIndex	            Specifies the index at which to start the next match
// multiline	            Checks whether the "m" modifier is set
// source	                Returns the text of the RegExp pattern

// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Method	            Description

// compile()	        Deprecated in version 1.5. Compiles a regular expression
// exec()	            Tests for a match in a string. Returns the first match
// test()	            Tests for a match in a string. Returns true or false
// toString()	        Returns the string value of the regular expression

// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------

// usefull RegExp : 

// 1 - for password
// 2 - for first-name and last-name
// 3 - for email 
// 4 - for username
// 5 - for text area

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// var password = "aaaaaA@1" ; 

// // regexp test for pass word : 

// // 1 - Minimum eight characters, at least one letter and one number:
// var myRegExp1 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
// var result = myRegExp1.test(password)
// console.log(result)

// // 2 - Minimum eight characters, at least one letter, one number and one special character:
// var myRegExp2 = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
// var result = myRegExp2.test(password)
// console.log(result)

// // 3 - Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
// var myRegExp3 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
// var result = myRegExp3.test(password)
// console.log(result)

// // 4 - Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
// var myRegExp4 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*#?&]{8,}$/
// var result = myRegExp4.test(password)
// console.log(result)

// // 5 - Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:
// var myRegExp5 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/
// var result = myRegExp5.test(password)
// console.log(result)

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// // or

// var password = "aA1#aaaa"

// // 1 - At least one upper case English letter
// var myRegExp1 = /(?=.*?[A-Z])/
// var result = myRegExp1.test(password)
// console.log(result)

// // 2 - At least one lower case English letter
// var myRegExp2 = /(?=.*?[a-z])/
// var result = myRegExp2.test(password)
// console.log(result)

// // 3 - At least one digit 
// var myRegExp3 = /(?=.*?[0-9])/
// var result = myRegExp3.test(password)
// console.log(result)

// // 4 - At least one special character,
// var myRegExp4 = /(?=.*?[#?!@$%^&*-])/
// var result = myRegExp4.test(password)
// console.log(result)

// // 5 - Minimum eight in length
// var myRegExp5 = /.{8,}/
// var result = myRegExp5.test(password)
// console.log(result)

// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------

// // for email : 

// var myRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

// var myEmail = "alireza.moghadasi.h@gmail.com"

// var result = myRegExp.test(myEmail)
// console.log(result)

// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------

// // for iran phone : 

// var myRegExp = new RegExp(/(0|\+98)?([ ]|-|[()]){0,2}9[0|1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/)

// var phoneNumber = "09010500828"

// var result = myRegExp.test(phoneNumber)
// console.log(result)

// // support all this format : 

// // 912 123 4567
// // 912 1234 567
// // 912-123-4567
// // 912 (123) 4567
// // 9 1 2 1 2 3 4 5 6 7
// // 9 -1 (2 12))3 45-6 7
// // and all with +98 or 0
// // 0989121234567
// // +989121234567
// // 09121234567
// // 9121234567


// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------

// // Prevention XSS attack

// // exam : 
// var myRegExp = /(\b)(on\S+)(\s*)=|javascript|<(|\/|[^\/>][^>]+|\/[^>][^>]+)>/

// var myInput = "<script>"
// var myInput1 = `<a onclick = alert()>`


// console.log(myRegExp.test(myInput))
// console.log(myRegExp.test(myInput1))

// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------

// // Prevention sql injection

// var myRegExp = /(\s*([\0\b\'\"\n\r\t\%\_\\]*\s*(((select\s*.+\s*from\s*.+)|(insert\s*.+\s*into\s*.+)|(update\s*.+\s*set\s*.+)|(delete\s*.+\s*from\s*.+)|(drop\s*.+)|(truncate\s*.+)|(alter\s*.+)|(exec\s*.+)|(\s*(all|any|not|and|between|in|like|or|some|contains|containsall|containskey)\s*.+[\=\>\<=\!\~]+.+)|(let\s+.+[\=]\s*.*)|(begin\s*.*\s*end)|(\s*[\/\*]+\s*.*\s*[\*\/]+)|(\s*(\-\-)\s*.*\s+)|(\s*(contains|containsall|containskey)\s+.*)))(\s*[\;]\s*)*)+)/ig

// var myInput = "select name from user-name"

// console.log(myRegExp.test(myInput))